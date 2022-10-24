import { Grid } from "@mui/material";
import { AuthForm, HeroText } from "..";
import { LoginBoxProps } from "../../types";

function LoginBox(props: LoginBoxProps) {
    
    return (
        <Grid container spacing={2} alignItems='center'>
            <Grid item xs={5}>
                <HeroText>Log in your profile</HeroText>
            </Grid>
            <Grid item xs={7}>
                <AuthForm
                    isLoading={props.isLoading}
                    mode={props.mode}
                    onChangeMode={props.onChangeMode} 
                    onSubmit={props.onSubmit} 
                    initial={props.initial}
                />
            </Grid>
        </Grid>
    );
}

export default LoginBox;