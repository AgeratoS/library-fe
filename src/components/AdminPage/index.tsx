import { AppBar, Container, Toolbar } from "@mui/material";
import { PropsWithChildren } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutRequest } from "@/modules/auth/actions";
import RoutePath from "@/modules/routing/routing";
import AccountButton from "../AccountButton";
import Logo from "../Logo";

function AdminPage(props: PropsWithChildren) {
    
    const { children } = props;

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const onLogout = () => {
        dispatch(logoutRequest());
    }

    const onNavigateToProfile = () => {
        navigate(RoutePath.PROFILE);
    }

    const onNavigateToDashboard = () => {
        navigate(RoutePath.DASHBOARD);
    }
    
    return (
        <div>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <Logo isAdmin />
                    <AccountButton
                        onLogout={onLogout}
                        onNavigateToProfile={onNavigateToProfile}
                        onNavigateToDashboard={onNavigateToDashboard}
                    />
                </Toolbar>
            </AppBar>
            <Container>
                { children }
            </Container>
        </div>
    );
}

export default AdminPage;