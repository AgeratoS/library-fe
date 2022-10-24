import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/utils/configureStore";
import { auth, authRegister } from "../../actions";
import { LoginBox, RegisterBox } from "../../components";
import { AuthFormData, LoginFormMode } from "../../types";
import { authLoading } from "../../selectors";

function LoginBoxContainer() {
    
    const dispatch: AppDispatch = useDispatch();
    const [authBoxState, setAuthBoxState] = useState<LoginFormMode>(LoginFormMode.REGISTER);

    const _authLoading = useSelector(authLoading);
    const AuthPart = authBoxState === LoginFormMode.REGISTER ? RegisterBox : LoginBox;
    
    return (
        <AuthPart
            isLoading={_authLoading}
            mode={authBoxState}
            onChangeMode={(mode: LoginFormMode) => setAuthBoxState(mode)}
            onSubmit={(values: AuthFormData) => {
                if (authBoxState === LoginFormMode.LOGIN) {
                    dispatch(auth(values));
                } else {
                    dispatch(authRegister(values));
                }
            }} 
        />
    );
}

export default LoginBoxContainer;