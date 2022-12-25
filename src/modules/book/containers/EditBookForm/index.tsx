import { AppDispatch } from "@/utils";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateBookRequest } from "../../actions";
import BookFormBase from "../../components/BookFormBase";
import { Book, EntityFormBook } from "../../types";

function EditBookForm() {

    const dispatch: AppDispatch = useDispatch();
    const params = useLocation();

    const onSubmit = (values: EntityFormBook) => {
        dispatch(updateBookRequest({...values, id: params.state.id}));
    }


    return (
        <>
            <BookFormBase
                onSubmit={onSubmit}
                initial={params.state}
                buttonText='Update book'
            />
        </>
    );
}

export default EditBookForm;