import { AdminPage } from "@/components";
import { Typography } from "@mui/material";
import { EditBookForm } from "../../containers";

function EditBookPage() {
    
    
    return (
        <AdminPage>
            <Typography variant='h2'>Edit book</Typography>
            <EditBookForm />
        </AdminPage>
    );
}

export default EditBookPage;