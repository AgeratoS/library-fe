import { uniqueBooks } from "@/modules/admin/selectors";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allLibraryRequest } from "../../actions";
import Book from "../../components/Book";
import { Book as BookType } from "../../types";
import RouterPath from "@/modules/routing/routing";

function AdminLibrary() {

    const books = useSelector(uniqueBooks);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(allLibraryRequest());
    }, [])

    const onRentBook = (book: BookType) => {
        navigate(RouterPath.ADMIN_CONTEXT.BOOK_READER_RENT, {
            state: book
        });
    }

    return (
        <>
            {books.map((book) => (<Book book={book}
                key={book.id}
                actions={<Button onClick={() => onRentBook(book)}>Add book</Button>}
            />))}
        </>
    );
}

export default AdminLibrary;