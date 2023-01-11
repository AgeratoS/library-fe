import { EditBookButtonProps } from "@/modules/book/types";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function EditProfileButton(props: EditBookButtonProps) {

    const navigate = useNavigate();

    const onEdit = () => {

    }
    
    
    return (
        <Button onClick={onEdit}>Edit profile</Button>
    );
}

export default EditProfileButton;