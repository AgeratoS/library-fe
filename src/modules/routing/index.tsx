import { BrowserRouter as Root, Navigate, Route, Routes } from "react-router-dom";

import { pages as homePages } from "@/modules/home";
import { pages as profilePages } from "@/modules/profile";
import { pages as bookPages } from "@/modules/book";

import { AuthPage, AuthRequiredRoute as AuthRequired } from "./containers";
import RouterPath from './routing';


function Router() {
    return (
        <Root>
            <Routes>
                <Route path={RouterPath.AUTH} element={<AuthPage />} />
                <Route path={RouterPath.HOME} element={<AuthRequired />}>
                    <Route path={RouterPath.DASHBOARD} element={<homePages.DashboardPage />} />
                    <Route path={RouterPath.PROFILE} element={<profilePages.ProfilePage />} />
                    <Route path={RouterPath.READER_SETTINGS} element={<profilePages.SettingsPage />} />

                    <Route path={RouterPath.LIBRARY} element={<bookPages.LibraryPage />} />
                    <Route path={RouterPath.RENT} element={<bookPages.RentBook />}/>
                    <Route path={RouterPath.HOME} element={<Navigate to={RouterPath.DASHBOARD} />} />
                </Route>
            </Routes>
        </Root>
    );
}

export default Router;