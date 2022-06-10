import { ListItem, Stack, Typography, Rating, IconButton, Tooltip } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import ChangeBookList from './ChangeBookList'
import Link from 'next/link'


function BookListItem({ userBook, handleRemoveBook, handleChangeBook, currentList }) {
    const { book } = userBook

    return (
        <ListItem
            sx={{
                border: '1px solid #000000a0',
                margin: '15px auto',
                width: '700px',
                height: '135px',
                padding: '0'
            }}
        >
            <Link href={`/books/${book._id}/show`}>
                <img
                    src={book.cover_image}
                    alt="Book cover"
                    width='90px'
                    height='100%'
                    style={{ cursor: 'pointer' }}
                />
            </Link>
            <Stack direction='column' paddingLeft={1} height='100%' justifyContent='space-around' flex={1}>
                <div>
                    <Link href={`/books/${book._id}/show`}>
                        <Typography component='h5' color='dark.light' fontWeight={600}
                            sx={{
                                cursor: 'pointer',
                                '&:hover': {
                                    textDecoration: 'underline'
                                }
                            }}
                        >
                            {book.title}
                        </Typography>
                    </Link>
                    <Typography color='dark.light' fontWeight={300}>
                        {book.author}
                    </Typography>
                </div>
                <Stack direction='row'>
                    <Rating sx={{ fontSize: 24 }} />
                    <Typography color='dark.light' fontWeight={700}>
                        - Your rating
                    </Typography>
                </Stack>
                <Typography>
                    Date added:  {new Date(userBook.date_added).toLocaleDateString()}
                </Typography>
            </Stack>
            <Stack direction='column' justifyContent='space-between' height='100%'>
                <Tooltip title='Remove from your library'>
                    <IconButton
                        sx={{
                            color: 'dark.light',
                        }}
                        onClick={() => handleRemoveBook(book._id)}
                    >
                        <ClearIcon />
                    </IconButton>
                </Tooltip>
                <ChangeBookList handleChangeBook={handleChangeBook} currentList={currentList} bookId={book._id} />
            </Stack>
        </ListItem>
    );
}

export default BookListItem;
