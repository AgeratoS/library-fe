import { Typography } from "@mui/material";
import { AuthenticatedPage } from "@/components";

function DashboardPage() {
    
    
    return (
        <AuthenticatedPage>
            <Typography>Hello! It's your page</Typography>
        </AuthenticatedPage>
    );
}

export default DashboardPage;