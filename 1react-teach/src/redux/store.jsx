import { configureStore } from "@reduxjs/toolkit";
import { rootRedux } from "./reduxCounter/rootRedux";

export const store = configureStore({
    reducer: rootRedux,
})