import { AdminPage } from "@/components";
import { CreateProfileButton, ProfilesTableContainer } from "@/modules/profile/containers";

function ProfileControllingPage() {

    return (
        <AdminPage>
            <CreateProfileButton />
            <ProfilesTableContainer />
        </AdminPage>
    );
}

export default ProfileControllingPage;