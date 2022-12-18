import { GenresListProps } from "../../types";
import Genre from "../Genre";

function GenresList(props: GenresListProps) {
    
    const { genres } = props;
    
    return (
        <>
            {genres.map((genre) => <Genre genre={genre} />)}   
        </>
    )
}

export default GenresList;