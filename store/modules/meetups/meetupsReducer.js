import {
    CREATE_MEETUP,
    DELETE_MEETUP,
    RETRIEVE_MEETUPS,
    SELECT_MEETUP,
    UPDATE_MEETUP
} from "./actions/types";

const initialState = {
    meta   : {
        pagination: {
            page     : 0,
            pageSize : 0,
            pageCount: 0,
            total    : 0
        }
    },
    meetups: [],
    meetup : {
        id        : null,
        attributes: {
            title      : '',
            image      : '',
            address    : '',
            description: '',
        }
    }
};


function meetupReducer(meetupstate = initialState,
                       action) {
    const {
              type,
              payload
          } = action;

    switch (type) {

        case RETRIEVE_MEETUPS:
            return {
                ...meetupstate,
                meetups: payload.meetups,
                meta   : payload.meta
            };

        case CREATE_MEETUP:
            return {
                ...meetupstate,
            };

        case SELECT_MEETUP:
            return {
                ...meetupstate,
                meetup: payload
            };

        case UPDATE_MEETUP:
            return {
                meetups: payload,
                ...meetupstate
            };

        case DELETE_MEETUP:
            return {
                ...meetupstate
            };

        default:
            return meetupstate;
    }
}

export default meetupReducer;
