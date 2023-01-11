import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RouterPath from "@/modules/routing/routing";

function CreateProfileButton() {

    const navigate = useNavigate();

    const onCreate = () => {
        navigate(RouterPath.ADMIN_CONTEXT.PROFILE_CREATE);
    }

    return (
        <Button onClick={onCreate}>Add profile</Button>
    );
}

export default CreateProfileButton;