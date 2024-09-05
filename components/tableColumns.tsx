"use client"

import { ColumnDef } from "@tanstack/react-table"

import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { MovieCastDetails, MovieCrewDetails } from "../library/modals"
import { formatDate, roundNumber } from "@/utils/format"
import Link from "next/link"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { imageUrl } from "../library/url"
import Image from "next/image"
import Star from "./icons/Star"
import EditAccountIconsPerson from "@/components/EditAccountIconsPerson"

import { space_mono } from "@/utils/font"


export const CastColumns: ColumnDef<MovieCastDetails, any>[] = [
    {
        accessorKey: 'release_date',
        header: ({ column }) => {
            return (
                <h3
                    className="hover:cursor-pointer flex whitespace-nowrap "
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
                    className="hover:cursor-pointer flex whitespace-nowrap"
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
            
            return (
                <HoverCard >
                    {/* <HoverCardTrigger> */}
                    
                    <HoverCardTrigger>
                        <Link href={`/movie/details/${movieId}`} className={`${space_mono.className} underline hover:text-secondaryRed`}>
                            <p className="">
                                {title}
                            </p>
                        </Link>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-full">
                        <div className="flex h-56 w-96 min-h-[124px]">
                            <div className="h-full content-center">
                                {posterUrl && <Image 
                                    src={`${imageUrl}${posterUrl}`} 
                                    alt={title} 
                                    width={200}
                                    height={300}
                                    className="object-cover border rounded-md" 
                                    quality={70}
                                /> }
                            </div>
                            <p className=" ml-4 text-sm  my-4 w-full  text-wrap text-ellipsis overflow-auto">
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
                <h3
                    className="hover:cursor-pointer flex whitespace-nowrap"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Character Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </h3>
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
                <h3
                    className="hover:cursor-pointer flex whitespace-nowrap items-center"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <Star noEffect={true}/>Rating
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </h3>
            )
        },
        cell: ({ row }) => {
            const roundedNumber = roundNumber(row.getValue("vote_average"))
            return (
                <p className="">{roundedNumber === 0 ? "TBD" : roundedNumber}</p>
            )
        }
    },
    {
        accessorKey: "id",
        header: ({ column }) => {
            return (
                <h3 className="whitespace-nowrap text-right">Your Lists</h3>
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
                <HoverCard >
                    <HoverCardTrigger>
                        <Link href={`/movie/details/${movieId}`} className={`${space_mono.className} underline hover:text-secondaryRed`}>
                            <p className="">
                                {title}
                            </p>
                        </Link>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-full">
                        <div className="flex h-56 w-96 min-h-[124px]">
                            <div className="h-full content-center">
                                {posterUrl && <Image 
                                    src={`${imageUrl}${posterUrl}`} 
                                    alt={title} 
                                    width={200}
                                    height={300}
                                    className="object-cover rounded-sm" 
                                /> }
                            </div>
                            <p className=" ml-4 text-sm  my-4 w-full  text-wrap text-ellipsis overflow-auto">
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
                <h3
                    className="hover:cursor-pointer flex"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Job
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </h3>
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
                <h3
                    className="hover:cursor-pointer flex whitespace-nowrap items-center"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <Star noEffect={true}/>Rating
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </h3>
            )
        },
        cell: ({ row }) => {
            const roundedNumber = roundNumber(row.getValue("vote_average"))
            return (
                <p className="">{roundedNumber === 0 ? "TBD" : roundedNumber}</p>
            )
        }
    },
    {
        accessorKey: "id",
        header: ({ column }) => {
            return (
                <h3>Your Lists</h3>
            )
        },
        cell: ({row}) => <EditAccountIconsPerson MovieDetails={row.original}/>
    },
]

