import { useDispatch, useSelector } from "react-redux";
import { updateReaderRequest } from "../../actions";
import ReaderInfoForm from "../../components/ReaderInfoForm";
import { reader } from "../../selectors";

function ReaderInfoFormContainer() {

    const dispatch = useDispatch();
    const _reader = useSelector(reader);

    return (
        <>
            <ReaderInfoForm
                onSubmit={(reader) => dispatch(updateReaderRequest({
                    readerId: _reader!.id,
                    updateData: reader
                }))}
                initial={_reader!}
            />
        </>
    );
}

export default ReaderInfoFormContainer;