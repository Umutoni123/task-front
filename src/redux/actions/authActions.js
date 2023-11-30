import axios from "axios";
import { login, profile } from "../slices/authSlices";

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

export const profileAction = () => async (dispatch, getState) =>{
    try {
        const results = await axios.get('http://127.0.0.1:2000/api/user', {
            headers: {
                Authorization: getState().auth.userToken
            }
        });
        dispatch(profile(results.data));
        return results.data;
        
    } catch (error) {
        console.log(error)
    }
}

export const updateProfileAction = (payload) => async (dispatch, getState) => {
    try {
        const results = await axios.patch('http://127.0.0.1:2000/api/profile', payload, {
            headers: {
                Authorization: getState().auth.userToken
            }
        } );
        console.log(results.data);
    } catch (error) {
        console.log(error)
    }
}
