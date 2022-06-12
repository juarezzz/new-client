import { Avatar, Box, Button, Typography } from "@mui/material"
import Link from "next/link"

function UserMenu({ user, sx }) {
    const isLoggedIn = user?.isLoggedIn
    const avatarImage = user?.avatar
    const username = user?.username

    return (
        <Box sx={sx}>
            {
                isLoggedIn
                    ?
                    <Link href='/user/my-profile'>
                        <Button
                            sx={{
                                padding: {
                                    xs: '0',
                                    sm: '6px 8px'
                                }
                            }}
                        >
                            <>
                                <Avatar
                                    sx={{
                                        width: '36px',
                                        height: '36px',
                                        borderColor: 'dark.light',
                                        boxSizing: 'content-box'
                                    }}
                                    alt="User Profile Photo"
                                    src={avatarImage} />
                                <Typography
                                    pl={1}
                                    fontWeight={500}
                                    color='white'
                                    sx={{ display: { xs: 'inline', sm: 'none' } }}
                                >
                                    {username}
                                </Typography>
                            </>
                        </Button>
                    </Link>
                    :
                    <Link href='/user/login'>
                        <Button
                            disableRipple
                            variant="outlined"
                            color="light"
                            sx={{
                                fontWeight: 'bold',
                                width: '70px',
                                height: '35px',
                                borderWidth: '2px',
                                marginLeft: {
                                    xs: 0,
                                    sm: 1.5
                                }
                            }}
                        >
                            Login
                        </Button>
                    </Link>
            }
        </Box>

    )
}

export default UserMenu