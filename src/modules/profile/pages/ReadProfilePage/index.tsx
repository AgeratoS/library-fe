import { AdminPage } from "@/components";
import { ReadersTableContainer } from "@/modules/reader/containers";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

function ReadProfilePage() {

    return (
        <AdminPage>
            <ReadersTableContainer />
        </AdminPage>
    );
}

export default ReadProfilePage;