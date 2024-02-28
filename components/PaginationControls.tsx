"use client"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useRouter, useSearchParams, usePathname } from "next/navigation";

type PaginationControlsProps = {
    hasNextPage: boolean;
    hasPrevPage: boolean;
    totalPages: number;
    currentPage: number
}

const PaginationControls = ({ hasNextPage, hasPrevPage, totalPages, currentPage }: PaginationControlsProps) => {
    
    const { replace } = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const handleNextPage = (page: number) => {
        const params = new URLSearchParams(searchParams)
        params.set("page", (page).toString())
        replace(`${pathname}?${params}`)
    }

    const page = searchParams.get("page") ?? "1"

    const DisplayPaginationItem= ({page}: {page: number}) => (
        <PaginationItem>
            <PaginationLink
            className="hover:cursor-pointer"
                onClick={() => {
                    handleNextPage(page)
                }}
            >
                {page}
            </PaginationLink>
        </PaginationItem>
    )

    
    return (
        <Pagination>
            <PaginationContent>
                
                <PaginationItem>
                    {hasPrevPage && <PaginationPrevious
                        onClick={() => {
                            handleNextPage(Number(page) -1)

                        }}
                        className="hover:cursor-pointer"
                    />}
                </PaginationItem>
                
                {hasPrevPage && <DisplayPaginationItem page={currentPage-1}/>}
                <PaginationItem>
                    <PaginationLink className="bg-slate-100 rounded-md">{currentPage}</PaginationLink>
                </PaginationItem>
                {hasNextPage && <DisplayPaginationItem page={currentPage+1}/>}

                {/* ELLIPSIS */}
                {/* <PaginationItem>
                    <PaginationEllipsis onClick={() => handleNextPage(totalPages)}/>
                </PaginationItem> */}
                <PaginationItem>
                    {hasNextPage && <PaginationNext
                        onClick={() => {
                            handleNextPage(Number(page) + 1)

                        }}
                        className="hover:cursor-pointer"
                    />}
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationControls;