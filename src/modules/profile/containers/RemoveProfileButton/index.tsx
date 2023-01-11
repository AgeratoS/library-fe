import { Button } from "@mui/material";
import { RemoveProfileButtonProps } from "../../types";

function RemoveProfileButton(props: RemoveProfileButtonProps) {

    const onRemove = () => {

    }
    
    
    return (
        <Button onClick={onRemove}>Remove button</Button>
    );
}

export default RemoveProfileButton;