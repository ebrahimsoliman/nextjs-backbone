import {SNACK_BAR} from "./actions/types";

const initialState = {
    snackbar: {
        show    : false,
        message : '',
        severity: ''
    }
};


function uiReducer(uiState = initialState,
                   action) {
    const {
              type,
              payload
          } = action;

    switch (type) {


        case SNACK_BAR:
            return {
                snackbar: payload.snackbar
            };

        default:
            return uiState;
    }
}

export default uiReducer;
