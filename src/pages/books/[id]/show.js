import { Box, Grid, Rating, Typography } from "@mui/material";
import InfoTable from "../../../components/InfoTable"
import axios from 'axios';

function ShowPage({ book }) {
    return (
        <Grid container justifyContent='center' rowSpacing={2} columnGap={8}>
            <Grid item xs={3} display='flex' justifyContent='center'>
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
            </Grid>
            <Grid item xs={7}>
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

                <Typography component='pre' whiteSpace='pre-line' textAlign='justify' marginTop='20px' height='200px'
                    sx={{
                        overflowY: 'auto',
                    }}
                >
                    {book.description}
                </Typography>
            </Grid>
            <Grid item xs={3} display='flex' flexDirection='column' alignItems='center'>
                <Rating value={4.55} readOnly sx={{ fontSize: 40, margin: '0 auto' }} precision={0.1} />
                <Typography component='span' color='dark.light' textAlign='center' fontWeight={600} fontSize={27}>4.55</Typography>
            </Grid>
            <Grid item xs={7}>
                <InfoTable book={book} />
            </Grid>
        </Grid>
    )
}

export async function getServerSideProps({ query }) {
    const { id } = query
    const { data } = await axios.get(`http://localhost:5000/books/${id}`)
    return { props: { book: data } }
}

export default ShowPage