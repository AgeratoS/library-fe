import { Box } from "@mui/material";
import { GenresListProps } from "../../types";
import Genre from "../Genre";

function GenresList(props: GenresListProps) {

    const { genres } = props;

    return (
        <Box sx={{ display: 'flex', gap: 2 }}>
            {genres.map((genre) => (
                <Genre genre={genre} key={genre.id} />
            )
            )}
        </Box>
    )
}

export default GenresList;