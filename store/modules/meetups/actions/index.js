import {
    RETRIEVE_MEETUPS,
    SELECT_MEETUP
}                         from "./types";
import MeetupsDataService from '../../../../services/meetups.service'
/*import socketIOClient     from "socket.io-client";*/
import {snackbar}         from "../../ui/actions";
import root               from '../../../index';

const state                  = root.getState(state => state)
const qs                     = require('qs');
// const ios                    = socketIOClient(process.env.NEXT_PUBLIC_BACK_APP_URL)
export const retrieveMeetups = (params) => async (dispatch) => {
           try {

               let meta  = state.meetupsReducer.meta
               const res = await MeetupsDataService.retrieveMeetups(qs.stringify(params));
               dispatch({
                            type   : RETRIEVE_MEETUPS,
                            payload: {
                                meetups: res.data.data,
                                meta   : {
                                    ...meta,
                                    pagination: {
                                        ...meta.pagination,
                                        total: res.data.meta.pagination.total
                                    }
                                }
                            } || {
                                ...params,
                                pagination: {
                                    ...params.pagination,
                                    total: res.data.meta.pagination.total
                                }
                            }
                        }
               )
           }
           catch
               (err) {
               console.log(err);
           }
       }
;
export const createMeetup    = (data) => async (dispatch,
                                                state) => {
    try {
        await MeetupsDataService.createMeetup(data)
       /* ios.emit('meetupsChanged',
                 {})*/
        dispatch(snackbar({
                              show    : true,
                              message : 'Meetup Created Successfully',
                              severity: 'success'
                          }))
    }
    catch (err) {
        dispatch(snackbar({
                              show    : true,
                              message : (err.response.data.error.details.errors[0].path[0]
                                         + ' ' + err.response.data.error.message),
                              severity: 'error'
                          }))
    }

};
export const updateMeetup    = (id,
                                data
) => async (dispatch,
            state) => {
    try {
       /* ios.emit('meetupsChanged',
                 {})*/
        const res = MeetupsDataService.updateMeetup({
                                                        id,
                                                        data
                                                    });

        dispatch(retrieveMeetups())
        dispatch(snackbar({
                              show    : true,
                              message : 'Meetup Updated Successfully',
                              severity: 'success'
                          }))
    }
    catch (err) {
        dispatch(snackbar({
                              show    : true,
                              message : (err.response.data.error.details.errors[0].path[0]
                                         + ' ' + err.response.data.error.message),
                              severity: 'error'
                          }))
    }
};

export const selectMeetup = (data) => async (
    dispatch,
    state
) => {
    dispatch({
                 type   : SELECT_MEETUP,
                 payload: data,
             });
};

export const deleteMeetup = (id) => async (
    dispatch,
    state
) => {
    try {
        await MeetupsDataService.deleteMeetup(id);
    /*    ios.emit('meetupsChanged',
                 {})*/
        dispatch(snackbar({
                              show    : true,
                              message : 'Meetup Deleted Successfully',
                              severity: 'success'
                          }))
        dispatch(retrieveMeetups())
    }
    catch (err) {
        dispatch(snackbar({
                              show    : true,
                              message : (err.response.data.error.details.errors[0].path[0]
                                         + ' ' + err.response.data.error.message),
                              severity: 'error'
                          }))
    }
};

