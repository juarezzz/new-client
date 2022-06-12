import { withIronSessionApiRoute } from "iron-session/next";
import ironOptions from "../../lib/config";
import API from "../../lib/api"


export default withIronSessionApiRoute(updateRoute, ironOptions);

async function updateRoute(req, res) {
    const { _id, username, avatar } = req.body
    req.session.user = {
        id: _id,
        username,
        avatar
    };
    await req.session.save();
    res.status(200).end()
}