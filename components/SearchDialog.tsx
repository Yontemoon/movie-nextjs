"use client"

import { fetchData } from "@/library/db";
import { Input } from "./ui/input";
import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { imageUrl } from "@/library/url";
import { MovieDetailsType } from "@/library/modals";
import { getGenreName } from "@/library/genres";
import Link from "next/link";
import { DialogClose } from "./ui/dialog";
import Loading from "./skeleton/Loading";
import { Button } from "./ui/button";
import GenreButtons from "./GenreButtons";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import DefaultPoster from "./DefaultPoster";

const SearchDialog = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [results, setResults] = useState<MovieDetailsType[] | null>(null)
    const [showLoading, setShowLoading] = useState(false)

    useEffect(() => {
        const fetchDataAsync = async () => {
            if (searchQuery === "") {
                setResults(null)
                return
            }
            setShowLoading(true);
            try {
                const fetchRequest = await fetchData(`/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`);
                const results = fetchRequest.results;
                console.log(results);
                setResults(results);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setShowLoading(false);
            }
        };

        const delayedDebounce = setTimeout(fetchDataAsync, 1000);

        return () => clearTimeout(delayedDebounce);
    },[searchQuery])
    

    return (
        <div className="flex h-full w-full flex-col overflow-hidden rounded-md">
            <Input onChange={(e) => setSearchQuery(e.target.value) }/>
                <div className="h-[500px] overflow-y-auto overflow-x-hidden">
                    {showLoading ? <Loading/> :
                    !results ? 
                        <span>There are currently no results...</span> : 
                        results.map((result) => (
                            <DialogClose key={result.id} asChild>
                            <Link href={`/movie/details/${result.id}`}>
                                <div className="flex p-1 gap-3">
                                    {/* <div> */}
                                    {result.poster_path === null ? <DefaultPoster movieTitle={`${result.title}`}/> :
                                    <Image 
                                        width={50}
                                        height={100}
                                        alt={result.title}
                                        src={`${imageUrl}${result.poster_path}`}
                                    />}
                                    {/* </div> */}
                                    <div className="flex flex-col w-full">
                                        <h3>{result.title}</h3>
                                        <div className="flex justify-between">
                                            <p>{result.release_date}</p>
                                            {/* ADD a star */}
                                            <p>{result.vote_average}</p>

                                        </div>
                                        <GenreButtons movie={result}/>
                                    </div>
                                </div>
                            </Link>
                            </DialogClose>
                    ))
                    }
                </div>
        </div>
    );
};

export default SearchDialog;

