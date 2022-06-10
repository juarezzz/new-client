import { Button, MenuItem, Menu, Box, IconButton } from '@mui/material'
import { ArrowDropDown, ArrowDropUp, Check } from '@mui/icons-material'
import { useState } from 'react'
import API from '../lib/api'
import Router from 'next/router'

const valueToText = {
    'To Read': 'Want to read',
    'Read': 'Read',
    'Currently Reading': 'Currently Reading'
}

function AddBookButton({ bookId, user }) {

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    //Se o user não estiver logado retorna false
    //Se ele estiver logado e o livro estiver em sua lista retorna o livro
    //Se ele estiver logado e o livro não estiver em sua lista retorna undefined
    const isInUserList = user.isLoggedIn && user.books.find(bookObject => bookObject.book._id === bookId)

    const [isChecked, setIsChecked] = useState(Boolean(isInUserList))
    const [text, setText] = useState(
        isInUserList ? valueToText[isInUserList.status] : 'Want to read'
    )
    const [value, setValue] = useState(
        isInUserList ? isInUserList.status : 'To Read'
    )

    const addToShelf = async (status = value) => {
        if (!user) return
        if (!user.isLoggedIn) return Router.push('/user/login')
        await API.post(`users/${user.id}/books`, { book: bookId, status: status })
        setIsChecked(true)
    }

    const handleClick = () => {
        setAnchorEl(document.getElementById('book-status'))
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

    const handleChooseItem = (evt) => {
        setText(evt.currentTarget.innerText)
        setValue(evt.currentTarget.dataset.value)
        addToShelf(evt.currentTarget.dataset.value)
        handleCloseMenu()
    }

    const handleClickStatus = () => {
        if (!isChecked) {
            addToShelf()
        }
    }

    return (
        <Box>
            <Button
                onClick={handleClickStatus}
                startIcon={isChecked ? <Check /> : null}
                variant='contained'
                id='book-status'
                sx={{
                    backgroundColor: isChecked ? 'secondary.main' : 'primary.main',
                    borderRadius: 0,
                    width: '100%',
                    maxWidth: '100%',
                    height: '42px',
                    fontWeight: '600',
                    fontSize: '13px',
                    boxShadow: 'none',
                    '&	.MuiButton-startIcon': {
                        position: 'absolute',
                        right: '85%'
                    }
                }}
            >
                {text}
            </Button>
            <IconButton
                onClick={handleClick}
                sx={{
                    display: 'absolute',
                    left: '85%',
                    top: '-42px',
                    backgroundColor: 'transparent',
                    color: 'white',
                    borderRadius: 0,
                    height: '42px',
                    width: '15%',
                    zIndex: 1,
                    '&:hover': {
                        backgroundColor: 'transparent'
                    }
                }}
            >
                {
                    open
                        ?
                        <ArrowDropUp sx={{ fontSize: '32px' }} />
                        :
                        <ArrowDropDown sx={{ fontSize: '32px' }} />
                }
            </IconButton>
            <Menu
                open={open}
                anchorEl={anchorEl}
                onClose={handleCloseMenu}
                MenuListProps={{
                    sx: { width: '240px' }
                }}
            >
                <MenuItem onClick={handleChooseItem} data-value='To Read'>Want To Read</MenuItem>
                <MenuItem onClick={handleChooseItem} data-value='Read'>Read</MenuItem>
                <MenuItem onClick={handleChooseItem} data-value='Currently Reading'>Currently Reading</MenuItem>
            </Menu>
        </Box>
    )
}

export default AddBookButton;