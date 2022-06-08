import { withIronSessionSsr } from 'iron-session/next'
import ironOptions from './config'

export default function withSessionSsr(handler) {
    return withIronSessionSsr(handler, ironOptions)
}