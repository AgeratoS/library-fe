import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import RouterPath from '../../routing';
import { token as tokenSelector } from "../../selectors";

function AuthRequired() {
    
    const token = useSelector(tokenSelector);
    
    if (!token) {
        return <Navigate to={RouterPath.AUTH} />
    }
    return <Outlet />
}

export default AuthRequired;