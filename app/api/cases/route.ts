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
        }
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
        nextDate: new Date(data.nextDate),
        location: data.location,
        talukaId: data.talukaId || null,
        dehId: data.dehId || null,
        description: data.description
      },
      include: {
        //involvedOfficers: true,
        //involvedPersons: true,
        evidences: true,
        notes: true,
      },
    });
    // Then create the related records
    
    // Add officers if any
    // if (data.involvedOfficers && data.involvedOfficers.length > 0) {
    //   for (const officer of data.involvedOfficers) {
    //     await prisma.involvedOfficers.create({
    //       data: {
    //         code: officer.code,
    //         name: officer.name,
    //         badge: officer.badge,
    //         caseId: newCase.id,
    //       },
    //     });
    //   }
    // }
    
    // // Add persons if any
    // if (data.involvedPersons && data.involvedPersons.length > 0) {
    //   for (const person of data.involvedPersons) {
    //     await prisma.involvedPersons.create({
    //       data: {
    //         code: person.code,
    //         name: person.name,
    //         role: person.role,
    //         contact: person.contact || null,
    //         caseId: newCase.id,
    //       },
    //     });
    //   }
    // }
    
    // Add evidence if any
    if (data.evidences && data.evidences.length > 0) {
      for (const evidence of data.evidences) {
        await prisma.evidences.create({
          data: {
            code: evidence.code,
            type: evidence.type,
            description: evidence.description,
            dateCollected: new Date(evidence.dateCollected),
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