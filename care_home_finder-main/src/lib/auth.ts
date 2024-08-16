import { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { db } from "./db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  adapter:PrismaAdapter(db),
  secret:process.env.NEXTAUTH_SECRET,
  session:{
    strategy: 'jwt'
  },
  pages:{
    signIn: '/sign-in'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email", placeholder: "john@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        //check if email field and password feild is empty!
        if(!credentials?.email || !credentials?.password){
            return null
        }
        //checking if user exist in database!
        const userExist = await db.user.findUnique({
            where: {email: credentials?.email}
        });
        //check again if user exist..
        if(!userExist){
            return null;
        }
        //checking if user provide a password!
        if(userExist.password){
            //checking if the password match the user inputed password..
        const passwordMatch = await compare(credentials.password, userExist.password);
        //checking if password exist..
        if(!passwordMatch){
            return null;
        }

        }
      
        return {
            id: `${userExist.id}`,
            username: userExist.username,
            email: userExist.email
        }
      }
    })
  ],
  
  callbacks: {
    async jwt({ token, user }) {
        if(user){
            return {
                ...token,
                username: user.username
            }

        }
        return token;
    },
    async session({session,user,token}) {
        return {
            ...session,
            user:{
                ...session.user,
                username: token.username
            }
        }
        // return session;
    }
  }

}
