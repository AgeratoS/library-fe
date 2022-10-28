import { BrowserRouter as Root, Navigate, Route, Routes } from "react-router-dom";
import AuthRequired from "./containers/AuthRequiredRoute";
import RouterPath from './routing';
import AuthPage from "./containers/AuthPage";
import { DashboardPage } from "../home/pages";


function Router() {
    return (
        <Root>
            <Routes>
                <Route path={RouterPath.AUTH} element={<AuthPage />} />
                <Route path={RouterPath.HOME} element={<AuthRequired />}>
                    <Route path={RouterPath.PROFILE} element={<DashboardPage />} />
                    <Route path={RouterPath.HOME} element={<Navigate to={RouterPath.PROFILE} />} />
                </Route>
            </Routes>
        </Root>
    );
}

export default Router;