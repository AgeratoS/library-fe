import { SafeRender } from "@/components";
import { GenresList } from "@/modules/genre/components";
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Fragment } from "react";
import { BooksTableProps } from "../../types";

function BooksByReaderTable(props: BooksTableProps) {
    
    const { books, onAddBook, onRemoveBook } = props;
    
    return (
        <Fragment>
            {onAddBook && <Button onClick={onAddBook}>Add book</Button>}
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>ISBN</TableCell>
                        <TableCell>Genres</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {books.map((book) => (
                        <TableRow>
                            <TableCell>{book.title}</TableCell>
                            <TableCell><SafeRender data={book.isbn}>{book.isbn}</SafeRender></TableCell>
                            <TableCell><GenresList genres={book.genres ?? []}/></TableCell>
                            {onRemoveBook && <TableCell><Button onClick={() => onRemoveBook(book)}>Remove book</Button></TableCell>}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Fragment>
    );
}

export default BooksByReaderTable;