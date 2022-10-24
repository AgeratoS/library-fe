import { Box, Button, FormControl, FormGroup, FormHelperText, Grid, Input, InputLabel } from "@mui/material";
import { useFormik } from "formik";
import { LoginFormMode, LoginFormProps } from "../../types";
import * as Yup from 'yup';


function AuthForm(props: LoginFormProps) {

    const { onSubmit, isLoading, mode = LoginFormMode.REGISTER, onChangeMode } = props;

    const formik = useFormik({
        initialValues: props.initial ?? {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email()
                .required(),
            password: Yup.string()
                .required()
                .min(3)
        }),
        onSubmit
    });
    
    return (
        <form onSubmit={formik.handleSubmit}>
            {/* Email */}
            <Box mb={2}>
                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="email">Email*</InputLabel>
                        <Input
                            id="email"
                            name="email"
                            error={!!formik.errors.email}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        <FormHelperText 
                            disabled={!formik.errors.email}
                            error
                        >{formik.errors.email}</FormHelperText>
                    </FormControl>
                </FormGroup>
            </Box>
            {/* Password */}
            <Box mt={2} mb={6}>
                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="password">Password*</InputLabel>
                        <Input
                            id="password"
                            name="password"
                            error={!!formik.errors.password}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            type="password"
                        />
                    </FormControl>
                    <FormHelperText 
                            disabled={!formik.errors.email}
                            error
                        >{formik.errors.password}</FormHelperText>
                </FormGroup>
            </Box>
            <Grid container>
                <Grid item sm={6} xs={12}>
                    <Button type="submit" disabled={isLoading} variant='contained'>
                        {mode === LoginFormMode.REGISTER ? "Create one" : "Log in"}
                    </Button>
                </Grid>
                <Grid item sm={6} xs={12} textAlign='right'>
                    {mode === LoginFormMode.REGISTER ? <Button 
                        onClick={() => onChangeMode(LoginFormMode.LOGIN)}>I already have account</Button> : 
                        <Button onClick={() => onChangeMode(LoginFormMode.REGISTER)}>Don't have account?</Button>
                    }
                </Grid>
            </Grid>            
        </form>
    );
}

export default AuthForm;