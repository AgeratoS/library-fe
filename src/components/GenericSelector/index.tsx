import { Select, SelectProps } from "@mui/material";

function GenericSelector<T>(props: SelectProps<T>) {
    
    
    return (
        <Select {...props} />
    );
}

export default GenericSelector;