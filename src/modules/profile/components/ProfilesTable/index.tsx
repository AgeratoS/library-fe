import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { ProfilesTableProps } from "../../types";

function ProfilesTable(props: ProfilesTableProps) {

    const { onEdit, onRemove, onRead } = props;


    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell>Role</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.profiles.map((profile) => {
                    return <TableRow key={profile.email}>
                        <TableCell>{profile.email}</TableCell>
                        <TableCell>{profile.role}</TableCell>
                        {onEdit && <TableCell><Button onClick={() => onEdit(profile)}>Edit</Button></TableCell>}
                        {onRemove && <TableCell><Button onClick={() => onRemove(profile)}>Remove</Button></TableCell>}
                        {onRead && <TableCell><Button onClick={() => onRead(profile)}>Read</Button></TableCell>}
                    </TableRow>
                })}
            </TableBody>
        </Table>
    );
}

export default ProfilesTable;