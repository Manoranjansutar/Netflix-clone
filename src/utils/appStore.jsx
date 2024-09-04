import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice.jsx'
import MovieReducer from './MovieSlice.jsx'

const appStore = configureStore(
    {
        reducer:{
            user: userReducer,
            movies:MovieReducer
        }
    }
)

export default appStore