import { Button, Box, styled } from "@mui/material"

export const SearchBarForm = styled('form')(({ theme }) => ({
    width: '30%',
    height: '30px',
    backgroundColor: theme.palette.primary.light,
    paddingLeft: theme.spacing(1),
    alignItems: 'center',
    '&:focus-within': {
        backgroundColor: '#fff'
    }
}))

export const CustomButtonGroup = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
    margin: '0 20px',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

export const CustomButton = styled(Button)(({ theme }) => ({
    color: theme.palette.light.main,
    [theme.breakpoints.down('md')]: {
        fontSize: '20px',
        '& .MuiSvgIcon-root': {
            fontSize: '24px'
        }
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '24px',
        '& .MuiSvgIcon-root': {
            fontSize: '24px'
        }
    }
}))