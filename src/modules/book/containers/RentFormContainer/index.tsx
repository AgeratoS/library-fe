import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { AppDispatch } from "@/utils";
import { Book as BookType } from "../../types";
import { rentBookRequest } from "../../actions";
import RentForm from "../../components/RentForm";
import { reader } from "@/modules/reader/selectors";

function RentFormContainer() {

    const params = useLocation();
    const { state }: { state: BookType } = params;
    const _reader = useSelector(reader);
    const [endDate, setEndDate] = useState<ReturnType<typeof dayjs> | undefined>()
    const dispatch: AppDispatch = useDispatch();

    const onChangeDate = (value: Date | ((prev: Date) => Date) | null) => {
        if (value !== null && typeof value !== 'function') {
            setEndDate(dayjs(value));
        }
    }

    const onRent = (book: BookType) => {
        dispatch(rentBookRequest({
            book,
            reader: _reader!
        }));
    }


    return (
        <>
            <RentForm 
                book={params.state} 
                onChangeDate={onChangeDate} 
                onRent={onRent}
                endDate={endDate}
            />
        </>
    );
}

export default RentFormContainer;