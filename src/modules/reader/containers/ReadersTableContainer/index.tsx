import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { ReadersTable } from "../../components";
import { Reader } from "../../types";

function ReadersTableContainer() {
    
    const navigate = useNavigate();

    const location = useLocation();

    const dispatch = useDispatch();
    
    return (
        <ReadersTable
            readers={location.state.readers as Reader[]}
        />
    );
}

export default ReadersTableContainer;