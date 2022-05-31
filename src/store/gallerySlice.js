import { createSlice } from "@reduxjs/toolkit";

const gallerySlice = createSlice({
    name: "gallery",
    initialState: {
        gallery: [],
    },
    reducers: {
        setGallery: (state, action) => {
            console.log("setGallery", action.payload);
            state.gallery = action.payload;
            console.log("setGalleryAdd", state.gallery);
        }
    }
});

export const galleryActions = gallerySlice.actions;

export default gallerySlice;

