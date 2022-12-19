import { useSelector } from "react-redux";
import { role as roleSelector, token as tokenSelector } from "../../selectors";
import RouterPath from '../../routing';
import { Navigate, Outlet } from "react-router";
import { Role } from "@/modules/profile/types";

function AdminRequired() {
    
    const token = useSelector(tokenSelector);
    const role = useSelector(roleSelector);
    
    if (!token) {
        return <Navigate to={RouterPath.AUTH} />
    } else if (role === Role.READER) {
        return <Navigate to={RouterPath.DASHBOARD} />
    } else return <Outlet />
}

export default AdminRequired;