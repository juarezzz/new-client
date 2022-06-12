import { withIronSessionApiRoute } from "iron-session/next";
import ironOptions from "../../lib/config";
import API from "../../lib/api"


export default withIronSessionApiRoute(loginRoute, setCookieOptions);

async function loginRoute(req, res) {
    const { email, password } = req.body
    const { status, data: user } = await API.post('/users/authenticate', { email, password })
    if (status === 200) {
        req.session.user = {
            ...user
        };
        await req.session.save();
        res.status(200).end()
    } else {
        res.status(401).end()
    }
}

function setCookieOptions(req, res) {
    const { rememberMe } = req.body
    const newOptions = { ...ironOptions }
    newOptions.cookieOptions.maxAge = rememberMe ? 60 * 60 * 24 * 365 /* Um ano */ : undefined /*A sessão acaba quando a navegador fechar*/
    return newOptions
}