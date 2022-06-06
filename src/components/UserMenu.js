import { Avatar, Box, Button } from "@mui/material"
import Link from "next/link"

function UserMenu({ user }) {
    const isLoggedIn = user?.isLoggedIn
    const avatarImage = user?.avatar

    return (
        <Box
            sx={{
                display: {
                    xs: 'none',
                    sm: 'block'
                }
            }}
        >
            {
                isLoggedIn
                    ?
                    <Button>
                        <Avatar
                            sx={{
                                width: '36px',
                                height: '36px',
                                borderColor: 'dark.light',
                                boxSizing: 'content-box'
                            }}
                            alt="User Profile Photo"
                            src={avatarImage} />
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

    )
}

export default UserMenu