import { AppBar, Container, Toolbar } from "@mui/material";
import { PropsWithChildren } from "react";
import { useDispatch } from "react-redux";
import AccountButton from "../AccountButton";
import Logo from "../Logo";
import { logoutRequest } from "../../modules/auth/actions";

function AuthenticatedPage(props: PropsWithChildren) {
    
    const { children } = props;

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logoutRequest());
    }

    const onNavigateToProfile = () => {
        console.log("Hello!");
    }
    
    return (
        <div>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <Logo />
                    <AccountButton
                        onLogout={onLogout}
                        onNavigateToProfile={onNavigateToProfile}
                    />
                </Toolbar>
            </AppBar>
            <Container>
                { children }
            </Container>
        </div>
    );
}

export default AuthenticatedPage;