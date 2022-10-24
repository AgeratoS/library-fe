import { AppBar, Container, Toolbar } from "@mui/material";
import { PropsWithChildren } from "react";
import { Logo } from "..";

function SimplePage(props: PropsWithChildren) {
    
    const { children } = props;
    
    return (
        <div>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <Logo />
                </Toolbar>
            </AppBar>
            <Container>
                { children }
            </Container>
        </div>
    );
}

export default SimplePage;