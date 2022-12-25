import { AppDispatch } from "@/utils";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBookRequest } from "../../actions";
import { RemoveBookButtonProps } from "../../types";

function RemoveBookButton(props: RemoveBookButtonProps) {

    const dispatch: AppDispatch = useDispatch();

    const onRemove = () => {
        dispatch(deleteBookRequest(props.book))
    }


    return (
        <>
            <Button onClick={onRemove}>Remove this book</Button>
        </>
    );
}

export default RemoveBookButton;