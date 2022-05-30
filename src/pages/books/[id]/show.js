import { Box, Container, Stack, Typography } from "@mui/material";
import InfoTable from "../../../components/InfoTable"
import axios from 'axios';

function ShowPage({ book }) {
    return (
        <Container maxWidth="lg">
            <Stack direction='row' justifyContent='space-between'>
                <Box
                    width={240}
                    height={320}
                    sx={{
                        boxShadow: '0px 4px 16px 1px #000000BE'
                    }}>
                    <img
                        src={book.cover_image}
                        alt="Book cover"
                        width='100%'
                        height='100%'
                    />
                </Box>
                <Box width='70%'>
                    <Typography component='h2' color='dark.light' fontWeight={700}
                        sx={{
                            fontSize: 36,
                        }}
                    >
                        {book.title}
                    </Typography>

                    <Typography component='h3' color='dark.light' fontWeight={300} fontSize={24}>
                        {book.author}
                    </Typography>

                    <Typography component='p' textAlign='justify' marginTop='20px'>
                        {book.description}
                    </Typography>

                    <InfoTable book={book} />
                </Box>
            </Stack>
        </Container >
    )
}

export async function getServerSideProps({ query }) {
    const { id } = query
    const { data } = await axios.get(`http://localhost:5000/books/${id}`)
    return { props: { book: data } }
}

export default ShowPage