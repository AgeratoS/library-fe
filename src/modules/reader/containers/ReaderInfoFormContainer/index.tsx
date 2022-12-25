import { useDispatch, useSelector } from "react-redux";
import { updateReaderRequest } from "../../actions";
import ReaderInfoForm from "../../components/ReaderInfoForm";
import { reader } from "../../selectors";
import { Gender } from "../../types";

// TODO: Remove initial value: reader is non-empty value if user had auth

function ReaderInfoFormContainer() {

    const dispatch = useDispatch();
    const _reader = useSelector(reader);

    return (
        <>
            <ReaderInfoForm
                onSubmit={(reader) => dispatch(updateReaderRequest({
                    readerId: 1,
                    updateData: reader
                }))}
                initial={_reader!}
            />
        </>
    );
}

export default ReaderInfoFormContainer;