const initialState = {
    user: null,
    authenticated: false,
    hotels: [],
    signUp: false,
    back: false,
    errorSignUp: false,
    errorLogin: false,
    singUpLogin: "",
    singUpPassword: "",
    singUpPassword2: "",
    loginEmail: "",
    loginPassword: ""
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "AUTH":
            return {
                ...state,
                user: action.user,
                authenticated: action.authenticated
            }
        case "FETCHHOTELS":
            return {
                ...state,
                hotels: action.hotels
            }
        case "SIGNUP":
            return {
                ...state,
                signUp: action.signUp,
                singUpLogin: action.login,
                singUpPassword: action.password,
                singUpPassword2: action.password
            }
        case "SETSIGNUPLOGIN":
            return {
                ...state,
                "signUpLogin": action.signUpLogin,
            }
        case "SETSIGNUPPASSWORD":
            return {
                ...state,
                "signUpPassword": action.signUpPassword,
            }
        case "SETSIGNUPPASSWORD2":
            return {
                ...state,
                "signUpPassword2": action.signUpPassword2,
            }
        case "SETLOGINEMAIL":
            return {
                ...state,
                "loginEmail": action.loginEmail,
            }
        case "SETLOGINPASSWORD":
            return {
                ...state,
                "loginPassword": action.loginPassword,
            }
        case "BACK":
            return {
                ...state,
                back: action.back
            }
        case "SIGNUPERROR":
            return {
                ...state,
                errorSignUp: action.error
            }
        case "LOGINERROR":
            return {
                ...state,
                errorLogin: action.error
            }
        default:
            return state
    }
}

export default reducer;