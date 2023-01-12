import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import RouterPath from "@/modules/routing/routing";
import { ReadersTable } from "../../components";
import { Reader } from "../../types";
import { readersInProfile } from "@/modules/admin/selectors";
import { selectReader } from "@/modules/admin/actions";

function ReadersTableContainer() {
    
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const readers = useSelector(readersInProfile);

    const onShowBooks = (reader: Reader) => {
        dispatch(selectReader(reader));
        navigate(RouterPath.ADMIN_CONTEXT.BOOK_READER_CONTROLLING);
    }
    
    return (
        <ReadersTable
            readers={readers ?? []}
            onShowBooks={onShowBooks}
        />
    );
}

export default ReadersTableContainer;