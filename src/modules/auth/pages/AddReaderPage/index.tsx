import { Grid } from "@mui/material";
import { SimplePage } from "../../../../components";
import { HeroText } from "../../components";
import { AddReaderForm } from "../../containers";

function AddReaderPage() {
    
    return (
        <SimplePage>
            <Grid container alignItems={'center'}>
                <Grid item sm={6} xs={12}>
                    <HeroText>Tell something about yourself</HeroText>
                </Grid>

                <Grid item sm={6} xs={12}>
                    <AddReaderForm />
                </Grid>
            </Grid>
        </SimplePage>
    );
}

export default AddReaderPage;