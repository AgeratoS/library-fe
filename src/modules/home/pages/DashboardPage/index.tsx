import { Box, Typography } from "@mui/material";
import { AuthenticatedPage } from "@/components";
import { DashboardBooks } from "../../components";

function DashboardPage() {
    
    return (
        <AuthenticatedPage>
            <Typography variant='h3'>Dashboard</Typography>
            <DashboardBooks 
                title="Books taken by you recently"
                caption="Read with pleasure!"
                books={[]}
            />

            <DashboardBooks 
                title="Recommended books"
                caption="Selected based on your preferences"
                books={[]}
            />

            <DashboardBooks 
                title="To return"
                caption="It's important to return books before the deadline"
                books={[]}
            />
        </AuthenticatedPage>
    );
}

export default DashboardPage;