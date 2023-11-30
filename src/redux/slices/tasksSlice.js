import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasts: [],
    nextLink: '',
    prevLink: '',
    task: {},
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
        getOneTaskReducer: (state, { payload }) => {
            state.task = payload.results;
        }
    }
});

export const { getTasksReducer, getOneTaskReducer } = tasksSlice.actions;
export default tasksSlice.reducer;
