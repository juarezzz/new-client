import { Avatar, Button, Grid, TextField, Typography, Box, IconButton } from '@mui/material'
import { useState } from 'react'
import { Logout, ThumbUpAlt, Edit, Check, Clear } from '@mui/icons-material'
import withSessionSsr from '../../lib/withSessionSsr'
import API from '../../lib/api'
import axios from 'axios'
import useInputState from '../../hooks/useInputState'
import useToggle from '../../hooks/useToggle'
import Router from 'next/router'
import { useSWRConfig } from 'swr'
import ImagePicker from '../../components/ImagePicker'

export default function MyProfile({ userData }) {
    const { mutate } = useSWRConfig()
    const [userInfo, setUserInfo] = useState(userData)
    const [avatar, setAvatar] = useState(userInfo.avatar)
    const [bio, handleBio, setBio] = useInputState(userInfo.bio)
    const [isEditing, toggleIsEditing] = useToggle(false)
    const [hasChanged, setHasChanged] = useState(false)

    const handleChangeImage = (image) => {
        setAvatar(image)
        setUserInfo({
            ...userInfo,
            avatar: image
        })
        setHasChanged(true)
    }


    const handleUpdate = async () => {
        const { status, data: updatedUser } = await API.patch(`/users/${userInfo._id}`, userInfo)
        if (status === 200) {
            await axios.post('/api/update-user', updatedUser)
            setUserInfo(updatedUser)
            mutate('/api/user')
            Router.push('/')
        }
    }

    const handleLogout = async () => {
        await axios.post('/api/logout')
        mutate('/api/user')
        Router.push('/')
    }

    const handleConfirm = () => {
        setUserInfo({
            ...userInfo,
            bio: bio
        })
        toggleIsEditing()
        setHasChanged(true)
    }

    const handleCancel = () => {
        setBio(userInfo.bio)
        toggleIsEditing()
    }

    return (
        <Grid container height='100%' justifyContent='center'>
            <Grid item xs={3}>
                <Avatar
                    sx={{
                        height: '180px',
                        width: '180px'
                    }}
                    alt="User Profile Picture"
                    src={avatar}
                />
                <ImagePicker setFile={handleChangeImage} folder='Users'>
                    <Typography component='span'
                        sx={{
                            display: 'block',
                            backgroundColor: 'white',
                            textAlign: "center",
                            fontSize: '15px',
                            color: 'dark.light',
                            borderRadius: '100vw',
                            border: '1px solid',
                            borderColor: 'dark.light',
                            width: '180px',
                            cursor: 'pointer',
                            marginTop: '10px',
                            '&:hover': {
                                backgroundColor: 'dark.light',
                                color: 'white'
                            }
                        }}
                    >
                        Update Profile Picture
                    </Typography>
                </ImagePicker>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h4" color="dark.light">{userInfo.username}</Typography>

                <Box width='100%' textAlign="right">
                    <TextField
                        placeholder='Say something about yourself'
                        fullWidth
                        value={bio}
                        multiline
                        onChange={handleBio}
                        rows={12}
                        InputProps={{
                            readOnly: !isEditing
                        }}
                    />
                    {
                        isEditing
                            ?
                            <>
                                <IconButton color='primary' onClick={handleConfirm}>
                                    <Check />
                                </IconButton>
                                <IconButton color='error' onClick={handleCancel}>
                                    <Clear />
                                </IconButton>
                            </>
                            :
                            <IconButton
                                onClick={toggleIsEditing}
                            >
                                <Edit />
                            </IconButton>
                    }
                </Box>
            </Grid>

            <Grid item xs={12} alignSelf='flex-end' textAlign='right'>
                <Button
                    onClick={handleUpdate}
                    disabled={!hasChanged}
                    startIcon={<ThumbUpAlt />}
                    color="primary"
                    variant='contained'
                    sx={{
                        fontWeight: 700,
                        borderRadius: 0,
                        margin: '10px',
                    }}
                >
                    Save Changes
                </Button>
                <Button
                    onClick={handleLogout}
                    startIcon={<Logout />}
                    color="error"
                    variant='contained'
                    sx={{
                        fontWeight: 700,
                        borderRadius: 0,
                        margin: '10px',
                    }}
                >
                    Logout
                </Button>
            </Grid>
        </Grid>
    )
}

export const getServerSideProps = withSessionSsr(
    async function getServerSideProps({ req }) {
        const user = req.session.user
        if (!user) {
            return {
                redirect: {
                    destination: '/user/login',
                    permanent: false
                }
            }
        }
        const { data: userData } = await API.get(`/users/${user.id}`)
        return ({ props: { userData } })
    }
)