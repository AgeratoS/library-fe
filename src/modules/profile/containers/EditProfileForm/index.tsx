import { AppDispatch } from "@/utils";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateProfile } from "../../actions";
import { ProfileFormBase } from "../../components";
import { ProfileEntity } from "../../types";

function EditProfileForm() {

    const dispatch: AppDispatch = useDispatch();
    const params = useLocation();

    const onSubmit = (values: ProfileEntity) => {
        dispatch(updateProfile({ ...values, id: params.state.id }));
    }


    return (
        <ProfileFormBase
            onSubmit={onSubmit}
            initial={params.state}
            buttonText="Update profile"
        />
    );
}

export default EditProfileForm;