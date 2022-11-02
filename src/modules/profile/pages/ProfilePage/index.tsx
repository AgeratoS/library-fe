import { Box, Button, Typography } from "@mui/material";
import { AuthenticatedPage } from "@/components";
import ReaderInfoContainer from "../../containers/ReaderInfoContainer";
import { useNavigate } from "react-router-dom";
import RoutePath from "@/modules/routing/routing";

function ProfilePage() {
    
    const navigate = useNavigate();

    const onPressChangeData = () => {
        navigate(RoutePath.READER_SETTINGS);
    }
    
    return (
        <AuthenticatedPage>
            <Typography variant='h2'>My profile</Typography>
            <Box my={2}>
                <ReaderInfoContainer />
                <Button onClick={onPressChangeData} variant='contained'>Change data about myself</Button>
            </Box>
        </AuthenticatedPage>
    );
}

export default ProfilePage;