import { TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material'
import { StyledTableHead, StyledTableCell } from '../styles/InfoTable.style';

const InfoTable = ({ book }) => {
    return (
        <TableContainer
            sx={{
                width: '500px',
                margin: '0 auto',
            }}
        >
            <Table>
                <StyledTableHead>
                    <TableRow>
                        <StyledTableCell
                            colSpan={2}
                            sx={{
                                textAlign: 'center',
                                fontWeight: 600,
                                fontSize: '20px'
                            }}>
                            General Info
                        </StyledTableCell>
                    </TableRow>
                </StyledTableHead>
                <TableBody>
                    <TableRow>
                        <StyledTableCell>Number Of Pages</StyledTableCell>
                        <StyledTableCell>{book.num_of_pages}</StyledTableCell>
                    </TableRow>
                    <TableRow>
                        <StyledTableCell>Publisher</StyledTableCell>
                        <StyledTableCell>{book.publisher}</StyledTableCell>
                    </TableRow>
                    <TableRow>
                        <StyledTableCell>Publish Date</StyledTableCell>
                        <StyledTableCell>{new Date(book.publish_date).toLocaleDateString()}</StyledTableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};


export default InfoTable;
