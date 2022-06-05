import { withIronSessionApiRoute } from "iron-session/next";
import ironOptions from "../../lib/config";

export default withIronSessionApiRoute(userRoute, ironOptions);

async function userRoute(req, res) {
    if (req.session.user) {
        res.json({
            ...req.session.user,
            isLoggedIn: true,
        })
    } else {
        res.json({
            isLoggedIn: false,
        })
    }
}