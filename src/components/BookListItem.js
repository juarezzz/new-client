import { ListItem, Stack, Typography, Rating } from '@mui/material'
import Link from 'next/link'

function BookListItem({ book }) {
    return (
        <ListItem
            sx={{
                border: '1px solid #000000a0',
                margin: '15px auto',
                width: '700px',
                padding: '0'
            }}
        >
            <Link href={`/books/${book._id}/show`}>
                <img
                    src={book.cover_image}
                    alt="Book cover"
                    width='90px'
                    height='135px'
                    style={{ cursor: 'pointer' }}
                />
            </Link>
            <Stack direction='column' paddingLeft={1}>
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
                <Stack direction='row'>
                    <Rating value={book.avg_rating} readOnly sx={{ fontSize: 24 }} precision={0.1} />
                    <Typography color='dark.light' fontWeight={700}>
                        - {book.avg_rating ?? 0}
                    </Typography>
                    <Typography color='dark.light' fontWeight={400}>
                        &nbsp; from {book.num_of_reviews} ratings
                    </Typography>
                </Stack>
            </Stack>
        </ListItem>
    );
}

export default BookListItem;
