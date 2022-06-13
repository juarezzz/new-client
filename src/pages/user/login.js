import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Typography, Box, TextField, Stack, Button, InputAdornment, IconButton, Link as MuiLink, Checkbox, FormControlLabel } from '@mui/material'
import CustomBackground from '../../styles/Background.style'
import useToggle from '../../hooks/useToggle'
import Link from 'next/link'
import axios from 'axios'
import Router from 'next/router'
import { useState } from 'react'

function login() {
    const [isVisible, toggleVisibility] = useToggle(false)
    const [rememberMe, toggleRememberMe] = useToggle(false)
    const [error, setError] = useState(false)

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        const { password, email } = evt.target
        try {
            const response = await axios.post('/api/login', {
                password: password.value,
                email: email.value,
                rememberMe: rememberMe
            })
            if (response.status === 200) {
                Router.push('/')
            } else {
                setError(true)
            }
        } catch (error) {
            setError(true)
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
                {
                    error
                    &&
                    <Typography color='error' fontWeight={600} marginBottom='-10px'>Email/password incorrect!</Typography>
                }
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
                            helperText={'Passwords must be at least 6 characters long'}
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
                        <FormControlLabel control={<Checkbox onChange={toggleRememberMe} />} label="Remember Me" />
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