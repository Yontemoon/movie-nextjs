import NextAuth, {DefaultSession} from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            sessionId: string
            id: string
        } & DefaultSession["user"]
    }
}