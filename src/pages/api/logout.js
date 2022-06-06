import { withIronSessionApiRoute } from "iron-session/next";
import ironOptions from "../../lib/config";


export default withIronSessionApiRoute(logoutRoute, ironOptions);

async function logoutRoute(req, res) {
    req.session.destroy()
    res.status(200).end()
}