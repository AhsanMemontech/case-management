import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { join } from 'path';
import { writeFile, unlink } from 'fs/promises';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const data = await request.formData();
    const file = data.get('filePath') as File;
    const code = data.get('code')?.toString();
    const caseId = data.get('caseId')?.toString();
    const description = data.get('description')?.toString();

    const { id } = await params;
    const memoId = id;
    
    // Validate file type
    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'image/tiff',
      'image/bmp',
      'image/svg+xml',
      'image/x-icon',
      'text/plain'
    ];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
          { error: 'Invalid file type. Only text files (.txt) & images (JPG, PNG, GIF, WebP, TIFF, BMP, SVG, ICO) are allowed.' },
          { status: 400 }
      );
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File size exceeds the maximum limit of 10MB.' },
        { status: 400 }
      );
    }

    // Get the old file path if it exists
    const existingMemo = await prisma.memos.findUnique({
        where: { id: id },
        select: {
          filePath: true
        }
      });

    // Delete old file if it exists
    let oldFilePath = existingMemo?.filePath;
    if (oldFilePath) {
        const absoluteOldFilePath = join(process.cwd(), 'public', oldFilePath);
        try {
            await unlink(absoluteOldFilePath);
        } catch (error) {
            console.error('Error deleting old file:', error);
            // Continue with upload even if delete fails
        }
    }
    
    const uploadDir = join(process.cwd(), 'public', 'uploads', 'memos', caseId!);
    // Generate a unique filename
    const fileExtension = file.name.split('.').pop();
    const fileName = `${code}_${Date.now()}.${fileExtension}`;
    const filePath = join(uploadDir, fileName);

    // Convert the file to an ArrayBuffer and then to a Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Write the file to the filesystem
    await writeFile(filePath, buffer);
    
    const updatedMemo = await prisma.memos.update({
      where: {
        id: memoId,
      },
      data: {
        filePath: `/uploads/memos/${caseId}/${fileName}`,
        description: description,
      },
    });
    
    return NextResponse.json(updatedMemo);
  } catch (error) {
    console.error('Error updating memo:', error);
    return NextResponse.json(
      { error: 'Failed to update memo' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
)
  {
    try {
    const { id } = await params;
    const memoId = id;

    const deletedMemo = await prisma.memos.delete({
      where: {
        id: memoId,
      }
    });

    return NextResponse.json(deletedMemo, { status : 200 });
  } 
  catch (error) {
    console.error('Error deleting memo:', error);
    return NextResponse.json(
      { error: 'Failed to delete memo' },
      { status: 500 }
    );
  }
}