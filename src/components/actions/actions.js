
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

const toSignUp = (signUp, login, password, password2) => {
    return {
        "type": "SIGNUP",
        "signUp": signUp,
    }
}
const setSignUpLogin = (login) => {
    return {
        "type": "SETSIGNUPLOGIN",
        "signUpLogin": login,
    }
}
const setSignUpPassword = (password) => {
    return {
        "type": "SETSIGNUPPASSWORD",
        "signUpPassword": password,
    }
}
const setSignUpPassword2 = (password) => {
    return {
        "type": "SETSIGNUPPASSWORD2",
        "signUpPassword2": password,
    }
}
const setLoginEmail = (login) => {
    return {
        "type": "SETLOGINEMAIL",
        "loginEmail": login,
    }
}
const setLoginPassword = (password) => {
    return {
        "type": "SETLOGINPASSWORD",
        "loginPassword": password,
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

export {authenticate, fetchHotels, toSignUp,toBack, showSignUpError, showLoginError, setSignUpLogin, setSignUpPassword, setSignUpPassword2, setLoginEmail, setLoginPassword}