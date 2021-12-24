import {
    AUTO_LOGIN,
    FORGET_PASSWORD,
    LOG_IN,
    LOG_OUT,
    RESET_PASSWORD,
    SIGN_UP
}                                from "./types";
import AuthenticationDataService from '../../../../services/authentication.service'

export const login          = (data) => async (dispatch) => {
    try {
        const res = await AuthenticationDataService.login(data);
        dispatch({
                     type   : LOG_IN,
                     payload: {
                         user: res.data.user,
                         jwt : res.data.jwt
                     },

                 });

      /*  notification['success']({
                                    message    : 'Success',
                                    description: `You have been Logged In Successfully`,
                                    duration   : 0
                                });*/

        localStorage.setItem('authState',
                             JSON.stringify({
                                                user: res.data.user,
                                                jwt : res.data.jwt
                                            }))
    }
    catch (err) {
      /*  notification['error']({
                                  message    : 'Signup Failed',
                                  description: err.response.data.error.message,
                                  duration   : 0
                              });*/
    }

};
export const signUp         = (data) => async (dispatch) => {
    try {
        const res = await AuthenticationDataService.signup(data);
        dispatch({
                     type   : SIGN_UP,
                     payload: {
                         user: res.data.user,
                         jwt : res.data.jwt
                     },
                 });
       /* notification['success']({
                                    message    : 'Success',
                                    description: `You have been Signed Up Successfully`,
                                    duration   : 0
                                });*/
        localStorage.setItem('authState',
                             JSON.stringify({
                                                user: res.data.user,
                                                jwt : res.data.jwt
                                            }))
    }
    catch (err) {
      /*  notification['error']({
                                  message    : 'Signup Failed',
                                  description: err.response.data.error.message,
                                  duration   : 0
                              });*/
    }
};


export const forgetPassword = (data) => async (dispatch) => {
    try {
        await AuthenticationDataService.forgetPassword(data);
        dispatch({
                     type: FORGET_PASSWORD
                 });
       /* notification['success']({
                                    message    : 'Successful',
                                    description: `An Email Sent To You're Email Address`,
                                    duration   : 0
                                });*/

    }
    catch (err) {
    /*    notification['error']({
                                  message    : 'Signup Failed',
                                  description: err.response.data.error.message,
                                  duration   : 0
                              });*/
    }
};
export const resetPassword  = (data) => async (dispatch) => {
    try {
        const res = await AuthenticationDataService.resetPassword(data);
        dispatch({
                     type   : RESET_PASSWORD,
                     payload: {
                         user: res.data.user,
                         jwt : res.data.jwt
                     }
                 });
    /*    notification['success']({
                                    message    : 'Your Password Has Been Reset',
                                    description: `And You Are Logged In Successfully`,
                                    duration   : 0
                                });*/
        localStorage.setItem('authState',
                             JSON.stringify({
                                                user: res.data.user,
                                                jwt : res.data.jwt
                                            }))
    }
    catch (err) {
/*        notification['error']({
                                  message    : err.name,
                                  description: err.message,
                                  duration   : 0
                              });*/
    }
};
export const logout         = () => async (dispatch) => {
    dispatch({
                 type   : LOG_OUT,
                 payload: {
                     authState: null
                 }
             })
    localStorage.removeItem('authState')

};
export const autologin      = () => async (dispatch) => {

    try {
        const res = await AuthenticationDataService.me(JSON.parse(localStorage.getItem('authState')).jwt);
     /*   notification['success']({
                                    message    : 'Welcome Back',
                                    description: `Your Last Login Session Was Recovered`,
                                    duration   : 0
                                });*/
        dispatch({
                     type   : AUTO_LOGIN,
                     payload: {authState: JSON.parse(localStorage.getItem('authState'))}
                 });


    }
    catch (err) {
        dispatch({
                     type   : LOG_OUT,
                     payload: {authState: null}
                 });
    }


};
