import {combineReducers}     from "redux";
import meetupsReducer        from "./modules/meetups/meetupsReducer";
import authenticationReducer from "./modules/authentication/authenticationReducer"

export default combineReducers({
                                   meetupsReducer,
                                   authenticationReducer
                               });
