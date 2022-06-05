import { withIronSessionApiRoute } from "iron-session/next";
import ironOptions from "../../lib/config";
import API from "../../services/api"


export default withIronSessionApiRoute(loginRoute, ironOptions);

async function loginRoute(req, res) {
    const { email, password } = req.body
    const { status, data } = await API.post('/users/authenticate', { email, password })
    if (status === 200) {
        req.session.user = {
            id: data.id,
        };
        await req.session.save();
        res.status(200).end()
    } else {
        res.status(401).end()
    }
}