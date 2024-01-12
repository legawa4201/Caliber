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

type JobInitialState = {
    initialState: {
        job: Job | null,
        jobs: Job[] | null
    }
}

const initialState: JobInitialState = {
    initialState: {
        jobs: null,
        job: null
    }
}

const jobSlice = createSlice({
    name: `jobStore`,
    initialState,
    reducers: {
    }
});

export default jobSlice;