import { CircularProgress, Box } from "@mui/material"
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'

function Loading() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        router.events.on('routeChangeStart', () => { setLoading(true) })
        router.events.on('routeChangeComplete', () => { setLoading(false) })
        router.events.on('routeChangeError', () => { setLoading(false) })

        return () => {
            router.events.off('routeChangeStart', () => { setLoading(true) })
            router.events.off('routeChangeComplete', () => { setLoading(false) })
            router.events.off('routeChangeError', () => { setLoading(false) })
        }
    })

    return (
        <Box
            sx={{
                visibility: loading ? 'visible' : 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10000,
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: '#e1f2fe75',
                //Essa transição é pra evitar a página de loading de ficar "piscando" quando o loading é muito rápido 
                transition: 'visibility',
                transitionDelay: '50ms'
            }}
        >
            <CircularProgress size={75} />
        </Box>
    )
}

export default Loading