import {
    CREATE_MEETUP,
    DELETE_MEETUP,
    RETRIEVE_MEETUPS,
    SELECT_MEETUP,
    UPDATE_MEETUP
}                         from "./types";
import MeetupsDataService from '../../../../services/meetups.service'
// import {notification}     from "antd";
import socketIOClient     from "socket.io-client";

const qs  = require('qs');
const ios = socketIOClient(process.env.NEXT_PUBLIC_BACK_APP_URL)

export const retrieveMeetups = (params) => async (dispatch) => {
    try {
        const res = await MeetupsDataService.retrieveMeetups(qs.stringify(params));

        dispatch({
                     type   : RETRIEVE_MEETUPS,
                     payload: {
                         meetups: res.data.data,
                         meta   : res.data.meta
                     }
                 })
    }
    catch (err) {
        console.log(err);
    }
};

export const createMeetup = (data) => async (dispatch) => {

    let res;
    MeetupsDataService.createMeetup(data)
                      .then(resp => {
                          ios.emit('meetupsChanged',
                                   {})
                          res = resp
                          dispatch({
                                       type   : CREATE_MEETUP,
                                       payload: res.data
                                   });
                          dispatch(retrieveMeetups())
                          /*notification['success']({
                           message    : 'Meetup Created Successfully',
                           description: `Meetup has been Created successfully`,
                           duration   : 0
                           });*/
                      })
                      .catch(err => {
                          console.log(err.message)
                          /* notification['error']({
                           message    : err.response.data.error.details.errors[0].path[0],
                           description: err.response.data.error.message,
                           duration   : 0
                           });*/
                      });


};


export const updateMeetup = (id,
                             data) => async (dispatch) => {
    try {
        ios.emit('meetupsChanged',
                 {})
        const res = MeetupsDataService.updateMeetup({
                                                        id,
                                                        data
                                                    });
        const ret = MeetupsDataService.retrieveMeetups()
        dispatch({
                     type   : UPDATE_MEETUP,
                     payload: ret.data,
                 });
        /* notification['success']({
         message    : 'Meetup Updated Successfully',
         description: `Meetup has been Updated successfully`,
         duration   : 0
         });*/
    }
    catch (err) {
        /*  notification['error']({
         message    : err.response.data.error.details.errors[0].path[0],
         description: err.response.data.error.message,
         duration   : 0
         });*/
    }
};

export const selectMeetup = (data) => async (dispatch) => {
    dispatch({
                 type   : SELECT_MEETUP,
                 payload: data,
             });
};

export const deleteMeetup = (id) => async (dispatch) => {
    try {
        await MeetupsDataService.deleteMeetup(id);
        dispatch({
                     type   : DELETE_MEETUP,
                     payload: {id},
                 });
        ios.emit('meetupsChanged',
                 {})
        /*notification['success']({
         message    : 'Meetup Deleted Successfully',
         description: `Meetup has been deleted successfully`,
         duration   : 0
         });*/
        dispatch(retrieveMeetups())
    }
    catch (err) {
        /* notification['error']({
         message    : err.response.data.error.details.errors[0].path[0],
         description: err.response.data.error.message,
         duration   : 0
         });*/
    }
};

