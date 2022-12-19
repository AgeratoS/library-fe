import { AuthenticatedPage } from "@/components";
import { RentForm } from "../../containers";

function RentBook() {

    return (
        <AuthenticatedPage>
            <p>Page of rent of book</p>
            <RentForm />
        </AuthenticatedPage>
    );
}

export default RentBook;