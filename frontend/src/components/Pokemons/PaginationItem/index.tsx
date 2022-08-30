import { PaginationItemContainer } from "./style";

interface PaginationItemProps {
    isCurrent?: boolean
    number: number
    onPageChange: (page: number) => void
}

export function PaginationItem({ number, onPageChange, isCurrent = false }: PaginationItemProps): JSX.Element {

    if (isCurrent) {
        return (
            <PaginationItemContainer>
                <button className="currentPage" disabled={true}>
                    {number}
                </button>
            </PaginationItemContainer>
        )
    }


    return (
        <PaginationItemContainer>
            <button className="pages" onClick={() => onPageChange(number)}>
                {number}
            </button>
        </PaginationItemContainer>
    )
}