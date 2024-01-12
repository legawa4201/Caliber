import { createSlice } from "@reduxjs/toolkit";

type Applicant = {
    id: number,
    username: string
}

type ApplicantInitialState = {
    applicant: Applicant | null
}

const initialState: ApplicantInitialState = {
    applicant: null
}

const applicantSlice = createSlice({
    name: `applicantStore`,
    initialState,
    reducers: {
    },
});

export default applicantSlice;