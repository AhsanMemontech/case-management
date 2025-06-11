import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, unlink } from 'fs/promises';
import { join } from 'path';
import prisma from '@/lib/prisma';
import { existsSync } from 'fs';

export async function POST(request: NextRequest) {
  try {

    // Parse the form data
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const reportType = formData.get('reportType') as string;
    const caseId = formData.get('caseId') as string;

    if (!file || !reportType || !caseId) {
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
        'image/x-icon'
    ];
  
    if (!allowedTypes.includes(file.type)) {
    return NextResponse.json(
        { error: 'Invalid file type. Only images (JPG, PNG, GIF, WebP, TIFF, BMP, SVG, ICO) are allowed.' },
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
    const existingCase = await prisma.case.findUnique({
      where: { id: caseId },
      select: {
        mukhtiarkarACReportPath: true,
        evacueePropertyReportPath: true,
        barrageBranchReportPath: true,
        newspaperPublicationPath: true
      }
    });

    // Delete old file if it exists
    let oldFilePath = '';
    switch (reportType) {
      case 'mukhtiarkarACReport':
        oldFilePath = existingCase?.mukhtiarkarACReportPath || '';
        break;
      case 'evacueePropertyReport':
        oldFilePath = existingCase?.evacueePropertyReportPath || '';
        break;
      case 'barrageBranchReport':
        oldFilePath = existingCase?.barrageBranchReportPath || '';
        break;
      case 'newspaperPublication':
        oldFilePath = existingCase?.newspaperPublicationPath || '';
        break;
    }

    if (oldFilePath) {
      const absoluteOldFilePath = join(process.cwd(), 'public', oldFilePath);
      try {
        await unlink(absoluteOldFilePath);
      } catch (error) {
        console.error('Error deleting old file:', error);
        // Continue with upload even if delete fails
      }
    }

    // Create directory for uploads if it doesn't exist
    const uploadDir = join(process.cwd(), 'public', 'uploads', 'reports', caseId);
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Generate a unique filename
    const fileExtension = file.name.split('.').pop();
    const fileName = `${reportType}_${Date.now()}.${fileExtension}`;
    const filePath = join(uploadDir, fileName);

    // Convert the file to an ArrayBuffer and then to a Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Write the file to the filesystem
    await writeFile(filePath, buffer);

    // Update the case record in the database
    const updateData: any = {};
    
    switch (reportType) {
      case 'mukhtiarkarACReport':
        updateData.mukhtiarkarACReportUploaded = true;
        updateData.mukhtiarkarACReportPath = `/uploads/reports/${caseId}/${fileName}`;
        break;
      case 'evacueePropertyReport':
        updateData.evacueePropertyReportUploaded = true;
        updateData.evacueePropertyReportPath = `/uploads/reports/${caseId}/${fileName}`;
        break;
      case 'barrageBranchReport':
        updateData.barrageBranchReportUploaded = true;
        updateData.barrageBranchReportPath = `/uploads/reports/${caseId}/${fileName}`;
        break;
      case 'newspaperPublication':
        updateData.newspaperPublicationUploaded = true;
        updateData.newspaperPublicationPath = `/uploads/reports/${caseId}/${fileName}`;
        break;
      default:
        return NextResponse.json(
          { error: 'Invalid report type' },
          { status: 400 }
        );
    }

    await prisma.case.update({
      where: { id: caseId },
      data: updateData,
    });

    // Create an activity log entry
    // await prisma.activityLog.create({
    //   data: {
    //     action: `Uploaded ${reportType}`,
    //     userId: user.id,
    //     caseId: caseId,
    //     details: `${user.name} (${user.role}) uploaded ${reportType} for case`,
    //   },
    // });

    // Validate required fields
    if (!reportType || !caseId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get the report to verify it exists
    const report = await prisma.report.findFirst({
      where: { reportType: reportType, caseId: caseId }
    });

    if (!report) {
      await prisma.report.create({
        data: {
          caseId: caseId,
          reportType: reportType,
        }
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Report uploaded successfully',
      filePath: `/uploads/reports/${caseId}/${fileName}`,
    });
  } catch (error) {
    console.error('Error uploading report:', error);
    return NextResponse.json(
      { error: 'Failed to upload report' },
      { status: 500 }
    );
  }
}