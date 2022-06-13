import { Box, Typography } from '@mui/material'
import API from '../lib/api'

function Index({ books }) {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='space-around'
      width='100%'
      height='calc(100% - 60px)'
    >
      <Typography color='dark.light' textAlign='center' fontWeight={500} variant="h3">
        Welcome! Let's explore some stories!
      </Typography>
      <Box
        margin={'0 auto'}
        height={350}
        width={350}
        sx={{
          backgroundColor: '#1b9aaa',
          borderRadius: '50%'
        }}
      >
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          height='100%'
        >
          <img
            style={{
              height: '160px',
              width: '95px',
              transform: 'rotateZ(-15deg)',
            }}
            src={books[0].cover_image}
          />
          <img
            style={{
              height: '160px',
              width: '95px',
              transform: 'translateY(-15px)',
            }}
            src={books[11].cover_image}
          />
          <img
            style={{
              height: '160px',
              width: '95px',
              transform: 'rotateZ(15deg)',
            }}
            src={books[7].cover_image}
          />

        </Box>
      </Box>
    </Box>
  )
}

export default Index

export async function getServerSideProps() {
  const { data: books } = await API.get('/books')
  return { props: { books } }
}