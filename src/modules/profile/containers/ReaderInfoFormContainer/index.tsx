import { useDispatch, useSelector } from "react-redux";
import ReaderInfoForm from "../../components/ReaderInfoForm";
import selectors from "../../selectors";
import { Gender } from "../../types";

// TODO: Remove initial value: reader is non-empty value if user had auth

function ReaderInfoFormContainer() {

    const dispatch = useDispatch();
    const _reader = useSelector(selectors.reader);
    
    return (
        <>
            <ReaderInfoForm 
                onSubmit={() => dispatch({ type: "AAA" })}
                initial={_reader ?? {
                    age: 0,
                    firstName: '',
                    lastName: '',
                    middleName: '',
                    gender: Gender.MALE
                }}
            />
        </>
    );
}

export default ReaderInfoFormContainer;