import { useSelector } from "react-redux";
import { AddReaderPage, AuthPage as InnerAuth } from "@/modules/auth/pages";
import { isNeedToRedirect } from "../../selectors";

function AuthPage() {
    
    const _isNeedToRedirect = useSelector(isNeedToRedirect)

    return !_isNeedToRedirect ? <InnerAuth /> : <AddReaderPage />
}

export default AuthPage;