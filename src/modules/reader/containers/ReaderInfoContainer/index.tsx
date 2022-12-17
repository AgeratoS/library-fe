import { useDispatch, useSelector } from "react-redux";
import ReaderInfo from "../../components/ReaderInfo";
import { Gender } from "../../../profile/types";
import { reader } from "../../selectors";
import { AppDispatch } from "@/utils";
import { useEffect } from "react";
import { getReaderRequest } from "../../actions";

function ReaderInfoContainer() {
    
    const _reader = useSelector(reader);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        if (!_reader) {
            dispatch(getReaderRequest(1))
        }
    }, [reader]);   
    
    return (
        <>
            <ReaderInfo reader={_reader ?? {
                age: 0,
                firstName: 'Anonym',
                lastName: 'Anonym',
                gender: Gender.MALE
            }} />
        </>
    );
}

export default ReaderInfoContainer;