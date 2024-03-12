
import { NextRequest } from "next/server";
import { postData } from "./library/db";
import { signIn } from "next-auth/react";


export async function middleware (req: NextRequest) {
    // if (req.nextUrl.searchParams.get("request_token")) {
    //     // const requestToken = req.nextUrl.searchParams.get("request_token")
    //     // const session = await postData("/authentication/session/new", {
    //     //     request_token: requestToken
    //     // })

    //     // const signinInfo = await handleSignin(session)
    //     // console.log("signininfo,", signinInfo)
    //     // // const handleSignin = async () => {
    //     //     "use client"
    //     //     const signinResponse = await signIn("credentials", {
    //     //         username: session.session_id,
    //     //         redirect: false
    //     //     })
    //     //     return signinResponse
    //     // }
    //     // const signinResponse = await handleSignin()
    //     // console.log("SIGNINRESPONSE", signinInfo)
    // }
    
};


