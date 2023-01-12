import { AppDispatch } from "@/utils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loadProfiles, removeProfile } from "../../actions";
import ProfilesTable from "../../components/ProfilesTable";
import selectors from "../../selectors";
import { Profile } from "../../types";
import RouterPath from "@/modules/routing/routing";
import { selectProfile } from "@/modules/admin/actions";

function ProfilesTableContainer() {

    const dispatch: AppDispatch = useDispatch();

    const profiles = useSelector(selectors.profiles);

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(loadProfiles());
    }, []);

    const onEditProfile = (profile: Profile) => {
        navigate(RouterPath.ADMIN_CONTEXT.PROFILE_EDIT, {
            state: profile
        });
    }

    const onRemoveProfile = (profile: Profile) => {
        dispatch(removeProfile(profile));
    }

    const onReadProfile = (profile: Profile) => {
        dispatch(selectProfile(profile));
        navigate(RouterPath.ADMIN_CONTEXT.PROFILE_READERS);
    }
    
    
    return (
        <ProfilesTable 
            profiles={profiles ?? []}
            onEdit={onEditProfile}
            onRemove={onRemoveProfile}
            onRead={onReadProfile}
        />
    );
}

export default ProfilesTableContainer;