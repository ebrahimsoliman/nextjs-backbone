import {
    CREATE_MEETUP,
    DELETE_MEETUP,
    RETRIEVE_MEETUPS,
    SELECT_MEETUP,
    UPDATE_MEETUP
}                         from "./types";
import MeetupsDataService from '../../../../services/meetups.service'
import {notification}     from "antd";

export const createMeetup = (data) => async (dispatch) => {

    let res;
    MeetupsDataService.createMeetup(data)
                      .then(resp => {
                          res = resp
                          dispatch({
                                       type   : CREATE_MEETUP,
                                       payload: res.data
                                   });

                          notification['success']({
                                                      message    : 'Meetup Created Successfully',
                                                      description: `Meetup has been Created successfully`,
                                                      duration   : 0
                                                  });
                          dispatch(retrieveMeetups())
                          return Promise.resolve(res.data);
                      })
                      .catch(err => {
                          console.log(err.message)
                          notification['error']({
                                                    message    : err.name,
                                                    description: err.message,
                                                    duration   : 0
                                                });

                      });


};

export const retrieveMeetups = () => async (dispatch) => {
    try {
        const res = await MeetupsDataService.retrieveMeetups();
        dispatch({
                     type   : RETRIEVE_MEETUPS,
                     payload: res.data.data
                 })
    }
    catch (err) {
        console.log(err);
    }
};

export const updateMeetup = (id,
                             data) => async (dispatch) => {
    try {
        const res = MeetupsDataService.updateMeetup({
                                                        id,
                                                        data
                                                    });
        dispatch({
                     type   : UPDATE_MEETUP,
                     payload: data,
                 });
        notification['success']({
                                    message    : 'Meetup Updated Successfully',
                                    description: `Meetup has been Updated successfully`,
                                    duration   : 0
                                });
        dispatch(retrieveMeetups())

        return Promise.resolve(res.data);

    }
    catch (err) {
        return Promise.reject(err);
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
        notification['success']({
                                    message    : 'Meetup Deleted Successfully',
                                    description: `Meetup has been deleted successfully`,
                                    duration   : 0
                                });
        dispatch(retrieveMeetups())
    }
    catch (err) {
        console.log(err);
    }
};

