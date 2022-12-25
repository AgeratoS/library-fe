import { AdminPage } from "@/components";
import { Typography } from "@mui/material";
import { AddBookForm } from "../../containers";

function AddBookPage() {
    
    
    return (
        <AdminPage>
            <Typography variant="h2">Create book</Typography>
            <AddBookForm />
        </AdminPage>
    );
}

export default AddBookPage;