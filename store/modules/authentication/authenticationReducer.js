import {
    AUTO_LOGIN,
    FORGET_PASSWORD,
    LOG_IN,
    LOG_OUT,
    RESET_PASSWORD,
    SIGN_UP
} from "./actions/types";

const initialState = {
    user : null,
    token: null,
};


function authenticationReducer(authState = initialState,
                               action) {
    const {
              type,
              payload
          } = action;
    switch (type) {
        case LOG_IN:
            return {
                user : payload.user,
                token: payload.jwt
            };
        case LOG_OUT:
            return {
                ...payload
            };

        case SIGN_UP:
            return {
                user : payload.user,
                token: payload.jwt
            };

        case FORGET_PASSWORD:
            return {
                ...authState
            };

        case RESET_PASSWORD:
            return {
                user : payload.user,
                token: payload.jwt
            };
        case AUTO_LOGIN:
            return {
                ...payload.authState
            };
        default:
            return authState;
    }
}

export default authenticationReducer;
