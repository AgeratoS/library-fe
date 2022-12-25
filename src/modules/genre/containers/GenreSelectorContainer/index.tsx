import { useEffect, useState } from "react";
import { GenresSelector } from "../../components";
import { Genre, GenresSelectorContainerProps } from "@/modules/genre/types";
import { SelectChangeEvent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { allGenres, selectedGenres } from "../../selectors";
import { loadGenres } from "../../actions";


function GenreSelectorContainer(props: GenresSelectorContainerProps) {

    const { selected, onChange } = props;

    const dispatch = useDispatch();

    const _allGenres = useSelector(allGenres);
    const _selected = useSelector(selectedGenres(selected));

    useEffect(() => {
        dispatch(loadGenres());
    }, []);

    const _onChange = (event: SelectChangeEvent<typeof selected>) => {

        const { target } = event;
        const { value } = target;

        onChange(value as Genre[]);
    }

    return (
        <GenresSelector
            selected={_selected ?? []}
            genres={_allGenres ?? []}
            onChange={_onChange}
        />
    );
}

export default GenreSelectorContainer;