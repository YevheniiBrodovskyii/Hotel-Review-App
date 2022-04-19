const AUTHENTICATION = (user, authenticated) => {
    return {
        "type": "AUTH",
        "user": user,
        "authenticated": authenticated
    }
}

const fetchHotels = (hotels) => {
    return {
        "type": "FETCHHOTELS",
        "hotels": hotels
    }
}

const toSignUp = (signUp) => {
    return {
        "type": "SIGNUP",
        "signUp": signUp
    }
}
export {AUTHENTICATION, fetchHotels, toSignUp}