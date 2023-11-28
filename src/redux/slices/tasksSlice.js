import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasts: [],
    nextLink: '',
    prevLink: '',
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        getTasksReducer: (state, { payload }) => {
            state.tasts = payload.results;
            state.nextLink = payload.next;
            state.prevLink = payload.previous;
        },
    }
});

export const { getTasksReducer } = tasksSlice.actions;
export default tasksSlice.reducer;
