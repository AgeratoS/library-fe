import { useDispatch, useSelector } from "react-redux";
import { createAuthReader } from "../../actions";
import AddReaderForm from "../../components/AddReaderForm";
import { AddReaderFormData } from "../../types";
import { authLoading } from "../../selectors";

function AddReaderFormContainer() {

    const dispatch = useDispatch();

    const isLoading = useSelector(authLoading);
    
    return (
        <AddReaderForm
            isLoading={isLoading}
            onSubmit={(values: AddReaderFormData) => dispatch(createAuthReader(values))}
        />
    );
}

export default AddReaderFormContainer;