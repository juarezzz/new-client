import { Box, Modal, TextField, Typography, Checkbox, FormControlLabel, Button, Stack } from "@mui/material"
import { useState } from "react"
import useInputLength from "../hooks/useInputLength"
import API from "../lib/api"
import Router from 'next/router'

function WriteReviewModal({ open, onClose, user, book }) {
    const [spoilers, setSpoilers] = useState(user.hasBook?.review?.comment?.spoilers ?? false)
    const [review, handleReview, setReview] = useInputLength(user.hasBook?.review?.comment?.body || '', 10000)

    const handlePublish = async () => {
        if (!review.trim()) {
            return
        }
        await API.post(`/books/${book._id}/reviews`,
            {
                user: {
                    userId: user.id,
                    username: user.username,
                    avatar: user.avatar
                },
                book: book._id,
                score: user.hasBook?.review?.score,
                comment: {
                    body: review,
                    spoilers: spoilers
                }
            })
        onClose()
        Router.reload()
    }

    const handleClose = () => {
        setSpoilers(false)
        setReview('')
        onClose()
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box width="500px" height="80vh" padding='5px 16px'
                sx={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#e1f2fe',
                    borderRadius: '2px'
                }}
            >
                <Typography color='dark.light' variant="h5" fontWeight={500} textAlign='center'>
                    Share your thoughts:
                </Typography>
                <Box
                    onClick={() => document.getElementById('review-field').focus()}
                    padding={1}
                    margin='10px 0'
                    width='100%'
                    height='80%'
                    sx={{ border: '1px solid', backgroundColor: 'white', overflow: 'hidden' }}>
                    <TextField
                        onChange={handleReview}
                        value={review}
                        id="review-field"
                        name="comment"
                        fullWidth
                        multiline
                        variant="standard"
                        InputProps={{
                            disableUnderline: true
                        }}
                    />
                </Box>
                <Stack direction='row' justifyContent='space-between'>
                    <FormControlLabel control={<Checkbox onChange={() => setSpoilers(!spoilers)} checked={spoilers} />} label="Spoilers" />
                    <Button
                        onClick={handlePublish}
                        sx={{ color: 'dark.light', fontWeight: 700 }}
                    >
                        Publish Review
                    </Button>
                </Stack>
            </Box>
        </Modal>
    )
}

export default WriteReviewModal