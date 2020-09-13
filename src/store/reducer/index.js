import AuthReducer from "./auth"
import { combineReducers } from "redux"

const rootReducer = combineReducers ({
    authReducer: AuthReducer,
    //anotherReducer : AnotherReducer
})

export default rootReducer