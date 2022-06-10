import { Box, List, Typography } from '@mui/material'
import BookSearchItem from '../../components/BookSearchItem'
import API from '../../lib/api'


function Search({ books, search }) {
    return (
        <Box>
            <Typography component='p' fontSize={32} fontWeight={500} color='dark.light' textAlign='center'>
                {books.length > 0 ? `Showing results for ${search}:` : `Couldn't find results for ${search}`}
            </Typography>
            <List>
                {books.map((book) => (
                    <BookSearchItem book={book} key={book._id} />
                ))}
            </List>
        </Box>

    )
}

export default Search

export async function getServerSideProps({ query }) {
    const { q } = query
    const { data } = await API.get(`/books?search=${q}`)
    return { props: { books: data, search: q } }
}
