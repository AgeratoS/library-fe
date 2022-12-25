import Slider from "react-slick";
import BookComponent from "../Book";
import { BooksListProps } from "../../types";

function BooksList(props: BooksListProps) {

    const { children, books, draggable = true, action, vertical } = props;

    return (
        <Slider draggable={draggable} vertical={vertical}>
            {books.map(book => (
                <BookComponent 
                    book={book} 
                    key={book.id} 
                    actions={action && action(book)} 
                />
            ))}
        </Slider>
    );
}

export default BooksList;