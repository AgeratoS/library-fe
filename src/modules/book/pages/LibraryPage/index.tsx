import { AuthenticatedPage } from "@/components";
import { Box, Typography } from "@mui/material";
import { Library } from "../../containers";

function LibraryPage() {

    return (
        <AuthenticatedPage>
            <Typography variant='h2'>Library</Typography>
            <Box my={2}>
                <Library />
            </Box>
        </AuthenticatedPage>
    );
}

export default LibraryPage;