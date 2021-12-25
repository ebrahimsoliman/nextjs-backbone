import {SNACK_BAR} from "./types";
export const snackbar = (params) => async (dispatch) => {
    dispatch({
                 type   : SNACK_BAR,
                 payload: {
                     snackbar: {
                         show   : params.show,
                         message: params.message
                     },

                 }
             })


};

