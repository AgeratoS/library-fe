import { AdminPage } from "@/components";
import { CrudBooks } from "@/modules/book/containers";

function BookControllingPage() {

    return (
        <AdminPage>
            <CrudBooks />
        </AdminPage>
    );
}

export default BookControllingPage;