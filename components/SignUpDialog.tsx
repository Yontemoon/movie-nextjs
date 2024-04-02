"use client"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { fetchData } from "@/library/db";


const SignUpDialog = () => {

    const [token, setToken] = useState<string | null>(null)

    const getToken = async () => {
        const requestToken = await fetchData("/authentication/token/new")
        if (requestToken.success) {
            setToken(requestToken.request_token)
        }
    }

    useEffect(() => {
        getToken()
    }, [])

    setTimeout(() => {
        getToken()
    }, 600_000)

    return (
        <Dialog>
            <DialogTrigger className="hover:underline text-sm">
                Don&apos;t have an account? Sign Up
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Authorization Required
                    </DialogTitle>
                    <DialogDescription>
                        <br />
                        This application integrates with a third-party service called The Movie Db (TMDb) via its API.
                        <br />
                        <br />
                        By proceeding, you will be redirected to TMDb&apos;s website to create an account.
                        <br />
                        <br />
                        Upon successful authentication, you&apos;ll gain access to additional features,
                        including managing your movie watchlist, favorites, and ratings.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={() => getToken()}>
                        <a target="_blank" href={`https://www.themoviedb.org/authenticate/${token}`} rel="noopener noreferrer">
                            Confirm
                        </a>
                    </Button>
                    <DialogClose asChild>
                        <Button variant={"secondary"} type="button">
                            Close
                        </Button>
                    </DialogClose>

                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default SignUpDialog;