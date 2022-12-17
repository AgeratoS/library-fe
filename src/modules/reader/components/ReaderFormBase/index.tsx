import { Box, Button, FormControl, FormGroup, FormHelperText, Input, InputLabel, MenuItem, Select } from "@mui/material";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { Gender, ReaderFormBaseProps } from "../../../profile/types";

function ReaderFormBase(props: ReaderFormBaseProps) {
    
    const { initial, onSubmit, buttonText } = props;

    const formik = useFormik({
        initialValues: initial ?? {
            age: 0,
            firstName: '',
            lastName: '',
            middleName: '',
            gender: Gender.MALE,
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required(),
            lastName: Yup.string().required(),
            middleName: Yup.string().notRequired(),
            age: Yup.number().required()
                .min(10)
                .max(90),
            gender: Yup.mixed().oneOf([0, 1])
        }),
        onSubmit
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            {/* First name */}
            <Box mb={2}>
                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="firstName">First name*</InputLabel>
                        <Input 
                            id="firstName"
                            name="firstName"
                            error={!!formik.errors.firstName}
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                        />
                        <FormHelperText
                            disabled={!formik.errors.firstName}
                            error
                        >{formik.errors.firstName}</FormHelperText>
                    </FormControl>
                </FormGroup>
            </Box>
            {/* Last name */}
            <Box mb={2}>
                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="lastName">Last name*</InputLabel>
                        <Input 
                            id="lastName"
                            name="lastName"
                            error={!!formik.errors.lastName}
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                        />
                        <FormHelperText
                            disabled={!formik.errors.lastName}
                            error
                        >{formik.errors.lastName}</FormHelperText>
                    </FormControl>
                </FormGroup>
            </Box>
            {/* Middle name */}
            <Box mb={2}>
                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="middleName">Middle name</InputLabel>
                        <Input 
                            id="middleName"
                            name="middleName"
                            error={!!formik.errors.middleName}
                            value={formik.values.middleName}
                            onChange={formik.handleChange}
                        />
                        <FormHelperText
                            disabled={!formik.errors.middleName}
                            error
                        >{formik.errors.middleName}</FormHelperText>
                    </FormControl>
                </FormGroup>
            </Box>
            {/* Gender */}
            <Box mb={2}>
                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="gender">Gender*</InputLabel>
                        <Select 
                            id="gender"
                            name="gender"
                            label="Gender*"
                            error={!!formik.errors.gender}
                            value={formik.values.gender}
                            onChange={formik.handleChange}
                        >
                            <MenuItem value={Gender.MALE}>Male</MenuItem>
                            <MenuItem value={Gender.FEMALE}>Female</MenuItem>
                        </Select>
                        <FormHelperText
                            disabled={!formik.errors.gender}
                            error
                        >{formik.errors.gender}</FormHelperText>
                    </FormControl>
                </FormGroup>
            </Box>
            {/* Age */}
            <Box>
                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="age">Age*</InputLabel>
                        <Input
                            type="number"
                            id="age"
                            name="age"
                            error={!!formik.errors.age}
                            value={formik.values.age}
                            onChange={formik.handleChange}
                        />
                        <FormHelperText
                            disabled={!formik.errors.age}
                            error
                        >{formik.errors.age}</FormHelperText>
                    </FormControl>
                </FormGroup>
            </Box>
            <Button type="submit" variant='contained'>{buttonText ?? "Create reader"}</Button>
        </form>
    );
}

export default ReaderFormBase;