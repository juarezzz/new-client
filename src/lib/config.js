const ironOptions = {
    cookieName: "login_session_cookie",
    password: "pdjmp2LXLzrHi4kBm5FCT4Ku9QkoqhF6",
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
        httpOnly: true
    },
}

export default ironOptions