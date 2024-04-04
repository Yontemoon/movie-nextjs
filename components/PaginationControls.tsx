"use client"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState } from "react";

type PaginationControlsProps = {
    hasNextPage: boolean;
    hasPrevPage: boolean;
    totalPages: number;
    currentPage: number;
}

const PaginationControls = ({ hasNextPage, hasPrevPage, totalPages, currentPage }: PaginationControlsProps) => {
    
    const { replace } = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    if (totalPages > 99) {
        totalPages = 99
    }

    const handleNextPage = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", (page).toString());
        replace(`${pathname}?${params}`);
    }

    const page = searchParams.get("page") ?? "1";

    const DisplayPaginationItem = ({ page }: { page: number }) => (
        <PaginationItem>
            <PaginationLink
                className="hover:cursor-pointer"
                onClick={() => {
                    handleNextPage(page);
                }}
            >
                {page}
            </PaginationLink>
        </PaginationItem>
    );

    const DisplayEllipsis = ({pageNum}: {pageNum: number}) => {
       
        let ellipsisPage = 0
        if (pageNum < currentPage) {
            ellipsisPage = currentPage - 5;

        } else {
            ellipsisPage = currentPage + 5
        }
        if (ellipsisPage < 1) ellipsisPage = 1;
        if (ellipsisPage > totalPages) {
            ellipsisPage = totalPages
        }
        return (
            <PaginationItem className="hover:cursor-pointer">
                <PaginationEllipsis onClick={() => handleNextPage(ellipsisPage)} />
            </PaginationItem>
        );
    };

    const renderPaginationItems = () => {
        const paginationItems = [];
        
        for (let i = 1; i <= totalPages; i++) {
            if (i === currentPage) {
                paginationItems.push(
                    <PaginationItem key={i}>
                        <PaginationLink className="bg-slate-100 rounded-md">{i}</PaginationLink>
                    </PaginationItem>
                );
            } else if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                paginationItems.push(<DisplayPaginationItem key={i} page={i} />);
            } else if (i === currentPage - 2 || i === currentPage + 2) {
                paginationItems.push(<DisplayEllipsis key={i} pageNum={i}/>);
            }
        }
        console.log(paginationItems)
        return paginationItems;
    };

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    {hasPrevPage && (
                        <PaginationPrevious
                            onClick={() => {
                                handleNextPage(Number(page) - 1);
                            }}
                            className="hover:cursor-pointer"
                        />
                    )}
                </PaginationItem>

                {renderPaginationItems()}

                <PaginationItem>
                    {hasNextPage && (
                        <PaginationNext
                            onClick={() => {
                                handleNextPage(Number(page) + 1);
                            }}
                            className="hover:cursor-pointer"
                        />
                    )}
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationControls;
