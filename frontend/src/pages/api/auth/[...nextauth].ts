import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import { setCookie } from 'nookies'
import { api } from "../../../services/api";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        FacebookProvider({
            clientId: '',
            clientSecret: ''
        })
    ],
    callbacks: {
        async session({ session, token }) {

            session.user.providerId = token.sub as string

            return session
        }
    }
})