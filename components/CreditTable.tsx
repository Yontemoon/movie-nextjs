"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link";
import { formatDate, roundNumber } from "@/utils/format";
import { MovieCastDetails, MovieCrewDetails } from "@/library/modals";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import Image from "next/image";
import { imageUrl } from "@/library/url";
import {
    ColumnDef,
    SortingState,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
  } from "@tanstack/react-table"
import { useState } from "react";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
  }
  
function CreditTable <TData, TValue> ({ data, columns }: DataTableProps<TData, TValue>) {

    const [sorting, setSorting] = useState<SortingState>([])
    



    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: {
          sorting,
        },
    })
    // console.log(table.getRowModel().rows)
    
    return (
        <Table>
            <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                            return (
                                <TableHead key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )
                                        }
                                </TableHead>
                            )
                        })}
                    </TableRow>
                ))}
            </TableHeader>
            <TableBody>
                {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                        <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                            {row.getVisibleCells().map((cell) => {
                                
                                return (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                )
                                
                            })}
                        </TableRow>
                    )) 
                    ): (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No Results.
                            </TableCell>
                        </TableRow>
                    
                )}
            </TableBody>
        </Table>
        // <Table>
        //     <TableHeader>
        //         <TableRow>
        //             <TableHead>Movie Title</TableHead>
        //             <TableHead>Release Date</TableHead>
        //             <TableHead>{creditType === "cast" ? "Character" : "Job"} </TableHead>
        //             <TableHead className="text-right">Rating</TableHead>
        //         </TableRow>
        //     </TableHeader>
        //     <TableBody>
        //         {data.map((credit) => (
        //             <HoverCard key={credit.id}>
        //                 <TableRow >
        //                     <TableCell>
        //                         <HoverCardTrigger asChild>
        //                             <Link href={`/movie/details/${credit.id}`}>
        //                                 {credit.title}
        //                             </Link>
        //                         </HoverCardTrigger>

        //                     </TableCell>
        //                     <TableCell>
        //                         {credit.release_date ? formatDate(credit.release_date) : "TBD"}
        //                     </TableCell>
        //                     <TableCell>
        //                         {creditType === "cast" ? (credit as MovieCastDetails).character || "TBD" : (credit as MovieCrewDetails).job || "TBD"}
        //                     </TableCell>
        //                     <TableCell className="text-right">
        //                         {credit.vote_average === 0 ? "TBD" : roundNumber(credit.vote_average)}
        //                     </TableCell>
                            
        //                 </TableRow>
        //                 <HoverCardContent className="w-96 grid">
        //                     {credit.overview ? credit.overview : "There is currently no overview."}
        //                     <Image width={50} height={75} alt={credit.title} src={`${imageUrl}${credit.poster_path}`}/>
        //                 </HoverCardContent>
        //             </HoverCard>
        //         ))}
        //     </TableBody>

        // </Table>
    );
};

export default CreditTable;