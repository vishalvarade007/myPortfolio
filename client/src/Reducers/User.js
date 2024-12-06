import {
    ADD_PROJECT_FAILURE,
    ADD_PROJECT_REQUEST,
    ADD_PROJECT_SUCCESS,
    ADD_TIMELINE_FAILURE,
    ADD_TIMELINE_REQUEST,
    ADD_TIMELINE_SUCCESS,
    CLEAR_ERRORS,
    CLEAR_MESSAGE,
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
    UPDATE_USER_SUCCESS
} from "../Constants/userConstants";


export const userReducer = (state = { loading: true, error: null }, action) => {
    switch (action.type) {
        case GET_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_USER_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                error: null
            }
        case GET_USER_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
};

export const updateReducer = (state = { loading: false, error: null, message: null }, action) => {
    switch (action.type) {
        case UPDATE_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_USER_SUCCESS:
            return {
                loading: false,
                message: action.payload,
            }
        case UPDATE_USER_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        case ADD_TIMELINE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_TIMELINE_SUCCESS:
            return {
                loading: false,
                message: action.payload,
            }
        case ADD_TIMELINE_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        case DELETE_TIMELINE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_TIMELINE_SUCCESS:
            return {
                loading: false,
                message: action.payload,
            }
        case DELETE_TIMELINE_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        case ADD_PROJECT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_PROJECT_SUCCESS:
            return {
                loading: false,
                message: action.payload,
            }
        case ADD_PROJECT_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        case DELETE_PROJECT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_PROJECT_SUCCESS:
            return {
                loading: false,
                message: action.payload,
            }
        case DELETE_PROJECT_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
            case CONTACT_US_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CONTACT_US_SUCCESS:
            return {
                loading: false,
                message: action.payload,
                error:null,
            }
        case CONTACT_US_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        case CLEAR_MESSAGE:
            return {
                ...state,
                message: null
            }
        default:
            return state;
    }
};

export const loginReducer = (state = { loading: false, isAuthenticated: false, error: null, message: null }, action) => {
    switch (action.type) {
        case LOGIN_USER_REQUEST:
            return {
                ...state,
                loading: true,
                isAuthenticated: false,
            }
        case LOGIN_USER_SUCCESS:
            return {
                loading: false,
                isAuthenticated: true,
                message: action.payload,
                error: null
            }
        case LOGIN_USER_FAILURE:
            return {
                loading: false,
                isAuthenticated: false,
                error: action.payload
            }
        case LOAD_USER_REQUEST:
            return {
                ...state,
                loading: true,
                isAuthenticated: false,
            }
        case LOAD_USER_SUCCESS:
            return {
                loading: false,
                isAuthenticated: true,
                user: action.payload,
                error: null
            }
        case LOAD_USER_FAILURE:
            return {
                loading: false,
                isAuthenticated: false,
                error: action.payload
            }
        case LOGOUT_USER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case LOGOUT_USER_SUCCESS:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                message: action.payload,
                error: null
            }
        case LOGOUT_USER_FAILURE:
            return {
                loading: false,
                isAuthenticated: true,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        case CLEAR_MESSAGE:
            return {
                ...state,
                message: null
            }
        default:
            return state;
    }
};
