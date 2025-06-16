import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const caseId = id;
    
    const caseData = await prisma.case.findUnique({
      where: {
        id: caseId,
      },
      include: {
        taluka: {
          select: {
            name: true,
          },
        },
        deh: {
          select: {
            name: true,
          },
        },
        userCases: {
          include: {
            assignedToUser: true
          }
        },
        memos: true,
        notes: true,
        forwardedToMukhtiarkar: {
          select: {
            id: true,
            name: true,
            role: true
          }
        }
      }
    });
    
    if (!caseData) {
      return NextResponse.json(
        { error: 'Case not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(caseData);
  } catch (error) {
    console.error('Error fetching case:', error);
    return NextResponse.json(
      { error: 'Failed to fetch case' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const caseId = id;
    const data = await request.json();
    
    // Extract the main case data
    const { 
      title, 
      caseType, 
      status, 
      talukaId, 
      dehId,
      dateOfInstitution, 
      orderOfDate,
      nextDate, 
      location, 
      description,
      //involvedOfficers,
      //involvedPersons,
      memos,
      notes
    } = data;
    
    // Update the case
    const updatedCase = await prisma.case.update({
      where: {
        id: caseId,
      },
      data: {
        title,
        caseType,
        status,
        talukaId,
        dehId,
        dateOfInstitution: new Date(dateOfInstitution),
        nextDate: new Date(nextDate),
        orderOfDate: new Date(orderOfDate),
        location,
        description
        // Handle relationships in a transaction if needed
      },
      include: {
        //involvedOfficers: true,
        //involvedPersons: true,
        memos: true,
        notes: true,
      },
    });
    
    // For a more complex update with relationships, you might want to use a transaction
    // This is a simplified version - you may need to handle relationship updates separately
    
    return NextResponse.json(updatedCase);
  } catch (error) {
    console.error('Error updating case:', error);
    return NextResponse.json(
      { error: 'Failed to update case' },
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
    const caseId = id;

    const deletedCase = await prisma.case.delete({
      where: {
        id: caseId,
      }
    });

    return NextResponse.json(deletedCase, { status : 200 });
  } 
  catch (error) {
    console.error('Error deleting case:', error);
    return NextResponse.json(
      { error: 'Failed to delete case' },
      { status: 500 }
    );
  }
}