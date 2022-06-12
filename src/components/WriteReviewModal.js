import { Box, Modal, TextField, Typography, Checkbox, FormControlLabel, Button, Stack } from "@mui/material"
import { SaveAlt } from '@mui/icons-material'

function WriteReviewModal({ open, onClose }) {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Box width="500px" height="80vh" padding='5px 16px'
                sx={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#e1f2fe'
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
                        id="review-field"
                        fullWidth
                        multiline
                        variant="standard"
                        InputProps={{
                            disableUnderline: true
                        }}
                    />
                </Box>
                <Stack direction='row' justifyContent='space-between'>
                    <FormControlLabel control={<Checkbox />} label="Spoilers" />
                    <Button sx={{color: 'dark.light', fontWeight: 700}}>Publish Review</Button>
                </Stack>
            </Box>
        </Modal>
    )
}

export default WriteReviewModal