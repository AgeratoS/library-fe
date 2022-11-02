import { SafeRender } from "@/components";
import { Book } from "../../types";

function Book({title, year, isbn, publisher, quantity, shortAnnotation}: Book) {
    return (
        <div>
            <p>Наименование: {title}</p>
            <p>Год издания: {year}</p>
            <SafeRender data={isbn}>
                <p>ISBN: {isbn}</p>
            </SafeRender>
        </div>
    );
}

export default Book;