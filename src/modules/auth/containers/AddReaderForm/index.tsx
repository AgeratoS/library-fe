import { useDispatch, useSelector } from "react-redux";
import { ReaderData } from "@/modules/profile/types";
import { createAuthReader } from "../../actions";
import AddReaderForm from "../../components/AddReaderForm";
import { authDataForLink, authLoading } from "../../selectors";

function AddReaderFormContainer() {

    const dispatch = useDispatch();

    const profile = useSelector(authDataForLink);

    const isLoading = useSelector(authLoading);
    
    return (
        <AddReaderForm
            isLoading={isLoading}
            onSubmit={(values: ReaderData) => dispatch(createAuthReader({ reader: values, profile: profile! }))}
        />
    );
}

export default AddReaderFormContainer;