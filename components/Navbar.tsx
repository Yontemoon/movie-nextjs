"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import SearchDialog from "./SearchDialog";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Eye from "./icons/Eye";
import Discover from "./icons/Discover";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import SmallDownArrow from "./icons/SmallDownArrow";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Heart from "./icons/Heart";
import Star from "./icons/Star";
import Search from "./icons/Search";
import { primaryRed, secondaryRed, primaryGreen, secondaryGreen } from "@/library/primaryColors";

const Navbar = () => {
    const session = useSession()

    return (
        <header className="top-0 z-10 w-full border-b border-border/40">
            <DropdownMenu>
                <div className="container h-14 flex max-w-screen-2xl items-center px-44">
                    <div className="mr-4 hidden md:flex">
                        <Link href="/">Icon</Link>

                    </div>
                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end gap-3">
                        <Dialog>
                            <DialogTrigger>
                                <Search />
                            </DialogTrigger>
                            <DialogContent className="">
                                <SearchDialog />
                            </DialogContent>
                        </Dialog>

                        <Link href="/discover">
                            <Discover />
                        </Link>
                        {session.status === "authenticated" ?
                            <>
                                <DropdownMenuTrigger className={` flex font-semibold text-center items-center uppercase text-sm  px-2 rounded-sm bg-green hover:bg-secondaryGreen transition-all duration-100 h-[28px]`}>
                                    {session.data.user?.name} <SmallDownArrow />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>

                                    <DropdownMenuLabel>Your Profile</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <div>
                                        <Link href={`/${session.data.user.name}/watchlist`} >
                                            <DropdownMenuItem className="justify-between">

                                                <span className="mr-3">
                                                    Your Watchlist
                                                </span>
                                                <Eye watched={true} />

                                            </DropdownMenuItem>
                                        </Link>
                                        <Link href={`/${session.data.user.name}/favorites`} >
                                            <DropdownMenuItem className="justify-between">

                                                <span className="">
                                                    Your Favorites
                                                </span>
                                                <Heart watched={true} />


                                            </DropdownMenuItem>
                                        </Link>
                                        <Link href={`/${session.data.user.name}/ratings`} >
                                            <DropdownMenuItem className="justify-between">

                                                <span className="">
                                                    Your Ratings
                                                </span>
                                                <Star watched={true} />


                                            </DropdownMenuItem>
                                        </Link>
                                    </div>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
                                </DropdownMenuContent>
                            </> :
                            <Link href="/login" className=" flex font-semibold text-center items-center uppercase text-sm  px-2 rounded-sm bg-red hover:bg-secondaryRed transition-all duration-75 h-[28px]">
                                Sign In
                            </Link>
                        }

                    </div>
                </div>
            </DropdownMenu>
        </header>

    );
};

export default Navbar;