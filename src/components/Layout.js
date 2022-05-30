import { ThemeProvider } from '@emotion/react'
import customTheme from '../styles/theme'
import Navbar from './Navbar'

function Layout({ children }) {
    return (
        <ThemeProvider theme={customTheme}>
            <Navbar />
            <main>
                {children}
            </main>
        </ThemeProvider>
    )
}

export default Layout