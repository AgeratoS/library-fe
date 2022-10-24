import { BrowserRouter as Root, Navigate, Route, Routes } from "react-router-dom";
import AuthRequired from "./containers/AuthRequiredRoute";
import RouterPath from './routing';
import { AuthPage } from "../auth/pages";
import { SimplePage } from "../../components";
import AddReaderPage from "../auth/pages/AddReaderPage";

function Router() {
    return (
        <Root>
            <Routes>
                <Route path={RouterPath.AUTH} element={<AuthPage />}/>
                <Route path={RouterPath.LINK_READER} element={<AddReaderPage />} />
                <Route path={RouterPath.HOME} element={<AuthRequired />}>
                    <Route path={RouterPath.PROFILE} element={<SimplePage><p>Hello</p></SimplePage>} />
                    <Route path={RouterPath.HOME} element={<Navigate to={RouterPath.PROFILE} />} />
                </Route>
            </Routes>
        </Root>
    );
}

export default Router;