import { Box, FormGroup, FormControl, InputLabel, Input, FormHelperText, Button } from "@mui/material";
import { useFormik } from "formik";
import RoleSelectorContainer from "../../containers/RoleSelectorContainer";
import { ProfileFormBaseProps, Role } from "../../types";

function ProfileFormBase(props: ProfileFormBaseProps) {

    const { initial, onSubmit, buttonText = "Button activity" } = props;

    const formik = useFormik({
        initialValues: initial ?? {
            email: '',
            password: '',
            readers: [],
            role: Role.READER
        },
        onSubmit
    });


    return (
        <form onSubmit={formik.handleSubmit}>
            {/* Email */}
            <Box mb={2}>
                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="email">Email</InputLabel>
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
            <Box mb={2}>
                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            error={!!formik.errors.password}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        <FormHelperText
                            disabled={!formik.errors.password}
                            error
                        >{formik.errors.password}</FormHelperText>
                    </FormControl>
                </FormGroup>
            </Box>

            {/* Role */}
            <Box mb={2}>
                <FormGroup>
                    <RoleSelectorContainer
                        selected={formik.values.role}
                        onChange={formik.getFieldHelpers('role').setValue}
                    />
                </FormGroup>
            </Box>

            <Button type="submit">{buttonText}</Button>
        </form>
    );
}

export default ProfileFormBase;