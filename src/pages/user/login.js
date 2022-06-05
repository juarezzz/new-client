import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Typography, Box, TextField, Stack, Button, InputAdornment, IconButton, Link as MuiLink, Checkbox, FormControlLabel } from '@mui/material'
import CustomBackground from '../../styles/Background.style'
import useToggle from '../../hooks/useToggle'
import Link from 'next/link'
import axios from 'axios'
import Router from 'next/router'

function login() {
    const [isVisible, toggleVisibility] = useToggle(false)

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        const { password, email } = evt.target
        const response = await axios.post('/api/login', {
            password: password.value,
            email: email.value
        }
        )
        if (response.status === 200) {
            Router.push('/')
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
                    Login
                </Typography>
                <form
                    onSubmit={handleSubmit}
                >
                    <Stack paddingTop='25px' gap='25px'>
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
                            helperText={<MuiLink color='secondary.main' href="#">Forgot your password?</MuiLink>}
                            type={isVisible ? 'text' : 'password'}
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
                        <FormControlLabel control={<Checkbox />} label="Remember Me" />
                        <Button variant='contained' type='submit'>
                            Login
                        </Button>
                    </Stack>
                </form>
                <Link href='/user/signUp'>
                    <MuiLink sx={{ cursor: 'pointer' }} color='secondary.main'>Don't have an account yet?</MuiLink>
                </Link>
            </Box>
        </CustomBackground>
    )
}

export default login;