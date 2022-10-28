import { BrowserRouter as Root, Navigate, Route, Routes } from "react-router-dom";
import { pages as homePages } from "@/modules/home";
import { pages as profilePages } from "@/modules/profile";
import RouterPath from './routing';
import { AuthPage, AuthRequiredRoute as AuthRequired } from "./containers";


function Router() {
    return (
        <Root>
            <Routes>
                <Route path={RouterPath.AUTH} element={<AuthPage />} />
                <Route path={RouterPath.HOME} element={<AuthRequired />}>
                    <Route path={RouterPath.DASHBOARD} element={<homePages.DashboardPage />} />
                    <Route path={RouterPath.PROFILE} element={<profilePages.ProfilePage />} />
                    <Route path={RouterPath.HOME} element={<Navigate to={RouterPath.DASHBOARD} />} />
                </Route>
            </Routes>
        </Root>
    );
}

export default Router;