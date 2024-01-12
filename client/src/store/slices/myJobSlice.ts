import { createSlice } from "@reduxjs/toolkit";

type Job = {
    company_name: string,
    title: string,
    description?: string,
    skills?: string[],
    profile_pic?: string,
    banner_pic?: string,
    created_at: string,
    updated_at: Date
}

type MyJobInitialState = {
    initialState: {
        myJobs: Job[] | null
    }
}

const initialState: MyJobInitialState = {
    initialState: {
        myJobs: null
    }
}

const myJobSlice = createSlice({
    name: `myjobStore`,
    initialState,
    reducers: {
    }
});

export default myJobSlice;