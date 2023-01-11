import { Chip } from "@mui/material";
import { GenreProps } from "../../types";

function Genre(props: GenreProps) {

    const { genre } = props;

    return (
        <Chip label={genre.name} />
    );
}

export default Genre;