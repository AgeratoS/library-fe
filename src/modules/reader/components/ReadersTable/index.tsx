import { ReadersTableProps } from "@/modules/profile/types";
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Gender from "../Gender";

function ReadersTable(props: ReadersTableProps) {
    
    const { readers, onEdit, onRemove, onAddBook } = props;
    
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Surname</TableCell>
                    <TableCell>Patronymic</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Gender</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {readers.map((reader) => (
                    <TableRow>
                        <TableCell>{reader.firstName}</TableCell>
                        <TableCell>{reader.lastName}</TableCell>
                        <TableCell>{reader.middleName}</TableCell>
                        <TableCell>{reader.age}</TableCell>
                        <TableCell><Gender gender={reader.gender}/></TableCell>
                        {onEdit && <TableCell><Button onClick={() => onEdit(reader)}>Edit</Button></TableCell>}
                        {onRemove && <TableCell><Button onClick={() => onRemove(reader)}>Remove</Button></TableCell>}
                        {onAddBook && <TableCell><Button onClick={() => onAddBook(reader)}>Link book</Button></TableCell>}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default ReadersTable;