import { AppDispatch } from "@/utils";
import { useDispatch } from "react-redux";
import { createProfile } from "../../actions";
import { ProfileFormBase } from "../../components";
import { ProfileEntity } from "../../types";

function CreateProfileForm() {

    const dispatch: AppDispatch = useDispatch();

    const onSubmit = (values: ProfileEntity) => {
        dispatch(createProfile(values));
    }
    
    
    return (
        <ProfileFormBase onSubmit={onSubmit} buttonText="Create profile" />
    );
}

export default CreateProfileForm;