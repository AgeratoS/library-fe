import { Box, Chip, MenuItem, OutlinedInput, Select } from "@mui/material";
import { GenresSelectorProps } from "../../types";

function GenresSelector(props: GenresSelectorProps) {

    const { genres, selected, onChange, labelId = "genre-selector", id = "genre-selector" } = props;

    return (
        <div>
            <Select
                labelId={labelId}
                id={id}
                multiple
                autoWidth
                value={selected}
                onChange={onChange}
                input={<OutlinedInput label="chip" id="input" />}
                renderValue={(selectedValue) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selectedValue.map((selectedItem) => (
                            <Chip key={selectedItem.id} label={selectedItem.name} />
                        ))}
                    </Box>
                )}
            >
                {genres.map((genre) => (
                    <MenuItem
                        key={genre.id}
                        value={genre as any}
                    >{genre.name}</MenuItem>
                ))}
            </Select>
        </div>
    );
}

export default GenresSelector;