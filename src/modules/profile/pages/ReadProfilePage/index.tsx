import { AdminPage } from "@/components";
import { ReadersTableContainer } from "@/modules/reader/containers";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

function ReadProfilePage() {

    const location = useLocation();

    return (
        <AdminPage>
            <Typography variant="h4">All readers to profile {location.state.email}</Typography>
            <ReadersTableContainer />
        </AdminPage>
    );
}

export default ReadProfilePage;