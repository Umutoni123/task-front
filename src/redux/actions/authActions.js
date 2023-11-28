import axios from "axios";
import { login } from "../slices/authSlices";

export const loginAction = (payload, navigate) => async (dispatch, getState) => {
    try {
        const results = await axios.post('http://127.0.0.1:2000/api/login', payload);
        dispatch(login(results.data));
        navigate('/tasks');
    } catch (error) {
        console.log(error);
    }
}

export const signupAction = (payload) => async (dispatch, getState) => {
    try {
        const results = await axios.post('http://127.0.0.1:2000/api/signup', payload);
        console.log(results.data);
    } catch (error) {
        console.log(error)
    }
}
