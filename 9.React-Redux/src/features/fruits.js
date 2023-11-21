import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list : [
        {
            name:"Mango",
            url : "/images/mango.jpg",
            price : 5,
            id: 65237894
        },
        {
            name: "Watermelon",
            url: "/images/watermelon.jpg",
            price:7,
            id:546465
        }
    ]
}

export const fruits = createSlice({
    name:"fruits",
    initialState
})
export default fruits.reducer