import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const searchParams = new URL(request.url).searchParams;
    const userId = searchParams.get('userId');

    const cases = await prisma.case.findMany({
      where: {
        userCases: {
          some: {
            OR: [
              { userId: userId ?? "" },
              { assignedToUserId: userId }
            ]
          }
        },
        mukhtiarkarACReportUploaded: true,
        barrageBranchReportUploaded: true,
        evacueePropertyReportUploaded: true,
        newspaperPublicationUploaded: true,
        mukhtiarkarACReportPath: { not: null },
        barrageBranchReportPath: { not: null },
        evacueePropertyReportPath: { not: null },
        newspaperPublicationPath: { not: null },
      },
      orderBy: { createdAt: 'desc' },
      include: {
        userCases: {
          include: {
            user: true,
            assignedToUser: true
          }
        }
      }
    });
    
    return NextResponse.json(cases);
  } catch (error) {
    console.error('Error fetching cases:', error);
    return NextResponse.json({ error: 'Failed to fetch cases' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const newCase = await prisma.case.create({
      data: {
        code: data.code,
        title: data.title,
        caseType: data.caseType,
        status: data.status || 'Active', 
        //priority: data.priority,
        dateOfInstitution: new Date(data.dateOfInstitution),
        orderOfDate: new Date(data.orderOfDate),
        nextDate: new Date(data.nextDate),
        location: data.location,
        taluka: data.taluka || null,
        deh: data.deh || null,
        description: data.description
      },
      include: {
        //involvedOfficers: true,
        //involvedPersons: true,
        memos: true,
        notes: true,
      },
    });
    
    // Add memo if any
    if (data.memos && data.memos.length > 0) {
      for (const memo of data.memos) {
        await prisma.memos.create({
          data: {
            code: memo.code,
            filePath: memo.filePath,
            description: memo.description,
            dateCollected: new Date(memo.dateCollected),
            caseId: newCase.id,
          },
        });
      }
    }
    
    // Add notes if any
    if (data.notes && data.notes.length > 0) {
      for (const note of data.notes) {
        await prisma.notes.create({
          data: {
            code: note.code,
            title: note.title,
            content: note.content,
            caseId: newCase.id,
          },
        });
      }
    }

    console.log(data);
    // Add AssignedToUser if any
     if (data.userId && data.assignedToUserId) {
       await prisma.userCases.create({
         data: {
           userId: data.userId,
           caseId: newCase.id,
           assignedToUserId: data.assignedToUserId,
           status: true,
         },
       });
     }
    
    return NextResponse.json(newCase, { status: 201 });
  } catch (error) {
    console.error('Error creating case:', error);
    return NextResponse.json({ error: 'Failed to create case' }, { status: 500 });
  }
}