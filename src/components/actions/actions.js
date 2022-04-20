
const authenticate = (user, authenticated) => {
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
const toBack = (back) => {
    return {
        "type": "BACK",
        "back": back
    }
}
const showSignUpError = (error) => {
    return {
        "type": "SIGNUPERROR",
        "error": error
    }
}

const showLoginError = (error) => {
    return {
        "type": "LOGINERROR",
        "error": error
    }
}

export {authenticate, fetchHotels, toSignUp,toBack, showSignUpError, showLoginError}