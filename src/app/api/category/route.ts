// import { NextResponse } from "next/server";
// import { db } from "@/lib/db";
// import * as z from "zod";


// //Define a schema for input validation...
// const CategorySchema = z
//   .object({
//     categoryname: z.string().min(1, 'Username is required').max(100),
//     categoryimage: z.string().min(1, 'Email is required'),
    
//   })

// export async function POST(req: Request){
    
//     try{

//         const body = await req.json();
//         const {categoryname, categoryimage} = CategorySchema.parse(body);
//         //checking if category already exist..
//         const categoryExist = await db.category.findUnique({
//             where: {categoryname: categoryname}
//         });

//         if(categoryExist){
//             return NextResponse.json({category: null, message: "category already Existed!"},{status: 409})
//         }

//             //store new category data...
//             const newCategory = await db.category.create({
//                 data:{
//                     categoryname,
//                     categoryimage
//                 }

//             });
//              // hide password from returning...
//              const {categoryimage: newCategoryImage, ...rest} = newCategory;
  
//         return NextResponse.json({category: rest, message: "New user Added Successfully!"}, {status: 201});

//     }catch(error){
//         //send error messages...
//         return NextResponse.json({message: "Something went wrong, Please Try Again!"}, {status: 500})     

//     }
// } 