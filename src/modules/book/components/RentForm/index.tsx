import { Button, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { RentFormProps } from "../../types";
import Book from "../Book";

function RentForm(props: RentFormProps) {
    
    const { book, endDate, onChangeDate, onRent } = props;
    
    return (
        <>
           <Book book={book} />
           <p>When are you going to return this book?</p> 
           <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker 
                    value={endDate}
                    inputFormat="DD/MM/YYYY"
                    minDate={dayjs().toDate()}
                    onChange={onChangeDate}
                    renderInput={(props) => <TextField {...props} />}
                />
           </LocalizationProvider>
           {endDate && <Button onClick={() => onRent(book)}>Rent this book</Button>}
        </>
    );
}

export default RentForm;