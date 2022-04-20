const initialState = {
    user: null,
    authenticated: false,
    hotels: [],
    signUp: false,
    back: false,
    errorSignUp: false,
    errorLogin: false
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
                signUp: action.signUp
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