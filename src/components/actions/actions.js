
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
const toBack = (back) => {
    return {
        "type": "BACK",
        "back": back
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

const setIsLoadedSearch = (isLoadedSearch) => {
    return {
        "type": "SETISLOADEDSEARCH",
        "isLoadedSearch": isLoadedSearch
    }
}
export {createPhotoRef, getGeoposition, authenticate, toTakePhoto, choosePhoto, fetchHotels, toSignUp,toBack,  isLoaded, setIsLoadedSearch }