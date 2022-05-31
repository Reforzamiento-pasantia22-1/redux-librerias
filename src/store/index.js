import {createStore}from"redux";
import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import gallerySlice from "./gallerySlice";
import authSlice from "./auth";



export const store = configureStore({
    reducer:{
        counter: counterSlice.reducer,
        gallery: gallerySlice.reducer,
        auth: authSlice.reducer
    } 
}); 



/*
const reducerFn = (state = {counter:0}, action) => {
    switch (action.type) {
        case "INCREMENT":
        return { counter: state.counter + 1 };
        case "DECREMENT":
        return { counter: state.counter - 1 };
        case "ADD":
        return { counter: state.counter + action.payload };
        default:
        return state;
    }
}
    

export const store = createStore(reducerFn);
*/