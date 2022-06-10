import { CompareArrows } from '@mui/icons-material';
import { IconButton, MenuItem, Tooltip, Menu } from '@mui/material';
import { useState } from 'react'

const valueToText = {
    'To Read': 'Want to read',
    'Read': 'Read',
    'Currently Reading': 'Currently Reading'
}

function ChangeBookList({ currentList, handleChangeBook, bookId }) {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (evt) => {
        setAnchorEl(evt.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

    const handleChooseItem = (evt) => {
        handleChangeBook(bookId, evt.currentTarget.dataset.value)
        handleCloseMenu()
    }

    return (
        <>
            <Tooltip title="Change list">
                <IconButton
                    onClick={handleClick}
                >
                    <CompareArrows />
                </IconButton>
            </Tooltip>
            <Menu
                open={open}
                anchorEl={anchorEl}
                onClose={handleCloseMenu}
            >
                {Object.keys(valueToText).map(value => {
                    if (value !== currentList) {
                        return (
                            <MenuItem
                                key={value}
                                data-value={value}
                                onClick={handleChooseItem}
                            >
                                {valueToText[value]}
                            </MenuItem>)
                    }
                })}
            </Menu>
        </>
    );
}

export default ChangeBookList;
