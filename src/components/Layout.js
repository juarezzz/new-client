import { ThemeProvider } from '@emotion/react'
import customTheme from '../styles/theme'
import Navbar from './Navbar'
import { useRouter } from 'next/router'

function Layout({ children }) {
    const { pathname } = useRouter()
    const hasNavbar = !['/user/signUp', '/user/login'].includes(pathname)

    return (
        <ThemeProvider theme={customTheme}>
            {hasNavbar && <Navbar />}
            <main
                style={{
                    position: hasNavbar ? 'absolute' : 'static', //Se a navbar não estiver presente o main vai se posicionar no topo esquerdo da tela
                    top: 60, //Valor da altura da navbar
                    bottom: 0,
                    paddingTop: 20,
                    overflowY: 'scroll',
                    overflowX: 'hidden'
                }}
            >
                {children}
            </main>
        </ThemeProvider>
    )
}

export default Layout