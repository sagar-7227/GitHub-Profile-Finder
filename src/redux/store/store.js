import { configureStore } from "@reduxjs/toolkit";
import reposReducer from '../slices/githubSlices.js'

const store = configureStore({
    reducer: {
        repos: reposReducer,
    },
});

export default store;
