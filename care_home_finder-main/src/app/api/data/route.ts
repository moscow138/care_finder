import { NextResponse } from "next/server";
import { db } from "@/lib/db";

//setp fetch categries Api Route
export async function GET(request: Request) {
    try {
      const categories = await db.category.findMany();
      return NextResponse.json({ message: 'GET method success', data: categories });
    } catch (error) {
      console.error('Error fetching users:', error);
        //send error messages...
        return NextResponse.json({message: "Something went wrong, Please Try Again!"}, {status: 500}) 
    }
  }