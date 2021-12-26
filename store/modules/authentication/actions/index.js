import {AUTO_LOGIN, FORGET_PASSWORD, LOG_IN, LOG_OUT, RESET_PASSWORD, SIGN_UP} from "./types";
import AuthenticationDataService from '../../../../services/authentication.service'
import {snackbar} from "../../ui/actions";


export const login = (data) => async (dispatch) => {
    try {
        const res = await AuthenticationDataService.login(data);
        dispatch({
            type: LOG_IN,
            payload: {
                user: res.data.user,
                jwt: res.data.jwt
            },

        });

        dispatch(snackbar({
            show: true,
            message: ('You have been Logged In Successfully'),
            severity: 'success'
        }))
        localStorage.setItem('authState',
            JSON.stringify({
                user: res.data.user,
                jwt: res.data.jwt
            }))
    } catch (err) {

        dispatch(snackbar({
            show: true,
            message: (err.response.data.error.message),
            severity: 'error'
        }))
    }

};
export const signUp = (data) => async (dispatch) => {
    try {
        const res = await AuthenticationDataService.signup(data);
        dispatch({
            type: SIGN_UP,
            payload: {
                user: res.data.user,
                jwt: res.data.jwt
            },
        });

        dispatch(snackbar({
            show: true,
            message: ('You have been Signed Up Successfully'),
            severity: 'success'
        }))
        localStorage.setItem('authState',
            JSON.stringify({
                user: res.data.user,
                jwt: res.data.jwt
            }))
    } catch (err) {

        dispatch(snackbar({
            show: true,
            message: (err.response.data.error.message),
            severity: 'error'
        }))
    }
};
export const forgetPassword = (data) => async (dispatch) => {
    try {
        await AuthenticationDataService.forgetPassword(data);
        dispatch({
            type: FORGET_PASSWORD
        });

        dispatch(snackbar({
            show: true,
            message: ('An Email Sent To You\'re Email Address'),
            severity: 'success'
        }))

    } catch (err) {
        dispatch(snackbar({
            show: true,
            message: (err.response.data.error.message),
            severity: 'error'
        }))
    }
};
export const resetPassword = (data) => async (dispatch) => {
    try {
        const res = await AuthenticationDataService.resetPassword(data);
        dispatch({
            type: RESET_PASSWORD,
            payload: {
                user: res.data.user,
                jwt: res.data.jwt
            }
        });

        dispatch(snackbar({
            show: true,
            message: ('Your Password Has Been Reset And You Are Logged In Successfully'),
            severity: 'success'
        }))
        localStorage.setItem('authState',
            JSON.stringify({
                user: res.data.user,
                jwt: res.data.jwt
            }))
    } catch (err) {

        dispatch(snackbar({
            show: true,
            message: (err.response.data.error.message),
            severity: 'error'
        }))
    }
};
export const logout = () => async (dispatch) => {
    dispatch({
        type: LOG_OUT,
        payload: {
            authState: null
        }
    })
    localStorage.removeItem('authState')

};
export const autologin = () => async (dispatch) => {

    try {
        const res = await AuthenticationDataService.me(JSON.parse(localStorage.getItem('authState')).jwt);
        dispatch(snackbar({
            show: true,
            message: ('Welcome Back Your Last Login Session Was Recovered'),
            severity: 'success'
        }))
        dispatch({
            type: AUTO_LOGIN,
            payload: {authState: JSON.parse(localStorage.getItem('authState'))}
        });
    } catch (err) {
        dispatch({
            type: LOG_OUT,
            payload: {authState: null}
        });
    }
};
