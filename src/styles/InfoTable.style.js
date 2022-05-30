import { TableHead, TableCell, styled, tableCellClasses } from '@mui/material'

export const StyledTableHead = styled(TableHead)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: 'white'
}))

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    border: '1px solid',
    borderColor: theme.palette.dark.light,
    fontWeight: 600,
    [`&:nth-of-type(even).${tableCellClasses.body}`]: {
        textAlign: 'center',
        fontWeight: 400
    },
}))