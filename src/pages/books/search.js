import { List, Typography } from '@mui/material'
import BookListItem from '../../components/BookListItem'
import API from '../../services/api'


function Search({ books, search }) {
    return (
        <div>
            <Typography component='h2' variant='h4' fontWeight={500} color='dark.light'>
                {books.length > 0 ? `Showing results for ${search}:` : `Couldn't find results for ${search}`}
            </Typography>
            <List>
                {books.map((book) => (
                    <BookListItem book={book} />
                ))}
            </List>
        </div>

    )
}

export default Search

export async function getServerSideProps({ query }) {
    const { q } = query
    const { data } = await API.get(`/books?search=${q}`)
    return { props: { books: data, search: q } }
}
