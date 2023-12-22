import { Paper, TableContainer, TableCell, TableHead, TableRow, Table, TableBody } from "@mui/material";

const UsersTable = props => {

<TableContainer component={Paper}>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Action</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
           
           
        </TableBody>
    </Table>
</TableContainer>

}

export default UsersTable;