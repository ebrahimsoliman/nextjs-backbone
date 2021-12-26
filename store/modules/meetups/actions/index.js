import {
    CREATE_MEETUP,
    DELETE_MEETUP,
    RETRIEVE_MEETUPS,
    SELECT_MEETUP,
    UPDATE_MEETUP
} from "./types";
import MeetupsDataService from '../../../../services/meetups.service'
import socketIOClient from "socket.io-client";
import { snackbar } from "../../ui/actions";
import { useSelector } from "react-redux";
const qs = require('qs');
const ios = socketIOClient(process.env.NEXT_PUBLIC_BACK_APP_URL)

export const retrieveMeetups = (params) => async (dispatch) => {

    try {
        const res = await MeetupsDataService.retrieveMeetups(qs.stringify(params));
        dispatch({
            type: RETRIEVE_MEETUPS,
            payload: {
                meetups: res.data.data,
                meta: res.data.meta
            }
        })
    }
    catch (err) {
        console.log(err);
    }
};

export const createMeetup = (data) => async (dispatch) => {
    try {
        const res = await MeetupsDataService.createMeetup(data)
        ios.emit('meetupsChanged', {})
        // dispatch({
        //     type: CREATE_MEETUP,
        //     payload: res.data
        // });
        // dispatch(retrieveMeetups())
        retrieveMeetups()

        dispatch(snackbar({
            show: true,
            message: 'Meetup Created Successfully',
            severity: 'success'
        }))

    }
    catch (err) {
        console.log(err.message)
        dispatch(snackbar({
            show: true,
            message: (err.response.data.error.details.errors[0].path[0]
                + ' ' + err.response.data.error.message),
            severity: 'error'
        }))
    }

};


export const updateMeetup = (id, data) => async (dispatch) => {
        try {
            ios.emit('meetupsChanged',
                {})
            const res = MeetupsDataService.updateMeetup({
                id,
                data
            });
            // const ret = MeetupsDataService.retrieveMeetups()
            // dispatch({
            //     type: UPDATE_MEETUP,
            //     payload: ret.data,
            // });
            retrieveMeetups()
            dispatch(snackbar({
                show: true,
                message: 'Meetup Updated Successfully',
                severity: 'success'
            }))
        }
        catch (err) {
            dispatch(snackbar({
                show: true,
                message: (err.response.data.error.details.errors[0].path[0]
                    + ' ' + err.response.data.error.message),
                severity: 'error'
            }))
        }
    };

export const selectMeetup = (data) => async (dispatch, state) => {
    dispatch({
        type: SELECT_MEETUP,
        payload: data,
    });
};

export const deleteMeetup = (id) => async (dispatch,
    getState) => {
    try {
        await MeetupsDataService.deleteMeetup(id);
        // dispatch({
        //              type   : DELETE_MEETUP,
        //              payload: {id},
        //          });
        ios.emit('meetupsChanged', {})
        dispatch(snackbar({
            show: true,
            message: 'Meetup Deleted Successfully',
            severity: 'success'
        }))
        // dispatch(retrieveMeetups())
        retrieveMeetups()
        console.log(meetups)
    }
    catch (err) {


        dispatch(snackbar({
            show: true,
            message: (err.response.data.error.details.errors[0].path[0]
                + ' ' + err.response.data.error.message),
            severity: 'error'
        }))

    }
};

