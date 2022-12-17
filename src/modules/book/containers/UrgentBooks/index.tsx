import { AppDispatch } from "@/utils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { urgentBooksRequest } from "../../actions";
import BooksList from "../../components/BooksList";
import { urgentBooks as urgentBooksSelector } from "../../selectors";

function UrgentBooks() {

    const urgentBooks = useSelector(urgentBooksSelector);
    const dispatch: AppDispatch = useDispatch();
    
    useEffect(() => {
        // TODO: Заменить на реальный идентификатор читателя
        dispatch(urgentBooksRequest(1));
    }, []);
    
    return (
        <>
            <BooksList books={urgentBooks}/>
        </>
    );
}

export default UrgentBooks;