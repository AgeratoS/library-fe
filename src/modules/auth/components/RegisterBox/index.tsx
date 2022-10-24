import { Grid } from "@mui/material";
import { AuthForm, HeroText } from "..";
import { RegisterBoxProps } from "../../types";

function RegisterBox(props: RegisterBoxProps) {
    
    return (
        <Grid container alignItems='center' spacing={2}>
            <Grid item xs={5}>
                <HeroText>Create your own profile right now!</HeroText> 
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

export default RegisterBox;