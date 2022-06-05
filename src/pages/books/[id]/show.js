import { Box, Grid, Rating, Typography, Stack } from "@mui/material";
import InfoTable from "../../../components/InfoTable"
import API from '../../../services/api'

function ShowPage({ book }) {
    return (
        <Grid container justifyContent='center' rowSpacing={2} columnGap={8}>
            <Grid item xs={12} md={3} display='flex' justifyContent='center'>
                <Stack direction='column'>
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
                    <Box textAlign='center' >
                        <Rating value={4.55} readOnly sx={{ fontSize: 40 }} precision={0.1} />
                        <Typography color='dark.light' fontWeight={600} fontSize={27}>4.55</Typography>
                    </Box>
                </Stack>
            </Grid>
            <Grid item xs={12} md={7}>
                <Stack direction='column'>
                    <Box>
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
                    </Box>
                    <InfoTable book={book} />   
                </Stack>
            </Grid>
        </Grid>
    )
}

export async function getServerSideProps({ query }) {
    const { id } = query
    const { data } = await API.get(`/books/${id}`)
    return { props: { book: data } }
}

export default ShowPage