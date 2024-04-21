"use client"

import countries from "@/library/countries"
import { SpokenLanguagesType } from "@/library/modals"

const isoToCountry = (language: SpokenLanguagesType) => {
    const country = countries.find((country) => country.iso_639_1.toLowerCase() === language.iso_639_1)
    return country
}


export default isoToCountry