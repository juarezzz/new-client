import { ListItem, ListItemText } from '@mui/material'
import Link from 'next/link'

function BookListItem({ book }) {
    return (
        <ListItem
            sx={{
                border: '1px solid #00000056',
                margin: '15px auto',
                width: '75%'
            }}
        >
            <Link href={`/books/${book._id}/show`}>
                <img
                    src={book.cover_image}
                    alt="Book cover"
                    width='80px'
                    height='120px'
                    style={{cursor: 'pointer'}}
                />
            </Link>
            <ListItemText>
                <Link href={`/books/${book._id}/show`}>{book.title}</Link>
            </ListItemText>
        </ListItem>
    );
}

export default BookListItem;
