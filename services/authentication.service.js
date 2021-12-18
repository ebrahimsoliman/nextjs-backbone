import http from "../http/http-common";

class AuthenticationDataService {
    signup(data) {
        return http.post('auth/local/register',
                         data)
    };

    login(data) {
        return http.post('auth/local',
                         data)
    };

    forgetPassword(data) {
        return http.post('auth/forgot-password/',
                         data)
    }

    resetPassword(data) {
        return http.post('auth/reset-password/',
                         data)
    };

}

export default new AuthenticationDataService();
