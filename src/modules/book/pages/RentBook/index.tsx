import { AuthenticatedPage } from "@/components";
import { Typography } from "@mui/material";
import { RentForm } from "../../containers";

function RentBook() {

    return (
        <AuthenticatedPage>
            <Typography variant='h2'>Rent this book</Typography>
            <RentForm />
        </AuthenticatedPage>
    );
}

export default RentBook;