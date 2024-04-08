"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from "./ui/button";

import { genres } from "@/library/genres";
import countries from "@/library/countries";
import { years } from "@/library/years";
import sortBy from "@/library/sortBy";
import { useState } from "react";

import { useRouter, useSearchParams, usePathname } from "next/navigation";




const DiscoverSelects = () => {

    const { replace } = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [genreValue, setGenreValue] = useState(searchParams.get("genre")?.toString() || '');
    const [yearValue, setYearValue] = useState(searchParams.get("year")?.toString() || '');
    const [countryValue, setCountryValue] = useState(searchParams.get("country")?.toString() || '');
    const [sortByValue, setSortByValue] = useState(searchParams.get("sortBy")?.toString() || "popularity.desc");    

    const handleSearchParams = (key: string, value: string) => {

        // router.push(`?${key}=${value}`)
        const params = new URLSearchParams(searchParams)
        if (value) {
            params.set(key, value)
            params.set("page", "1")
        } else {
            params.delete(key)
        }
        const page = params.get("page")
        replace(`${pathname}?${params.toString()}`)

    }

    const handleReset = () => {
        // Reset all select options
        setGenreValue('');
        setYearValue('');
        setCountryValue('');
        setSortByValue('popularity.desc');

        // Reset searchParams
        const params = new URLSearchParams(searchParams);
        params.forEach((value, key) => {
            params.delete(key);
        });
        replace(`${pathname}?`);
    };

    return (
        <span className="lg:flex gap-2 mt-2 grid grid-cols-2">
            <Select onValueChange={(value) => {setGenreValue(value); handleSearchParams("genre", value)}} defaultValue={searchParams.get("genre")?.toString()} value={genreValue}>
                <SelectTrigger className="w-[180px] bg-[#181a1b] border-[#363b3d]">
                    <SelectValue placeholder="All Genres" />
                </SelectTrigger>
                <SelectContent className="bg-[#181a1b] border-[#363b3d]">
                    {genres.map((genre) => (
                        <SelectItem key={genre.id} value={genre.id.toString()} className="text-white">
                            {genre.name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Select onValueChange={(value) => {setYearValue(value); handleSearchParams("year", value)}} defaultValue={searchParams.get("year")?.toString()} value={yearValue}>
                <SelectTrigger className="w-[180px] bg-[#181a1b] border-[#363b3d]">
                    <SelectValue placeholder="Release Year" />
                </SelectTrigger>
                <SelectContent className="bg-[#181a1b] border-[#363b3d]">
                    {years.map((year, index) => (
                        <SelectItem key={index} value={year.toString()} className="text-white">
                            {year}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Select onValueChange={(value) => {setCountryValue(value); handleSearchParams("country", value)}} defaultValue={searchParams.get("country")?.toString()} value={countryValue}>
                <SelectTrigger className="w-[180px] bg-[#181a1b] border-[#363b3d]">
                    <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent className="bg-[#181a1b] border-[#363b3d]">
                    {countries.map((country, index) => (
                        <SelectItem key={index} value={country.iso_3166_1} className="text-white">
                            {country.english_name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Select onValueChange={(value) => {setSortByValue(value); handleSearchParams("sortBy", value)}} defaultValue={searchParams.get("sortBy")?.toString() || "popularity.desc"} value={sortByValue}>
                <SelectTrigger className="w-[180px] bg-[#181a1b] border-[#363b3d]">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#181a1b] border-[#363b3d]">
                    {sortBy.map((sort, index) => (
                        <SelectItem key={index} value={sort.key} className="text-white">
                            {sort.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            
            {/* ADD A FILTER SECTION */}
            
                <Button onClick={handleReset} variant={"destructive"} className=" col-span-2">
                    Reset
                </Button>
            
        </span>
    );
};

export default DiscoverSelects;