import { GenreSelectorContainer } from "@/modules/genre/containers";
import { Box, FormGroup, FormControl, InputLabel, Input, FormHelperText, TextareaAutosize, Button } from "@mui/material";
import { useFormik } from "formik";
import { BookFormBaseProps } from "../../types";

function BookFormBase(props: BookFormBaseProps) {

    const { initial, onSubmit, buttonText = 'action' } = props;

    const formik = useFormik({
        initialValues: initial ?? {
            author: '',
            genres: [],
            isbn: '',
            publisher: '',
            shortAnnotation: '',
            title: '',
            year: 0
        },
        onSubmit
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            {/* Title */}
            <Box mb={2}>
                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="title">Title of book*</InputLabel>
                        <Input
                            id="title"
                            name="title"
                            error={!!formik.errors.title}
                            value={formik.values.title}
                            onChange={formik.handleChange}
                        />
                        <FormHelperText
                            disabled={!formik.errors.title}
                            error
                        >{formik.errors.title}</FormHelperText>
                    </FormControl>
                </FormGroup>
            </Box>
            {/*  Year */}
            <Box mb={2}>
                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="year">Year*</InputLabel>
                        <Input
                            id="year"
                            name="year"
                            error={!!formik.errors.year}
                            value={formik.values.year}
                            onChange={formik.handleChange}
                        />
                        <FormHelperText
                            disabled={!formik.errors.year}
                            error
                        >{formik.errors.year}</FormHelperText>
                    </FormControl>
                </FormGroup>
            </Box>
            {/* Author */}
            <Box mb={2}>
                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="author">Author*</InputLabel>
                        <Input
                            id="author"
                            name="author"
                            error={!!formik.errors.author}
                            value={formik.values.author}
                            onChange={formik.handleChange}
                        />
                        <FormHelperText
                            disabled={!formik.errors.author}
                            error
                        >{formik.errors.author}</FormHelperText>
                    </FormControl>
                </FormGroup>
            </Box>
            {/* Publisher */}
            <Box mb={2}>
                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="publisher">Publisher*</InputLabel>
                        <Input
                            id="publisher"
                            name="publisher"
                            error={!!formik.errors.publisher}
                            value={formik.values.publisher}
                            onChange={formik.handleChange}
                        />
                        <FormHelperText
                            disabled={!formik.errors.publisher}
                            error
                        >{formik.errors.publisher}</FormHelperText>
                    </FormControl>
                </FormGroup>
            </Box>
            {/* Shorn annotation */}
            <Box mb={2}>
                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="shortAnnotation">Short annotation*</InputLabel>
                        <TextareaAutosize
                            id="shortAnnotation"
                            name="shortAnnotation"
                            value={formik.values.shortAnnotation}
                            onChange={formik.handleChange}
                        />
                        <FormHelperText
                            disabled={!formik.errors.shortAnnotation}
                            error
                        >{formik.errors.shortAnnotation}</FormHelperText>
                    </FormControl>
                </FormGroup>
            </Box>
            <Box mb={2}>
                <GenreSelectorContainer selected={formik.values.genres ?? []} onChange={formik.getFieldHelpers('genres').setValue} />
            </Box>
            {/* ISBN */}
            <Box mb={2}>
                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="isbn">ISBN*</InputLabel>
                        <Input
                            id="isbn"
                            name="isbn"
                            error={!!formik.errors.isbn}
                            value={formik.values.isbn}
                            onChange={formik.handleChange}
                        />
                        <FormHelperText
                            disabled={!formik.errors.isbn}
                            error
                        >{formik.errors.isbn}</FormHelperText>
                    </FormControl>
                </FormGroup>
            </Box>
            <Button type="submit">{buttonText}</Button>
        </form>
    );
}

export default BookFormBase;