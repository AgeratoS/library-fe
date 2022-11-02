import { PropsWithChildren } from "react";
import Slider from "react-slick";
import BookComponent from "../Book";
import { BooksListProps } from "../../types";

function BooksList(props: BooksListProps) {
    
    const { children, books } = props;
    
    return (
        <Slider>
            {books.map(book => (
                <BookComponent book={book}/>
            ))}
        </Slider>
    );
}

export default BooksList;