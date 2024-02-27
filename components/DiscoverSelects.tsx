"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { genres } from "@/library/genres";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { years } from "@/library/years";
import countries from "@/library/countries";

const DiscoverSelects = () => {

    const { replace } = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    

    const handleSearchParams = (key: string, value: string) => {

        // router.push(`?${key}=${value}`)
        const params = new URLSearchParams(searchParams)
        if (value) {
            params.set(key, value)
        } else {
            params.delete(key)
        }
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
            {/* ADD A FILTER SECTION */}
        </span>
    );
};

export default DiscoverSelects;