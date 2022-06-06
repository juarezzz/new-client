import { ThemeProvider } from '@emotion/react'
import customTheme from '../styles/theme'
import Navbar from './Navbar'
import { useRouter } from 'next/router'
import Loading from './Loading'

function Layout({ children }) {
    const router = useRouter()
    const hasNavbar = !['/user/signUp', '/user/login'].includes(router.pathname)

    return (
        <ThemeProvider theme={customTheme}>
            {hasNavbar && <Navbar />}
            <main
                style={{
                    position: hasNavbar ? 'absolute' : 'static', //Se a navbar não estiver presente o main vai se posicionar no topo da tela
                    top: 60, //Valor da altura da navbar
                    bottom: 0,
                    paddingTop: 20,
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    width: '100%'
                }}
            >
                {children}
            </main>
            <Loading />
        </ThemeProvider>
    )
}

export default Layout