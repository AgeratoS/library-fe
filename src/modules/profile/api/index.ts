import { ApiCall } from "@/appTypes";
import { ApiHelper } from "@/modules/utils";
import { Profile, ProfileEntity } from "../types";

interface IProfileApi {
    getProfiles: ApiCall<Profile[], null>;

    createProfile: ApiCall<boolean, ProfileEntity>;
    updateProfile: ApiCall<boolean, Profile>;
    removeProfile: ApiCall<boolean, Profile>;
}

export class ProfileApi implements IProfileApi {
    getProfiles() {
        return ApiHelper.get<Profile[]>(`${process.env.REACT_APP_BE_BASE}/profile`);
    }

    createProfile(profile: ProfileEntity) {
        return ApiHelper.post<boolean>(`${process.env.REACT_APP_BE_BASE}/profile`, {
            body: JSON.stringify(profile)
        })
    }

    updateProfile(profile: Profile) {
        return ApiHelper.patch<boolean>(`${process.env.REACT_APP_BE_BASE}/profile/${profile.id}`, {
            body: JSON.stringify(profile)
        });
    }

    removeProfile(profile: Profile) {
        return ApiHelper.delete<boolean>(`${process.env.REACT_APP_BE_BASE}/profile/${profile.id}`, {
            body: JSON.stringify(profile)
        })
    }
}