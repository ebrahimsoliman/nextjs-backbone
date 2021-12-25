import {combineReducers}     from "redux";
import meetupsReducer        from "./modules/meetups/meetupsReducer";
import authenticationReducer from "./modules/authentication/authenticationReducer"
import uiReducer             from "./modules/ui/uiReducer";

export default combineReducers({
                                   meetupsReducer,
                                   authenticationReducer,
                                   uiReducer
                               });
