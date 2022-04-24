const initialState = {
    user: null,
    authenticated: false,
    hotels: [],
    signUp: false,
    back: false,
    signUpLogin: "",
    signUpPassword: "",
    signUpPassword2: "",
    loginEmail: "",
    loginPassword: "",
    map: false,
    mapId: null,
    toPhoto: false,
    photoRef: null,
    isLoaded: true,
    photoIsChosen: null,
    coordinates: null,
    hotelName: "",
    photo: "",
    lattitude: null,
    longitude: null,
    stars: 0,
    review: "",
    srcImgs: []
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
        case "SETHOTELNAMEFORM" :
                return {
                    ...state,
                    hotelName: action.hotelName
                }          
        case "SETLATFORM" :
                return {
                    ...state,
                    lattitude: action.lattitude,
            
                }
        case "SETLONGFORM" :
                return {
                    ...state,
                    longitude : action.longitude,
            
                }    
        case "SETSTARSFORM" :
                return {
                    ...state,
                    stars : action.stars,
            
                }
        case "SETREVIEWFORM" :
                return {
                    ...state,
                    review : action.review,
            
                }
        case "SETSRCIMGS":
            return {
                ...state,
                srcImgs: action.srcImgs
            }
        default:
            return state
    }
}

export default reducer;