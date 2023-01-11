import { SafeRender } from "@/components";
import { GenresList } from "@/modules/genre/components";
import { BookProps } from "../../types";

function Book({ book, actions }: BookProps) {
    return (
        <div>
            <p>Наименование: {book.title}</p>
            <p>Год издания: {book.year}</p>
            <SafeRender data={book.isbn}>
                <p>ISBN: {book.isbn}</p>
            </SafeRender>
            <p>Издательство {book.publisher}</p>
            <p>Автор {book.author}</p>
            <GenresList genres={book.genres ?? []} />
            {actions}
        </div>
    );
}

export default Book;