import { AuthenticatedPage } from "@/components";
import { Typography } from "@mui/material";
import ReaderInfoFormContainer from "../../containers/ReaderInfoFormContainer";

function SettingsPage() {
    
    
    return (
        <AuthenticatedPage>
            <Typography variant='h2'>Changing data about myself</Typography>
            <ReaderInfoFormContainer />
        </AuthenticatedPage>
    );
}

export default SettingsPage;