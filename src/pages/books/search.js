import { List } from '@mui/material'
import BookListItem from '../../components/BookListItem'
import axios from 'axios'

function Search({ books }) {
    return (
        <div>
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
    const { data } = await axios.get(`http://localhost:5000/books?search=${q}`)
    return { props: { books: data } }
}
