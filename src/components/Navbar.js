import { AppBar, Toolbar, Typography, InputBase, Button, Stack, Avatar, Box, Collapse, List, ListItem } from '@mui/material'
import { Search as SearchIcon, MenuBook, Group, TravelExplore, Menu as MenuIcon } from '@mui/icons-material'
import { SearchBar, CustomButton, CustomButtonGroup } from '../styles/Navbar.style.js'
import useToggle from '../hooks/useToggle'


function Navbar() {
    const [loggedIn, toggleLoggedIn] = useToggle(false)
    const [isMenuOpen, toggleIsMenuOpen] = useToggle(false)

    return (
        <AppBar position="sticky" sx={{ marginBottom: '20px' }}>
            <Toolbar>
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

                        OpenBooks
                    </Typography>

                    <CustomButtonGroup>
                        <CustomButton startIcon={<MenuBook />}>Biblioteca</CustomButton>
                        <CustomButton startIcon={<Group />}>Amigos</CustomButton>
                        <CustomButton startIcon={<TravelExplore />}>Explorar</CustomButton>
                    </CustomButtonGroup>

                    <SearchBar
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'flex'
                            }
                        }}
                    >
                        <InputBase
                            placeholder="Procurar"
                            sx={{ flex: 1 }}
                        />
                        <Button disableRipple sx={{ mr: -1.5 }}>
                            <SearchIcon />
                        </Button>
                    </SearchBar>

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
                            loggedIn
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
                                <Button
                                    disableRipple
                                    onClick={() => toggleLoggedIn(true)}
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

                        <SearchBar
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
                                autoFocus
                                placeholder="Procurar"
                                sx={{ flex: 1 }}
                            />
                            <Button disableRipple sx={{ mr: -1.5 }}>
                                <SearchIcon />
                            </Button>
                        </SearchBar>


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
