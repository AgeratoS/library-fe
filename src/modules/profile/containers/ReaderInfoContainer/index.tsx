import { Gender } from "@/modules/auth/types";
import { useSelector } from "react-redux";
import ReaderInfo from "../../components/ReaderInfo";
import selectors from "../../selectors";

function ReaderInfoContainer() {
    
    const _reader = useSelector(selectors.reader);
    
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