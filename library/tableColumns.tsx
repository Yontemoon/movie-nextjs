"use client"

import { ColumnDef } from "@tanstack/react-table"

import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { MovieCastDetails, MovieCrewDetails } from "./modals"
import { formatDate, roundNumber } from "@/utils/format"
import Link from "next/link"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { imageUrl } from "./url"
import Image from "next/image"
import EditAccountIcons from "@/components/EditAccountIcons"
import EditAccountIconsPerson from "@/components/EditAccountIconsPerson"
import DefaultPoster from "@/components/DefaultPoster"


export const CastColumns: ColumnDef<MovieCastDetails, any>[] = [
    {
        accessorKey: 'release_date',
        header: ({ column }) => {
            return (
                <h3
                    className="hover:cursor-pointer flex "
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Release Date
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </h3>
            )
        },
        cell: ({ row }) => {
            return (
                <p >{row.getValue("release_date") ? formatDate(row.getValue("release_date")) : "TBD"}</p>
            )
        }
    },
    {
        accessorKey: 'title',
        header: ({ column }) => {
            return (
                <h3
                    className="hover:cursor-pointer flex "
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Title
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </h3>
            )
        },
        cell: ({ row }) => {
            const title: string = row.getValue("title")
            const movieId = row.original.id
            const overview = row.original.overview
            const posterUrl = row.original.poster_path
            const movieTitle = row.original.title
            return (
                <HoverCard >
                    {/* <HoverCardTrigger> */}
                    
                    <HoverCardTrigger>
                        <Link href={`/movie/details/${movieId}`} className="hover:underline ">
                            <p className="">
                                {title}
                            </p>
                        </Link>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-full">
                        <div className="flex h-60 w-96 min-h-[124px]">
                            <div className="h-full">
                                {posterUrl && <Image 
                                    src={`${imageUrl}${posterUrl}`} 
                                    alt={title} 
                                    width={200}
                                    height={300}
                                    className="object-cover rounded-sm" 
                                /> }
                            </div>
                            <p className=" ml-2 text-sm overflow-hidden truncate w-full line-clamp-6">
                                {overview}
                            </p>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            )
        }
    },
    {
        accessorKey: 'character',
        header: ({ column }) => {
            return (
                <p
                    className="hover:cursor-pointer flex "
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Character Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </p>
            )
        },
        cell: ({ row }) => {
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
        header: ({ column }) => {
            return (
                <p
                    className="hover:cursor-pointer text-right "
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Rating
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </p>
            )
        },
        cell: ({ row }) => {
            const roundedNumber = roundNumber(row.getValue("vote_average"))
            return (
                <p className="text-right">{roundedNumber === 0 ? "TBD" : roundedNumber}</p>
            )
        }
    },
    {
        accessorKey: "id",
        header: ({ column }) => {
            return (
                <h3 className="">Your Lists</h3>
            )
        },
        cell: ({row}) => <EditAccountIconsPerson MovieDetails={row.original}/>
    },
]

export const CrewColumns: ColumnDef<MovieCrewDetails, any>[] = [
    {
        accessorKey: 'release_date',
        header: ({ column }) => {
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
        cell: ({ row }) => {

            return (
                <p>{row.getValue("release_date") ? formatDate(row.getValue("release_date")) : "TBD"}</p>
            )
        }
    },
    {
        accessorKey: 'title',
        header: ({ column }) => {
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
        cell: ({ row }) => {
            const title: string = row.getValue("title")
            const movieId = row.original.id
            const movieTitle = row.original.title
            const overview = row.original.overview
            const posterUrl = row.original.poster_path
            return (
                <HoverCard>
                    <HoverCardTrigger>
                        <Link href={`/movie/details/${movieId}`} className="hover:underline ">
                            {title}
                        </Link>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-full">
                        <div className="flex h-60 w-96">
                            <div className="h-full">
                                {posterUrl && <Image 
                                    src={`${imageUrl}${posterUrl}`} 
                                    alt={title} 
                                    width={200}
                                    height={300}
                                    className="object-cover rounded-sm" 
                                /> }
                            </div>
                            <p className=" ml-2 text-sm overflow-hidden truncate w-full line-clamp-6">
                                {overview}
                            </p>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            )
        }
    },
    {
        accessorKey: 'job',
        header: ({ column }) => {
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
        cell: ({ row }) => {
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
        header: ({ column }) => {
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
        cell: ({ row }) => {
            const roundedNumber = roundNumber(row.getValue("vote_average"))
            return (
                <p className="text-right">{roundedNumber === 0 ? "TBD" : roundedNumber}</p>
            )
        }
    },
    {
        accessorKey: "id",
        header: ({ column }) => {
            return (
                <p>Your Lists</p>
            )
        },
        cell: ({row}) => <EditAccountIconsPerson MovieDetails={row.original}/>
    },
]

