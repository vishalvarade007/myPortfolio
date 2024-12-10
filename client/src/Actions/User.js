import axios from "axios";
import {
    ADD_PROJECT_FAILURE,
    ADD_PROJECT_REQUEST,
    ADD_PROJECT_SUCCESS,
    ADD_TIMELINE_FAILURE,
    ADD_TIMELINE_REQUEST,
    ADD_TIMELINE_SUCCESS,
    CONTACT_US_FAILURE,
    CONTACT_US_REQUEST,
    CONTACT_US_SUCCESS,
    DELETE_PROJECT_FAILURE,
    DELETE_PROJECT_REQUEST,
    DELETE_PROJECT_SUCCESS,
    DELETE_TIMELINE_FAILURE,
    DELETE_TIMELINE_REQUEST,
    DELETE_TIMELINE_SUCCESS,
    GET_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    LOAD_USER_FAILURE,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER_FAILURE,
    LOGOUT_USER_REQUEST,
    LOGOUT_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,

} from "../Constants/userConstants";

export const getUser = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_USER_REQUEST,
        });

        const { data } = await axios.get("https://myportfolio-abgj.onrender.com/api/v1/user");
        
        dispatch({
            type: GET_USER_SUCCESS,
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: GET_USER_FAILURE,
            payload: error,
        });
    }
};

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_USER_REQUEST,
        });

        const { data } = await axios.post("https://myportfolio-abgj.onrender.com/api/v1/login", {
            email,
            password
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: data.message,
        });
        console.log(data,"logindata");
    } catch (error) {
        dispatch({
            type: LOGIN_USER_FAILURE,
            payload: error,
        });
    }
};

export const logout = () => async (dispatch) => {
    try {
        dispatch({
            type: LOGOUT_USER_REQUEST,
        });

        const { data } = await axios.get("https://myportfolio-abgj.onrender.com/api/v1/logout");

        dispatch({
            type: LOGOUT_USER_SUCCESS,
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: LOGOUT_USER_FAILURE,
            payload: error,
        });
    }
}

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: LOAD_USER_REQUEST,
        });

        const { data } = await axios.get("https://myportfolio-abgj.onrender.com/api/v1/me");

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAILURE,
            payload: error,
        });
    }
};

export const updateUser = (name,email,password,skills,about) => async (dispatch) => {
    try {
        dispatch({
            type: UPDATE_USER_REQUEST,
        });

        const { data } = await axios.put("https://myportfolio-abgj.onrender.com/api/v1/admin/update", {
            name,
            email,
            password,
            skills,
            about
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_USER_FAILURE,
            payload: error,
        });
    }
};

export const addTimeline = (title,description,date) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_TIMELINE_REQUEST,
        });

        const { data } = await axios.post("https://myportfolio-abgj.onrender.com/api/v1/admin/timeline/add", {
            title,
            description,
            date
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: ADD_TIMELINE_SUCCESS,
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: ADD_TIMELINE_FAILURE,
            payload: error,
        });
    }
};

export const deleteTimeline = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_TIMELINE_REQUEST,
        });

        const { data } = await axios.delete(`https://myportfolio-abgj.onrender.com/api/v1/admin/timeline/${id}`);

        dispatch({
            type: DELETE_TIMELINE_SUCCESS,
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: DELETE_TIMELINE_FAILURE,
            payload: error,
        });
    }
};

export const addProject = (title,url,image,description,techStack) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_PROJECT_REQUEST,
        });

        const { data } = await axios.post("https://myportfolio-abgj.onrender.com/api/v1/admin/project/add", {
            title,url,image,description,techStack
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: ADD_PROJECT_SUCCESS,
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: ADD_PROJECT_FAILURE,
            payload: error,
        });
    }
};

export const deleteProject = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_PROJECT_REQUEST,
        });

        const { data } = await axios.delete(`https://myportfolio-abgj.onrender.com/api/v1/admin/project/${id}`);

        dispatch({
            type: DELETE_PROJECT_SUCCESS,
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: DELETE_PROJECT_FAILURE,
            payload: error,
        });
    }
};

export const contactUs = (name,email,message) => async (dispatch) => {
    try {
        dispatch({
            type: CONTACT_US_REQUEST,
        });

        const { data } = await axios.post("https://myportfolio-abgj.onrender.com/api/v1/contact", {
            name,email,message
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: CONTACT_US_SUCCESS,
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: CONTACT_US_FAILURE,
            payload: error,
        });
    }
};