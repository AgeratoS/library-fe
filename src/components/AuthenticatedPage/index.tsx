import { AccountCircle } from "@mui/icons-material";
import { AppBar, Container, IconButton, Toolbar } from "@mui/material";
import { PropsWithChildren } from "react";
import Logo from "../Logo";

function AuthenticatedPage(props: PropsWithChildren) {
    
    const { children } = props;
    
    return (
        <div>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <Logo />
                    <div>
                        <IconButton
                            size="large"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Container>
                { children }
            </Container>
        </div>
    );
}

export default AuthenticatedPage;