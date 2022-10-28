import { SafeRender } from "@/components";
import { BookProps } from "../../types";

function Book({book}: BookProps) {
    return (
        <div>
            <p>Наименование: {book.title}</p>
            <p>Год издания: {book.year}</p>
            <SafeRender data={book.isbn}>
                <p>ISBN: {book.isbn}</p>
            </SafeRender>
        </div>
    );
}

export default Book;