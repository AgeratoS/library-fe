import { Box, Typography } from "@mui/material";
import { SafeRender } from "@/components";
import { ReaderInfoProps } from "../../types";

function ReaderInfo(props: ReaderInfoProps) {
    
    const { reader } = props;
    
    return (
        <>
            <Box mb={2}>
                <Typography variant={"subtitle2"}>First name: {reader.firstName}</Typography>
            </Box>
            <Box mb={2}>
                <Typography variant={"subtitle2"}>Last name: {reader.lastName}</Typography>
            </Box>
            <SafeRender data={reader.middleName}>
                <Box mb={2}>
                    <Typography variant={"subtitle2"}>Middle name: {reader.middleName}</Typography>
                </Box>
            </SafeRender>
            <Box mb={2}>
                <Typography variant={"subtitle2"}>Age: {reader.age}</Typography>
            </Box>
            <Box mb={2}>
                <Typography variant={"subtitle2"}>Gender: {reader.gender}</Typography>
            </Box>
        </>
    );
}

export default ReaderInfo;