import http from "../http/http-common";

class MeetupsDataService {

    retrieveMeetups(params) {
        return http.get(`meetups/?${params}`)
    }

    createMeetup(data) {
        return http.post('meetups',
                         {data: data})
    };

    updateMeetup(data) {
        return http.put('meetups/' + data.id,
                        {data: data.data})
    };

    deleteMeetup(id) {
        return http.delete('meetups/' + id)
    }

}

export default new MeetupsDataService();
