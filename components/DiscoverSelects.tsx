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
            <Select onValueChange={(value) => handleSearchParams("genre", value)} defaultValue={searchParams.get("genre")?.toString()}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Genres" />
                </SelectTrigger>
                <SelectContent>
                    {genres.map((genre) => (
                        <SelectItem key={genre.id} value={genre.id.toString()}>
                            {genre.name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Select onValueChange={(value) => handleSearchParams("year", value)} defaultValue={searchParams.get("year")?.toString()}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Release Year" />
                </SelectTrigger>
                <SelectContent>
                    {years.map((year, index) => (
                        <SelectItem key={index} value={year.toString()}>
                            {year}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Select onValueChange={(value) => handleSearchParams("country", value)} defaultValue={searchParams.get("country")?.toString()}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                    {countries.map((country, index) => (
                        <SelectItem key={index} value={country.iso_3166_1}>
                            {country.english_name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Select onValueChange={(value) => handleSearchParams("sortBy", value)} defaultValue={searchParams.get("sortBy")?.toString() || "popularity.desc"}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    {sortBy.map((sort, index) => (
                        <SelectItem key={index} value={sort.key}>
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