const initState = {
    userOnLogin: null,
    isLogin: false
}

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN" : 
            return {
                userOnLogin: action.payload,
                isLogin: true
            }
        case "LOGOUT" :
            return {
                userOnLogin: null,
                isLoginL: false
            }
        default : 
            return state
    }
}

export default AuthReducer