import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/utils";
import { allLibraryRequest } from "@/modules/book/actions";
import { BooksList } from "@/modules/book/components";
import { allBooks } from "@/modules/book/selectors";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditBookButton from "../EditBookButton";
import RemoveBookButton from "../RemoveBookButton";
import { Book } from "../../types";
import RouterPath from "@/modules/routing/routing";

function CrudBooks() {

    const dispatch: AppDispatch = useDispatch();

    const books = useSelector(allBooks);

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(allLibraryRequest());
    }, []);

    const onCreate = () => {
        navigate(RouterPath.ADMIN_CONTEXT.BOOK_CREATE);
    }


    return (
        <>
            <IconButton onClick={onCreate}>Add book</IconButton>
            <BooksList
                books={books}
                action={(book: Book) => <div>
                    <EditBookButton book={book} />
                    <RemoveBookButton book={book} />
                </div>}
            />
        </>
    );
}

export default CrudBooks;