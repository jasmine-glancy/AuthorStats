import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Please enter your username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "Please enter your password"
                }
            },
            async authorize(credentials) {
                // TODO: Gather information from the database
                const user = { id: "2", name: "Jasmine", password: "testingthings" }
                
                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        }) 
    ],
    pages: {
        signIn: "/login",
    }
}