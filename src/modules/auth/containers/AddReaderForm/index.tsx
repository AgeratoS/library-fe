import { useDispatch, useSelector } from "react-redux";
import { ReaderData } from "@/modules/profile/types";
import { createAuthReader } from "../../actions";
import AddReaderForm from "../../components/AddReaderForm";
import { authLoading } from "../../selectors";

function AddReaderFormContainer() {

    const dispatch = useDispatch();

    const isLoading = useSelector(authLoading);
    
    return (
        <AddReaderForm
            isLoading={isLoading}
            onSubmit={(values: ReaderData) => dispatch(createAuthReader(values))}
        />
    );
}

export default AddReaderFormContainer;