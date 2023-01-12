import { AuthenticatedPage } from "@/components";
import { Typography } from "@mui/material";
import { RentFormContainer } from "../../containers";

function RentBook() {

    return (
        <AuthenticatedPage>
            <Typography variant='h2'>Rent this book</Typography>
            <RentFormContainer />
        </AuthenticatedPage>
    );
}

export default RentBook;