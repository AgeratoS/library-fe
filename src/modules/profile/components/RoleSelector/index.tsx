import { Box, MenuItem, Select, Typography } from "@mui/material";
import { RoleSelectorProps } from "../../types";

function RoleSelector(props: RoleSelectorProps) {

    const { onChange, roles, selected } = props;
    
    
    return (
        <Select
            onChange={onChange}
            value={selected}
            renderValue={(selected) => (
                <Box>
                    <Typography>{selected}</Typography>
                </Box>
            )}
        >
            {roles.map((role) => (
                <MenuItem
                    key={role}
                    value={role}
                >
                    {role.toString()}
                </MenuItem>
            ))}
        </Select>
    );
}

export default RoleSelector;