import { Avatar, Box, Button, Rating, Stack, Typography } from "@mui/material"
import { useState } from "react"

function Review({ review, user }) {
    let User
    if (user) {
        User = user
    } else {
        User = review.user
    }

    const [isHidden, setHidden] = useState(review.comment?.spoilers && !user)

    return (
        <Box
            margin='20px 0'
            width='500px'
            sx={{
                boxShadow: '0px 4px 16px 1px #000000BE',
                borderRadius: '5px',
                minHeight: '175px'
            }}
        >
            <Stack
                padding='8px 5px'
                width='100%'
                gap={1}
                direction='row'
                alignItems='center'
                sx={{ borderBottom: '1px solid #00000075' }}>

                <Avatar
                    src={User.avatar}
                />
                <Typography color='dark.light' fontWeight={700} fontSize={18}>
                    {User.username}
                </Typography>
                <Rating readOnly value={review.score} />
                <Typography marginLeft='auto'>
                    {new Date(review.date).toLocaleDateString()}
                </Typography>
            </Stack>
            {
                isHidden
                    ?
                    <Box
                        display='flex'
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='center'
                        width='100%'
                        height='175px'
                    >
                        <Typography>This Review Contains Spoilers</Typography>
                        <Button onClick={() => setHidden(false)}>See</Button>
                    </Box>
                    :
                    <Typography paddingX={1}>
                        {review.comment.body}
                    </Typography>
            }
        </Box>
    )
}

export default Review