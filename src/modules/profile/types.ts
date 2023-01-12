import { FormEntity } from "@/appTypes";
import { SelectChangeEvent } from "@mui/material";
import { ReactNode } from "react";
import { AuthData } from "../auth/types";
import { Reader, ReaderEntity } from "../reader/types";

export enum Gender {
    MALE, FEMALE
}

export type ReaderData = {
    firstName: string;
    lastName: string;
    middleName?: string;
    gender: Gender;
    age: number;
}

export type LinkReaderToProfileParams = {
    reader: ReaderData;
    profile: AuthData;
}

export enum Role {
    READER = 'Reader', ADMIN = 'Admin'
};

export type Profile = {
    id: number;
    email: string;
    password: string;
    role: Role;
    readers?: Reader[];
};

export type ProfileState = {
    profile?: Profile;
    profiles?: Profile[];
    isLoading: boolean;
}

export type ReaderInfoFormProps = {
    onSubmit: (vales: Partial<ReaderData>) => void;
    initial: ReaderData;
}

export type ReaderFormBaseProps = {
    onSubmit: (values: ReaderEntity) => void;
    initial: ReaderEntity;
    buttonText?: string;
}

export type ReaderInfoProps = {
    reader: Reader;
}

export type GenderProps = {
    gender: Gender;
}

export type ProfilesTableProps = {
    profiles: Profile[],
    onEdit?: (profile: Profile) => void;
    onRemove?: (profile: Profile) => void;
    onRead?: (profile: Profile) => void;
}

export type EditProfileButtonProps = {
    profile: Profile
}

export type RemoveProfileButtonProps = {
    profile: Profile
}

export type ProfileEntity = FormEntity<Profile>

export type ProfileFormBaseProps = {
    initial?: ProfileEntity;
    onSubmit: (values: ProfileEntity) => void;
    buttonText?: string;
}

export type RoleSelectorProps = {
    roles: Role[],
    selected: Role,
    onChange: (event: SelectChangeEvent<Role>, child?: ReactNode) => void;
}

export type RoleSelectorContainerProps = {
    selected: Role;
    onChange: (role: Role) => void;
}

export type ReadersTableProps = {
    readers: Reader[],
    onEdit?: (reader: Reader) => void;
    onRemove?: (reader: Reader) => void;
    onShowBooks?: (reader: Reader) => void;
}