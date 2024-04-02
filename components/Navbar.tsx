"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import SearchDialog from "./SearchDialog";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Eye from "./icons/Eye";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

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
import { useSearchParams } from "next/navigation";

const Navbar = () => {
    const session = useSession()

    return (
        <header className="top-0 z-10 w-full border-b border-border/40">
            <DropdownMenu>
            <div className="container h-14 flex max-w-screen-2xl items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/">Icon</Link>

                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    {session.status === "authenticated" ? 
                    <>
                        <DropdownMenuTrigger>{session.data.user?.name}</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            
                            <DropdownMenuLabel>Your Profile</DropdownMenuLabel> 
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem><Link href={`/${session.data.user.name}/watchlist`}>Your Watchlist <Eye watched={true}/></Link></DropdownMenuItem>
                            <DropdownMenuItem><Link href={`/${session.data.user.name}/favorites`}>Your Favorites <Heart watched={true}/></Link></DropdownMenuItem>
                            <DropdownMenuItem><Link href={`/${session.data.user.name}/ratings`}>Your Ratings <Star watched={true}/></Link></DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
                        </DropdownMenuContent>
                    </> :
                    <Link href="/login">Sign In</Link>
                    }
                    <div className="w-full flex-1 md:w-auto md:flex-none gap-5">
                        
                        <Dialog>
                            <DialogTrigger>
                                Searching for...
                            </DialogTrigger>
                            <DialogContent className="">
                                <SearchDialog />
                            </DialogContent>
                        </Dialog>
                    </div>
                    {/* {session.status !== "authenticated" ? <Link href={"/login"}>Login</Link> :<Button variant={"destructive"} onClick={handleLogout}>Logout</Button>} */}
                </div>
            </div>
            </DropdownMenu>
        </header>

    );
};

export default Navbar;