import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/utils";
import { allLibraryRequest } from "../../actions";
import Book from "../../components/Book";
import { allBooks, allBooksFilter } from "../../selectors";

function Library() {

    const books = useSelector(allBooks);
    const filter = useSelector(allBooksFilter);
    const dispatch: AppDispatch = useDispatch();


    useEffect(() => {
        dispatch(allLibraryRequest());
    }, []);

    return (
        <>
            {books.map((book) => <Book book={book} />)}
        </>
    );
}

export default Library;