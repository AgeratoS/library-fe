import { reader } from "@/modules/reader/selectors";
import { AppDispatch } from "@/utils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { takenBooksRequest } from "../../actions";
import BooksList from "../../components/BooksList";
import { takenBooks as takenBooksSelector } from "../../selectors";

function TakenBooks() {

    const takenBooks = useSelector(takenBooksSelector);
    const _reader = useSelector(reader);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(takenBooksRequest(_reader?.id!));
    }, []);

    return (
        <>
            <BooksList books={takenBooks} />
        </>
    );
}

export default TakenBooks;