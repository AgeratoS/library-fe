import { AccountCircle } from "@mui/icons-material";
import { Divider, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import type { AdminAccountButtonProps } from "../types";

function AdminAccountButton({ onLogout, onNavigateToBooks, onNavigateToProfiles, onNavigateToReaders }: AdminAccountButtonProps) {
    
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
                <MenuItem onClick={() => handleClose(onNavigateToBooks)}>Books</MenuItem>
                <MenuItem onClick={() => handleClose(onNavigateToProfiles)}>Profiles</MenuItem>
                <MenuItem onClick={() => handleClose(onNavigateToReaders)}>Readers</MenuItem>
                <Divider />
                <MenuItem onClick={() => handleClose(onLogout)}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

export default AdminAccountButton;