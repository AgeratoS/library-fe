import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { EditBookButtonProps } from "../../types";
import RouterPath from '@/modules/routing/routing';

function EditBookButton(props: EditBookButtonProps) {

    const navigate = useNavigate();

    const onEditBook = () => {
        navigate(RouterPath.ADMIN_CONTEXT.BOOK_EDIT, {
            state: props.book
        });
    }


    return (
        <>
            <Button onClick={onEditBook}>Edit this book</Button>
        </>
    );
}

export default EditBookButton;