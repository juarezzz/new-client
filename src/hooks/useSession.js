import { useEffect } from 'react'
import Router from 'next/router'
import axios from 'axios'

export default function useUser(redirectTo = '') {
    const { data: user } = axios.get('/api/user')

    useEffect(() => {
        // if no redirect needed, just return (example: already on /dashboard)
        // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
        if (!redirectTo || !user) return

        if (
            // Se user não estiver logado ele será redirecionado
            (redirectTo && !redirectIfFound && !user?.isLoggedIn)
        ) {
            Router.push(redirectTo)
        }
    }, [user, redirectTo])

    return { user }
}