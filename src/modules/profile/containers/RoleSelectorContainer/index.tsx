import { AppDispatch } from "@/utils";
import { SelectChangeEvent } from "@mui/material";
import { useDispatch } from "react-redux";
import RoleSelector from "../../components/RoleSelector";
import { Role, RoleSelectorContainerProps } from "../../types";

const roles = [Role.ADMIN, Role.READER];

function RoleSelectorContainer(prop: RoleSelectorContainerProps) {

    const { selected, onChange } = prop;

    // const dispatch: AppDispatch = useDispatch();

    const _onChange = (event: SelectChangeEvent<Role>) => {
        onChange(event.target.value as Role);
    }

    return (
        <RoleSelector roles={roles} selected={selected} onChange={_onChange} />
    );
}

export default RoleSelectorContainer;