import { createStore } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import rootReducer from "./reducer"

// Create persist config
const persistConfig = {
    key: "root",
    storage
}

// Create persist reducer | Creating store | Create persist store 
const PersistedReducer = persistReducer(persistConfig, rootReducer)
const Store = createStore(PersistedReducer)
const Persistor = persistStore(Store) 

export { Store, Persistor }
