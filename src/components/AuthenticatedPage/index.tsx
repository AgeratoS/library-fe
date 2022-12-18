import { AppBar, Container, Toolbar } from "@mui/material";
import { PropsWithChildren } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutRequest } from "@/modules/auth/actions";
import RoutePath from "@/modules/routing/routing";
import AccountButton from "../AccountButton";
import Logo from "../Logo";

function AuthenticatedPage(props: PropsWithChildren) {

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

    const onNavigateToBooks = () => {
        navigate(RoutePath.LIBRARY);
    }

    return (
        <div>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <Logo />
                    <AccountButton
                        onLogout={onLogout}
                        onNavigateToProfile={onNavigateToProfile}
                        onNavigateToDashboard={onNavigateToDashboard}
                        onNavigateToBooks={onNavigateToBooks}
                    />
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
        </div>
    );
}

export default AuthenticatedPage;