import { Button, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import { AppDispatch } from "@/utils";
import Book from "../../components/Book";
import { Book as BookType } from "../../types";
import { rentBookRequest } from "../../actions";

function RentForm() {

    const params = useLocation();
    const { state }: { state: BookType } = params;
    const [endDate, setEndDate] = useState<ReturnType<typeof dayjs> | undefined>()
    const dispatch: AppDispatch = useDispatch();

    const onChangeDate = (value: Date | ((prev: Date) => Date) | null) => {
        if (value !== null && typeof value !== 'function') {
            setEndDate(dayjs(value));
        }
    }

    const onRent = () => {
        dispatch(rentBookRequest());
    }


    return (
        <>
            <Book book={state} />
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
            {endDate && <Button onClick={onRent}>Rent this book</Button>}
        </>
    );
}

export default RentForm;