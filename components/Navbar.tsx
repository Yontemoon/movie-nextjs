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
    DialogTrigger,
} from "@/components/ui/dialog"
import Heart from "./icons/Heart";
import Star from "./icons/Star";
import Search from "./icons/Search";
import { rem,  } from "@/utils/font";


const Navbar = () => {
    const session = useSession()

    return (
        <header className="top-0 z-10 w-full border-b border-border/40">
            <DropdownMenu>
                <div className="container h-14 flex max-w-screen-2xl items-center ">
                    <div className="mr-4 md:flex hidden">
                        <Link href="/" className={`${rem.className} text-red font-bold text-xl tracking-wider hover:decoration-dashed transition-all duration-300`}>MONTEMovies</Link>
                    </div>
                    <div className="mr-4 md:hidden flex">
                        <Link href="/" className={`${rem.className} text-red font-bold text-xl tracking-wider hover:decoration-dashed`}>Mm</Link>
                    </div>
                    <div className="flex flex-1 items-center  space-x-2 justify-end gap-3">
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
                                                <Eye noEffect={true} />

                                            </DropdownMenuItem>
                                        </Link>
                                        <Link href={`/${session.data.user.name}/favorites`} >
                                            <DropdownMenuItem className="justify-between">

                                                <span className="">
                                                    Your Favorites
                                                </span>
                                                <Heart noEffect={true} />


                                            </DropdownMenuItem>
                                        </Link>
                                        <Link href={`/${session.data.user.name}/ratings`} >
                                            <DropdownMenuItem className="justify-between">

                                                <span className="">
                                                    Your Ratings
                                                </span>
                                                <Star noEffect={true} />


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