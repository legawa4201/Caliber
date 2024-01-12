import { configureStore } from "@reduxjs/toolkit";

import { applicantSlice, jobSlice, myJobSlice } from "./slices";

const store = configureStore({
    reducer: {
        jobs: jobSlice.reducer,
        myjobs: myJobSlice.reducer,
        applicant: applicantSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;