import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import prisma from '@/lib/prisma';
import { existsSync } from 'fs';

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file = data.get('filePath') as File;
    const code = data.get('code');
    const description = data.get('description');
    const dateCollected = data.get('dateCollected');
    const caseId = data.get('caseId');

    if (!code || !description || !dateCollected || !caseId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

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

    // Create directory for uploads if it doesn't exist
    const uploadDir = join(process.cwd(), 'public', 'uploads', 'memos', caseId.toString());
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Generate a unique filename
    const fileExtension = file.name.split('.').pop();
    const fileName = `${code}_${Date.now()}.${fileExtension}`;
    const filePath = join(uploadDir, fileName);

    // Convert the file to an ArrayBuffer and then to a Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Write file to uploads directory
    await writeFile(filePath, buffer);

    // Save memo data to database
    const memo = await prisma.memos.create({
      data: {
        code: code.toString(),
        description: description.toString(),
        dateCollected: new Date(dateCollected.toString()),
        filePath: `/uploads/memos/${caseId}/${fileName}`,
        Case: {
          connect: { id: caseId.toString() }
        }
      }
    });

    return NextResponse.json(memo);
  } catch (error) {
    console.error('Error in memo upload:', error);
    return NextResponse.json(
      { error: 'Failed to upload memo' },
      { status: 500 }
    );
  }
}