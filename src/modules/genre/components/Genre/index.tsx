import { GenreProps } from "../../types";

function Genre(props: GenreProps) {
    
    const { genre } = props;
    
    return (
        <>
            <p>{genre.name}</p>
        </>
    );
}

export default Genre;