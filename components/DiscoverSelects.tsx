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

import { useRouter, useSearchParams, usePathname } from "next/navigation";




const DiscoverSelects = () => {

    const { replace } = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    

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

    return (
        <span className="flex">
            <Select onValueChange={(value) => handleSearchParams("genre", value)} defaultValue={searchParams.get("genre")?.toString()} >
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

            <Select onValueChange={(value) => handleSearchParams("year", value)} defaultValue={searchParams.get("year")?.toString()}>
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
            <Select onValueChange={(value) => handleSearchParams("country", value)} defaultValue={searchParams.get("country")?.toString()}>
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

            <Select onValueChange={(value) => handleSearchParams("sortBy", value)} defaultValue={searchParams.get("sortBy")?.toString() || "popularity.desc"}>
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
            <Button >
                Reset
            </Button>
        </span>
    );
};

export default DiscoverSelects;