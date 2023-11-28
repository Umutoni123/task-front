import axios from "axios";
import { getTasksReducer } from "../slices/tasksSlice";

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
