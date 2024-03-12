import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import { fetchData, postData, getFetchApi, postFetchApi } from "./db"

export const authConfig: NextAuthOptions = {
    callbacks: {
        session: async ({session, token}) => {
            // console.log("session", session)
            // console.log("token", token)
            if (session.user) {
                session.user.id = token.sub as string
                session.user.sessionId = token.jti as string
            }
            return session
        }
    },
    providers: [
        CredentialsProvider({
            name: "Sign In",
            credentials: {
                username: {
                 
                },
                password: {

                }
              
            },
            async authorize(credentials) {
                console.log("passing here")
                if (!credentials || !credentials?.username || !credentials?.password) {
                    return null
                }
                // const accountDetails = await fetchData(`/account?session_id=${credentials.username}`)
                // console.log(accountDetails)
                // return {
                //     name: accountDetails.username,
                //     image: accountDetails.avatar,
                //     id: accountDetails.id
                // }
                const token = await getFetchApi(`/authentication/token/new`)
                console.log(token)
                console.log("username", credentials.username)
                console.log("password", credentials.password)

                if (token.success) {
                    //Validates the token.
                    console.log("token success")
                    const validateToken = await postFetchApi(`/authentication/token/validate_with_login`, {
                        username: credentials.username,
                        password: credentials.password,
                        request_token: token.request_token
                    })
                    console.log("validation success", validateToken)

                    if (validateToken.success) {
                        const session = await postFetchApi(`/authentication/session/new`, {
                            request_token: validateToken.request_token
                        })
                        console.log("session", session)
                        if (session.success) {
                            const accountDetails = await fetchData(`/account/${credentials.username}?session_id=${session.session_id}`)
                            console.log(accountDetails)
                            return {
                                name: accountDetails.username,
                                id: accountDetails.id,
                                image: accountDetails.avatar.
                                session_id,
                                
                            }

                        }

                    }
                    
                }
                return null
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        })
    ]
}