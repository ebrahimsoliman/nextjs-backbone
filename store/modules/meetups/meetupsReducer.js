import {
    RETRIEVE_MEETUPS,
    SELECT_MEETUP
} from "./actions/types";


const initialState = {
    meta   : {
        pagination: {
            page     : 0,
            pageSize : 0,
            pageCount: 0,
            total    : 0
        },
        filters   : {
            title: {
                $containsi: ''
            }
        },
        sort      : 'title:asc'
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

function meetupReducer(
    meetupstate = initialState,
    action
) {
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


        case SELECT_MEETUP:
            return {
                ...meetupstate,
                meetup: payload
            };

        default:
            return meetupstate;
    }
}

export default meetupReducer;
