import { FormControlLabel, FormLabel, FormControl, Radio, RadioGroup, Grid, List, Typography } from '@mui/material'
import { useState } from 'react'
import BookListItem from '../../../components/BookListItem'
import withSessionSsr from '../../../lib/withSessionSsr'
import API from '../../../lib/api'

function MyLibrary({ user, bookList: books }) {
    const [list, setList] = useState('Currently Reading')
    const [bookList, setBookList] = useState(books)

    const handleRadioChange = (evt) => {
        setList(evt.currentTarget.value)
    }

    const handleRemoveBook = async (bookId) => {
        await API.delete(`/users/${user.id}/books/${bookId}`)
        setBookList(
            {
                ...bookList, [list]: bookList[list].filter(userBook => userBook.book._id !== bookId)
            }
        )
    }

    //Mudar isso tudo!
    const handleChangeBook = async (bookId, newStatus) => {
        await API.post(`/users/${user.id}/books`, { book: bookId, status: newStatus })
        const currentList = bookList[list]
        for (let i = 0; i < currentList.length; i++) {
            if (currentList[i].book._id === bookId) {
                const changedBook = currentList.splice(i, 1)
                bookList[newStatus] ? bookList[newStatus].push(changedBook[0]) : bookList[newStatus] = changedBook
                setBookList(
                    {
                        ...bookList,
                    }
                )
                break;
            }
        }

    }

    return (
        <Grid container margin='0 auto' justifyContent='center'>
            <Grid item xs={12} md={3} textAlign={{ xs: 'center', md: 'left' }} >
                <FormControl sx={{ position: { xs: 'static', md: 'fixed' } }} >
                    <FormLabel id="demo-radio-buttons-group-label"
                        sx={{
                            fontSize: '28px',
                            fontWeight: '600',
                            textAlign: 'center',
                            color: 'dark.light',
                            '&.Mui-focused': {
                                color: 'dark.light'
                            }
                        }}
                    >
                        Your Lists
                    </FormLabel>
                    <RadioGroup
                        onChange={handleRadioChange}
                        value={list}
                        name="book-list"
                        sx={{
                            flexDirection: {
                                xs: 'row',
                                md: 'column'
                            }
                        }}
                    >
                        <FormControlLabel value="Currently Reading" control={<Radio />} label="Currently Reading" />
                        <FormControlLabel value="To Read" control={<Radio />} label="Want To Read" />
                        <FormControlLabel value="Read" control={<Radio />} label="Read" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={8} textAlign='center'>
                <List>
                    {
                        bookList[list]?.length > 0
                            ?
                            bookList[list].map(userBook => (
                                <BookListItem
                                    userBook={userBook}
                                    handleRemoveBook={handleRemoveBook}
                                    handleChangeBook={handleChangeBook}
                                    currentList={list}
                                    key={userBook.book._id}
                                />
                            ))
                            :
                            <Typography variant='h4' color='dark.light' marginTop='50px'>There's no book in this list!</Typography>
                    }
                </List>
            </Grid>
        </Grid>
    )
}

export default MyLibrary

export const getServerSideProps = withSessionSsr(
    async function getServerSideProps({ req }) {
        const user = req.session.user
        if (!user) {
            return {
                redirect: {
                    destination: '/user/login',
                    permanent: false
                }
            }
        } else {
            const { data: userBooks } = await API.get(`/users/${user.id}/books`)

            //Separar os livros por status
            const bookList = userBooks.reduce((statusList, userBook) => {
                console.log(statusList)
                if (statusList[userBook.status]) {
                    statusList[userBook.status].push(userBook)
                } else {
                    Object.assign(statusList, { [userBook.status]: [userBook] })
                }
                return statusList
            }, {})

            return { props: { user, bookList } }
        }


    }
)