import { Typography } from "@mui/material";
import { AuthenticatedPage } from "@/components";

function ProfilePage() {
    
    
    return (
        <AuthenticatedPage>
            <Typography variant='h2'>My profile</Typography>
            <Typography>Under the development..</Typography>
        </AuthenticatedPage>
    );
}

export default ProfilePage;