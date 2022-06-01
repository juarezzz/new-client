import { TableHead, TableCell, styled, tableCellClasses } from '@mui/material'

export const StyledTableHead = styled(TableHead)(({ theme }) => ({
    color: theme.palette.dark.light,
    backgroundColor: theme.palette.primary.light
}))

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontWeight: 600,
    [`&:nth-of-type(even).${tableCellClasses.body}`]: {
        textAlign: 'center',
        fontWeight: 400
    },
}))