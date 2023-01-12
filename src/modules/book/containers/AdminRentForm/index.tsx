import { selectedReader } from "@/modules/admin/selectors";
import dayjs from "dayjs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { rentBookRequest } from "../../actions";
import { RentForm } from "../../components";
import { Book } from "../../types";

function AdminRentForm() {
    
    const params = useLocation();
    const reader = useSelector(selectedReader);

    const dispatch = useDispatch();

    const [endDate, setEndDate] = useState<ReturnType<typeof dayjs> | undefined>()
    const onChangeDate = (value: Date | ((prev: Date) => Date) | null) => {
        if (value !== null && typeof value !== 'function') {
            setEndDate(dayjs(value));
        }
    }

    const onRent = (book: Book) => {
        dispatch(rentBookRequest(
            {
                book,
                reader: reader!
            }
        ))
    }
    
    return (
        <RentForm 
            book={params.state}
            onChangeDate={onChangeDate}
            onRent={onRent}
            endDate={endDate}
        />
    );
}

export default AdminRentForm;