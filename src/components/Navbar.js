import { AppBar, Toolbar, Typography, InputBase, Button, Stack, Avatar, Box, Collapse, List, ListItem } from '@mui/material'
import { Search as SearchIcon, MenuBook, Group, TravelExplore, Menu as MenuIcon } from '@mui/icons-material'
import { SearchBarForm, CustomButton, CustomButtonGroup } from '../styles/Navbar.style.js'
import useToggle from '../hooks/useToggle'
import Link from 'next/link'
import Router from 'next/router'
import useUser from '../hooks/useSession.js'


function Navbar() {
    const [isMenuOpen, toggleIsMenuOpen] = useToggle(false)
    const user = useUser()

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const searchString = evt.target.q.value.trim()
        if (searchString) {
            Router.push(`/books/search?q=${searchString}`)
            evt.target.q.value = ''
        }
    }

    return (
        <AppBar position="sticky">
            <Toolbar sx={{ height: 60 }}>
                <Stack
                    width='100%'
                    direction='row'
                    alignItems='center'
                    justifyContent='flex-end'
                >
                    <CustomButton
                        onClick={toggleIsMenuOpen}
                        disableRipple
                        sx={{
                            display: {
                                xs: 'flex',
                                md: 'none'
                            },
                            alignItems: 'center',
                            marginLeft: '-15px'
                        }}
                    >
                        <MenuIcon fontSize='large' />
                    </CustomButton>

                    <Typography
                        variant='h4'
                        component="h1"
                        sx={{
                            marginRight: 'auto',
                            userSelect: 'none',
                            marginLeft: {
                                xs: 'auto',
                                sm: '0'
                            }
                        }}>
                        <Link href="/">
                            OpenBooks
                        </Link>
                    </Typography>

                    <CustomButtonGroup>
                        <CustomButton startIcon={<MenuBook />}>Biblioteca</CustomButton>
                        <CustomButton startIcon={<Group />}>Amigos</CustomButton>
                        <CustomButton startIcon={<TravelExplore />}>Explorar</CustomButton>
                    </CustomButtonGroup>

                    <SearchBarForm
                        onSubmit={handleSubmit}
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'flex'
                            }
                        }}
                    >
                        <InputBase
                            name='q'
                            placeholder="Procurar"
                            sx={{ flex: 1 }}
                        />
                        <Button disableRipple sx={{ mr: -1.5 }} type="submit">
                            <SearchIcon />
                        </Button>
                    </SearchBarForm>

                    <CustomButton
                        onClick={toggleIsMenuOpen}
                        disableRipple
                        sx={{
                            display: {
                                xs: 'flex',
                                sm: 'none'
                            },
                            alignItems: 'center',
                            marginRight: '-15px'
                        }}
                    >
                        <SearchIcon fontSize='large' />
                    </CustomButton>

                    <Box
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'block'
                            }
                        }}
                    >
                        {
                            true
                                ?
                                <Button>
                                    <Avatar
                                        sx={{
                                            width: '36px',
                                            height: '36px',
                                            border: '1.5px solid',
                                            borderColor: 'dark.light',
                                            boxSizing: 'content-box'
                                        }}
                                        alt="User Profile Photo"
                                        src="https://images.pexels.com/photos/11735050/pexels-photo-11735050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                                </Button>
                                :
                                <Link href='/user/login'>
                                    <Button
                                        disableRipple
                                        variant="outlined"
                                        color="light"
                                        sx={{
                                            marginLeft: 1.5,
                                            fontWeight: 'bold',
                                            width: '70px',
                                            height: '35px',
                                            borderWidth: '2px'
                                        }}
                                    >
                                        Login
                                    </Button>
                                </Link>
                        }
                    </Box>
                </Stack>
            </Toolbar>
            <Collapse in={isMenuOpen}>
                <Box
                    width='auto'
                    sx={{
                        display: {
                            xs: 'block',
                            md: 'none'
                        }
                    }}
                >
                    <>

                        <SearchBarForm
                            onSubmit={handleSubmit}
                            sx={{
                                width: '90%',
                                margin: '15px auto 0px',

                                display: {
                                    xs: 'flex',
                                    sm: 'none'
                                }
                            }}

                        >
                            <InputBase
                                name='q'
                                autoFocus
                                placeholder="Procurar"
                                sx={{ flex: 1 }}
                            />
                            <Button disableRipple sx={{ mr: -1.5 }} type="submit">
                                <SearchIcon />
                            </Button>
                        </SearchBarForm>


                        <List>
                            <ListItem>
                                <CustomButton startIcon={<MenuBook />} >
                                    Biblioteca
                                </CustomButton>
                            </ListItem>
                            <ListItem>
                                <CustomButton startIcon={<Group />}>
                                    Amigos
                                </CustomButton>
                            </ListItem>
                            <ListItem>
                                <CustomButton startIcon={<TravelExplore />}>
                                    Explorar
                                </CustomButton>
                            </ListItem>
                        </List>
                    </>
                </Box>
            </Collapse>
        </AppBar >
    );
}

export default Navbar;
