"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { MovieCastDetails, MovieCrewDetails } from "./modals"
import { formatDate, roundNumber } from "@/utils/format"
import Link from "next/link"


export const CastColumns: ColumnDef<MovieCastDetails, any>[] = [
    { 
        accessorKey: 'release_date', 
        header: ({column}) => {
            return (
                <h3
                    className="hover:cursor-pointer flex"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Release Date
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </h3>
            )
        },
        cell: ({row}) => {
            return (
                <p>{row.getValue("release_date") ? formatDate(row.getValue("release_date")) : "TBD"}</p>
            )
        }
    },
    { 
        accessorKey: 'title', 
        header: ({column}) => {
            return (
                <h3
                    className="hover:cursor-pointer flex"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Title
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </h3>
            )
        },
        cell: ({row}) => {
            const title: string = row.getValue("title")
            const movieId = row.original.id
            return (
                <Link href={`/movie/details/${movieId}`} className="hover:underline ">
                    {title}
                </Link>
            )
        }
    },
    { 
        accessorKey: 'character', 
        header: ({column}) => {
            return (
                <p
                    className="hover:cursor-pointer flex"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Character Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </p>
            )
        },
        cell: ({row}) => {
            const name: string = row.getValue("character")
            return (
                <p>
                    {name ? name : "TBD"}
                </p>
            )
        }
    },
    { 
        accessorKey: 'vote_average', 
        header: ({column}) => {
            return (
                <p
                    className="hover:cursor-pointer text-right"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Rating
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </p>
            )
        },
        cell: ({row}) => {
            const roundedNumber = roundNumber(row.getValue("vote_average"))
            return (
                <p className="text-right">{roundedNumber === 0 ? "TBD" : roundedNumber}</p>
            )
        }
    },
]

export const CrewColumns: ColumnDef<MovieCrewDetails, any>[] = [
    { 
        accessorKey: 'release_date', 
        header: ({column}) => {
            return (
                <h3
                    className="hover:cursor-pointer flex"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Release Date
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </h3>
            )
        },
        cell: ({row}) => {
            return (
                <p>{row.getValue("release_date") ? formatDate(row.getValue("release_date")) : "TBD"}</p>
            )
        }
    },
    { 
        accessorKey: 'title', 
        header: ({column}) => {
            return (
                <h3
                    className="hover:cursor-pointer flex"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Title
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </h3>
            )
        },
        cell: ({row}) => {
            const title: string = row.getValue("title")
            const movieId = row.original.id
            return (
                <Link href={`/movie/details/${movieId}`}>
                    {title}
                </Link>
            )
        }
    },
    { 
        accessorKey: 'job', 
        header: ({column}) => {
            return (
                <p
                    className="hover:cursor-pointer flex"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Job
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </p>
            )
        },
        cell: ({row}) => {
            const name: string = row.getValue("job")
            return (
                <p>
                    {name ? name : "TBD"}
                </p>
            )
        }
    },
    { 
        accessorKey: 'vote_average', 
        header: ({column}) => {
            return (
                <p
                    className="hover:cursor-pointer text-right"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Rating
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </p>
            )
        },
        cell: ({row}) => {
            const roundedNumber = roundNumber(row.getValue("vote_average"))
            return (
                <p className="text-right">{roundedNumber === 0 ? "TBD" : roundedNumber}</p>
            )
        }
    },
]

