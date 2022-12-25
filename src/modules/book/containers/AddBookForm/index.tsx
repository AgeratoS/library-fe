import { useDispatch } from "react-redux";
import { createBookRequest } from "../../actions";
import BookFormBase from "../../components/BookFormBase";
import { Book, EntityFormBook } from "../../types";

function AddBook() {

    const dispatch = useDispatch()
    
    const onSubmit = (values: EntityFormBook) => {
        dispatch(createBookRequest(values));
    }
    
    return (
        <>
            <BookFormBase onSubmit={onSubmit} buttonText='Create book'/>
        </>
    );
}

export default AddBook;