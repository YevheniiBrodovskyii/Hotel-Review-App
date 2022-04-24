
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

const showMap = (map, id) => {
    return {
        "type": "SHOWMAP",
        "mapId": id,
        "map": map
    }
}

const toTakePhoto = (toPhoto) => {
    return {
        "type": "TAKEPHOTO",
        "toPhoto": toPhoto
    }
}

const createPhotoRef = (photoRef) => {
    return {
        "type": "CREATEPHOTOREF",
        "photoRef": photoRef
    }
}

const isLoaded = (isLoaded) => {
    return {
        "type": "ISLOADED",
        "isLoaded": isLoaded
    }
}

const choosePhoto = (photoIsChosen) => {
    return {
        "type": "CHOOSEPHOTO",
        "photoIsChosen": photoIsChosen
    }
}

const getGeoposition = (coordinates) => {
    return {
        "type": "GETGEOPOSITION",
        "coordinates": coordinates
    }
}

const setHotelNameForm = (hotelName) => {
    return {
        "type": "SETHOTELNAMEFORM",
        "hotelName": hotelName,

    }
    
}

const setLatForm = (lattitude) => {
    return {
        "type": "SETLATFORM",
        "lattitude": lattitude,

    }
    
}

const setLongForm = (longitude) => {
    return {
        "type": "SETLONGFORM",
        "longitude": longitude,

    }
    
}



const setStarsForm = (stars) => {
    return {
        "type": "SETSTARSFORM",
        "stars": stars,

    }
    
}

const setReviewForm = (review) => {
    return {
        "type": "SETREVIEWFORM",
        "review": review,

    }
    
}

const setSrcImgs = (srcImgs) => {
    return {
        "type": "SETSRCIMGS",
        "srcImgs": srcImgs
    }
}

export {createPhotoRef, getGeoposition, authenticate, toTakePhoto, choosePhoto, showMap, fetchHotels, toSignUp,toBack, setSignUpLogin, setSignUpPassword, 
    setSignUpPassword2, setLoginEmail, setLoginPassword, isLoaded, setHotelNameForm, setLatForm, setLongForm, setStarsForm, setReviewForm, setSrcImgs }