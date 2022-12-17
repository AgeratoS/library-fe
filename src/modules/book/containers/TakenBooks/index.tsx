import { AppDispatch } from "@/utils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { takenBooksRequest } from "../../actions";
import BooksList from "../../components/BooksList";
import { takenBooks as takenBooksSelector } from "../../selectors";

function TakenBooks() {

    const takenBooks = useSelector(takenBooksSelector);
    const dispatch: AppDispatch = useDispatch();
    
    useEffect(() => {
        // TODO: Поменять 1 на реальный ид читателя
        dispatch(takenBooksRequest(1));
    }, []);
    
    return (
        <>
            <BooksList books={takenBooks}/>
        </>
    );
}

export default TakenBooks;