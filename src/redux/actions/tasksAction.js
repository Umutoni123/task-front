import axios from "axios";
import { getOneTaskReducer, getTasksReducer } from "../slices/tasksSlice";

export const addTaskAction = (payload, navigate) => async (dispatch, getState) => {
    try {
        await axios.post('http://127.0.0.1:2000/api/task', payload, {
            headers: {
                Authorization: getState().auth.userToken,
            }
        });

        navigate('/tasks');
    } catch (error) {

    }
}

export const updateTaskAction = (payload, navigate) => async (dispatch, getState) => {
    try {
        await axios.patch('http://127.0.0.1:2000/api/task', payload, {
            headers: {
                Authorization: getState().auth.userToken,
            }
        });

        navigate('/tasks');
    } catch (error) {

    }
}

export const getTasks = () => async (dispatch, getState) => {
    try {
        const results = await axios.get('http://127.0.0.1:2000/api/tasks', {
            headers: {
                Authorization: getState().auth.userToken,
            }
        });

        dispatch(getTasksReducer(results.data));
    } catch (error) {
        
    }
}

export const getOneTask = (id) => async (dispatch, getState) => {
    try {
        const results = await axios.get(`http://127.0.0.1:2000/api/one-task?id=${id}`, {
            headers: {
                Authorization: getState().auth.userToken,
            }
        });
        dispatch(getOneTaskReducer(results.data));
        return results.data;
    } catch (error) {
        
    }
}

export const deleteTaskAction = (id) => async (dispatch, getState) => {
    try {
        await axios.delete(`http://127.0.0.1:2000/api/task?id=${id}`, {
            headers: {
                Authorization: getState().auth.userToken,
            }
        });
        dispatch(getTasks());
    } catch (error) {
        
    }
}

export const updateProfileAction = (payload, navigate) => async (dispatch, getState) => {
    try {
        await axios.patch('http://127.0.0.1:2000/api/profile', payload, {
            headers: {
                Authorization: getState().auth.userToken,
            }
        });
    } catch (error) {

    }
}
