import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/utils";
import { allLibraryRequest } from "../../actions";
import Book from "../../components/Book";
import { allBooks, allBooksFilter } from "../../selectors";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Book as BookType } from "../../types";
import RouterPath from "@/modules/routing/routing";

function Library() {

    const books = useSelector(allBooks);
    const filter = useSelector(allBooksFilter);
    const dispatch: AppDispatch = useDispatch();

    const navigation = useNavigate();


    useEffect(() => {
        dispatch(allLibraryRequest());
    }, []);

    const onRentBook = (book: BookType) => {
        navigation(RouterPath.RENT, {
            state: book
        });
    }

    return (
        <>
            {books.map((book) => <Book book={book} actions={<>
                <Button onClick={() => onRentBook(book)}>Add book</Button>
            </>} />)}
        </>
    );
}

export default Library;