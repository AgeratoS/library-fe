import { AddReaderPage, AuthPage as InnerAuth } from "@/modules/auth/pages";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import RoutePath from '../../routing';
import { isNeedToRedirect, token } from "../../selectors";

function AuthPage() {
    
    const _isNeedToRedirect = useSelector(isNeedToRedirect)
    const _token = useSelector(token);
    if (_token) {
        return <Navigate to={RoutePath.HOME} />
    }
    else if (_isNeedToRedirect) {
        return <AddReaderPage />
    }
    else return <InnerAuth />
}

export default AuthPage;