"use client"

import {format, parseISO} from "date-fns"

export const formatDate = (date: string) => {
    const parsedDate = parseISO(date)
    return format(parsedDate, "PPP")
}

export const roundNumber = (number: number) => {
    return Math.round(number * 10) / 10;
}

export const numberWithCommas = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const initials = (name: string) => {
    let words = name.split(" ")
    let initials = "";
    for (let i = 0; i < words.length; i++) {
        initials += words[i][0].toUpperCase();

    }
    return initials;
}