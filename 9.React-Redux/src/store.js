import {configureStore} from "@reduxjs/toolkit"
import counter from "./features/counter"
import fruits from "./features/fruits"
import fruitsCart from "./features/fruitsCart"
export const store = configureStore({
    reducer: {
        counter,
        fruits,
        fruitsCart
    }
})