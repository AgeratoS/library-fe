import { PropsWithChildren } from "react";
import { Book, BooksListProps } from "../../types";

function BooksList(props: BooksListProps) {
    
    const { children, books } = props;
    
    return (
        <>
            { children }
            
        </>
    );
}

export default BooksList;