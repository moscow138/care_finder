import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hash } from "bcrypt";
import * as z from "zod";

//Define a schema for input validation...
const userSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
    
  })

export async function POST(req: Request){
    
    try{

        const body = await req.json();
        const {email, username, password} = userSchema.parse(body);
        //checking if user email already exist..
        const userEmailExist = await db.user.findUnique({
            where: {email: email}
        });

        if(userEmailExist){
            return NextResponse.json({user: null, message: "User Email Already Exist, Please Login!"},{status: 409})
        }
            //checking if username already exist..
            const userNameExist = await db.user.findUnique({
                where: {username: username}
            });
            if(userNameExist){
                return NextResponse.json({user: null, message: "Username Already Exist, Please Login!"},{status: 408})
            }

            //hash password using bcrypt..
            const hashPassword = await hash(password, 10);

            //store new user data...
            const newUser = await db.user.create({
                data:{
                    username,
                    email,
                    password: hashPassword
                }

            });
            // hide password from returning...
            const {password: newUserPassword, ...rest} = newUser;

        return NextResponse.json({user: rest, message: "New user Added Successfully!"}, {status: 201});

    }catch(error){
        //send error messages...
        return NextResponse.json({message: "Something went wrong, Please Try Again!"}, {status: 500})

    }
} 