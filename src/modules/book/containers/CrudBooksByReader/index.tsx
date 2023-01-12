import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { BooksByReaderTable } from "../../components";
import { Book } from "../../types";
import RouterPath from "@/modules/routing/routing";
import { useState } from "react";
import { unlinkBookRequest } from "../../actions";
import { Reader } from "@/modules/reader/types";
import { booksInReader, selectedReader } from "@/modules/admin/selectors";

function CrudBooksByReader() {

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const books = useSelector(booksInReader);
    const reader = useSelector(selectedReader);

    const onAddBook = () => {
        navigate(RouterPath.ADMIN_CONTEXT.BOOK_READER_ADD);
    }

    const onRemoveBook = (book: Book) => {
        dispatch(unlinkBookRequest({
            book,
            reader: reader!
        }))
    }
    
    
    return (
        <BooksByReaderTable 
            books={books ?? []} 
            onAddBook={onAddBook}
            onRemoveBook={onRemoveBook}
        />
    );
}

export default CrudBooksByReader;