import { AuthenticatedPage } from "@/components";
import { ReaderInfoFormContainer } from "@/modules/reader/containers";
import { Typography } from "@mui/material";

function SettingsPage() {
    
    
    return (
        <AuthenticatedPage>
            <Typography variant='h2'>Changing data about myself</Typography>
            <ReaderInfoFormContainer />
        </AuthenticatedPage>
    );
}

export default SettingsPage;