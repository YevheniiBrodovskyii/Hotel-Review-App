const initialState = {
    user: null,
    authenticated: false,
    hotels: [],
    signUp: false,
    back: false,
    toPhoto: false,
    photoRef: null,
    isLoaded: true,
    photoIsChosen: null,
    coordinates: null,
    srcImgs: [],
    isLoadedSearch: false
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
        case "TAKEPHOTO":
            return {
                ...state,
                "toPhoto": action.toPhoto
            }
        case "BACK":
            return {
                ...state,
                back: action.back
            }
        case "CREATEPHOTOREF":
            return {
                ...state,
                photoRef: action.photoRef
            }
        case "ISLOADED":
            return {
                ...state,
                isLoaded: action.isLoaded
            }
        case "CHOOSEPHOTO":
            return {
                ...state,
                photoIsChosen: action.photoIsChosen
            }
        case "GETGEOPOSITION":
            return {
                ...state,
                coordinates: action.coordinates
            }
        case "SETISLOADEDSEARCH":
            return {
                ...state,
                isLoadedSearch: action.isLoadedSearch
            }
        default:
            return state
    }
}

export default reducer;