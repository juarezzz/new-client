import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Typography, Box, TextField, Stack, Button, Link as MuiLink, InputAdornment, IconButton } from '@mui/material'
import Link from 'next/link'
import CustomBackground from '../../styles/Background.style'
import useToggle from '../../hooks/useToggle'
import axios from 'axios'
import { useRouter } from 'next/router'

function signUp() {
    const router = useRouter()
    const [isVisible, toggleVisibility] = useToggle(false)

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        const { username, password, email } = evt.target
        const response = await axios.post('http://localhost:5000/users', {
            username: username.value,
            password: password.value,
            email: email.value
        }
        )
        if (response.status === 201) {
            router.push('/')
        }
    }

    return (
        <CustomBackground>
            <Typography component='h1' variant='h3' color='light.main' >
                OpenBooks
            </Typography>
            <Box
                sx={{
                    width: '375px',
                    backgroundColor: '#fffffb',
                    borderRadius: '10px',
                    padding: '15px 20px',
                    border: '1px solid #000000a1'
                }}
            >
                <Typography variant='h4' color='dark.light' textAlign='center' >
                    Sign Up
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Stack paddingTop='25px' gap='25px'>
                        <TextField
                            required
                            InputLabelProps={{ required: false }}
                            fullWidth
                            type='text'
                            label='Username'
                            name='username'
                        />
                        <TextField
                            required
                            InputLabelProps={{ required: false }}
                            fullWidth
                            type='email'
                            label='Email'
                            name='email'
                        />
                        <TextField
                            required
                            InputLabelProps={{ required: false }}
                            fullWidth
                            label='Password'
                            name='password'
                            type={isVisible ? 'text' : 'password'}
                            helperText='Password must have at least 6 characters'
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton
                                            onClick={toggleVisibility}
                                        >
                                            {isVisible ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <Button variant='contained' type='submit'>
                            Create Account
                        </Button>
                    </Stack>
                </form>
                <Link href='/user/login'>
                    <MuiLink color='secondary.main' sx={{ cursor: 'pointer' }}>Already have an account?</MuiLink>
                </Link>
            </Box>
        </CustomBackground>
    )
}

export default signUp