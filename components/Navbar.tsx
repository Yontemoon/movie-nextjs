"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import SearchDialog from "./SearchDialog";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

const Navbar = () => {

    // const [showSearch, setShowSearch] = useState(false)

    return (
        <header className="sticky top-0 z-10 w-full border-b border-border/40">
            <div className="container h-14 flex max-w-screen-2xl items-center">
            <div className="mr-4 hidden md:flex">
                <Link href="/">Icon</Link>

            </div>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                <p>TEST</p>
                <p>TEST</p>
                <p>TEST</p>
                <div className="w-full flex-1 md:w-auto md:flex-none">
            <Dialog>
            
                    <DialogTrigger>
                        Searching for...
                    </DialogTrigger>
                    <DialogContent className="">
                        <SearchDialog/>
                    </DialogContent>

                
            </Dialog>
                </div>

            </div>
            </div>
            
        </header>

    );
};

export default Navbar;