import { AccountCircle } from "@mui/icons-material";
import { Divider, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import type { AccountButtonProps } from "../types";

function AccountButton({ onLogout, onNavigateToProfile, onNavigateToDashboard, onNavigateToBooks }: AccountButtonProps) {
    
    const [ anchor, setAnchor ] = useState<null | HTMLElement>(null);
    const open = Boolean(anchor);

    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchor(event.currentTarget);
    }

    const handleClose = (action?: () => void) => {
        setAnchor(null);
        if (action !== null && action !== undefined) {
            action();
        }
    }
    
    return (
        <div>
            <IconButton
                size="large"
                onClick={handleOpen}
            >
                <AccountCircle />
            </IconButton>
            <Menu
                anchorEl={anchor}
                open={open}
                onClose={() => handleClose()}
            >
                <MenuItem onClick={() => handleClose(onNavigateToDashboard)}>My dashboard</MenuItem>
                <Divider />
                <MenuItem onClick={() => handleClose(onNavigateToProfile)}>My profile</MenuItem>
                <MenuItem onClick={() => handleClose(onNavigateToBooks)}>Show books</MenuItem>
                <MenuItem onClick={() => handleClose(onLogout)}>Logout</MenuItem>
            </Menu>
            </div>
    );
}

export default AccountButton;