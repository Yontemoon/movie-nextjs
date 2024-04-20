"use client"

import { fetchData } from "@/library/db";
import { Input } from "./ui/input";
import { useState, useEffect } from "react";
import Image from "next/image";
import { imageUrl } from "@/library/url";
import { MovieDetailsType } from "@/library/modals";
import Link from "next/link";
import { DialogClose } from "./ui/dialog";
import Loading from "./skeleton/Loading";
import GenreButtons from "./GenreButtons";
import DefaultPoster from "./DefaultPoster";
import { roundNumber, formatDate } from "@/utils/format";
import Star from "./icons/Star";

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
    }, [searchQuery])


    return (
        <div className="flex h-full w-full flex-col overflow-hidden rounded-md">
            <Input onChange={(e) => setSearchQuery(e.target.value)} className="mt-4"/>
            <div className="h-[500px] overflow-y-auto overflow-x-hidden mt-3">
                {showLoading ? <Loading /> :
                    !results ?
                        <span>There are currently no results...</span> :
                        results.map((result) => (
                            <DialogClose key={result.id} asChild>
                                <Link href={`/movie/details/${result.id}`}>
                                    <div className="flex p-1 gap-3">
                                        <div className="min-w-[120px] min-h-[180px]">
                                            {result.poster_path === null ?
                                                <DefaultPoster movieTitle={`${result.title}`} /> :
                                                <Image
                                                    width={150}
                                                    height={200}
                                                    sizes="(min-width: 1360px) 256px, (min-width: 780px) calc(23.21vw - 55px), (min-width: 740px) calc(35vw - 99px), (min-width: 380px) 147px, calc(16.67vw + 90px)" 
                                                    className="rounded border border-gray-600 shadow-md hover:border-gray-500"
                                                    alt={result.title}
                                                    src={`${imageUrl}${result.poster_path}`}
                                                />
                                            }
                                        </div>
                                        <div className="flex flex-col w-full gap-y-3">
                                            <h2 className="text-lg">{result.title}</h2>
                                            <div className="flex justify-between">
                                                <p className="uppercase text-sm">{result.release_date === "" ? "TBD" : formatDate(result.release_date)}</p>
                                                {/* ADD a star */}
                                                <p className="flex items-center"><Star noEffect={true} />{roundNumber(result.vote_average)}</p>

                                            </div>

                                            <GenreButtons movie={result} />

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

