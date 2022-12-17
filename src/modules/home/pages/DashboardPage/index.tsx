import { Typography } from "@mui/material";
import { AuthenticatedPage } from "@/components";
import { TakenBooks, UrgentBooks } from "@/modules/book/containers";

function DashboardPage() {
    
    return (
        <AuthenticatedPage>
            <Typography variant='h2'>Dashboard</Typography>

            <TakenBooks />
            <UrgentBooks />

        </AuthenticatedPage>
    );
}

export default DashboardPage;