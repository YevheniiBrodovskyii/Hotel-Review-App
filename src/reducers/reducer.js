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
    loginPassword: "",
    map: false,
    mapId: null,
    toPhoto: false,
    photoRef: null
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
        case "TAKEPHOTO":
            return {
                ...state,
                "toPhoto": action.toPhoto
            }
        case "SHOWMAP":
            return {
                ...state,
                "mapId": action.mapId,
                "map": action.map
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
        case "CREATEPHOTOREF":
            return {
                ...state,
                photoRef: action.photoRef
            }
        default:
            return state
    }
}

export default reducer;