import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "@/utils";
import { allLibraryRequest } from "@/modules/book/actions";
import { Book, BooksList } from "@/modules/book/components";
import { allBooks } from "@/modules/book/selectors";
import { IconButton } from "@mui/material";
import EditBookButton from "../EditBookButton";
import RemoveBookButton from "../RemoveBookButton";
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
            {books.map((book) => (<Book book={book} actions={<div>
                    <EditBookButton book={book} />
                    <RemoveBookButton book={book} />
                </div>}/>))}
        </>
    );
}

export default CrudBooks;