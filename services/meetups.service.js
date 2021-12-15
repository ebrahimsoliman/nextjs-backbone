import http from "../http/http-common";

class MeetupsDataService {
    createMeetup(data) {
        return http.post('meetups',
                         {data: data})
    };

    updateMeetup(data) {
        return http.put('meetups/' + data.id,
                        {data: data.data})
    };

    deleteMeetup(data) {
        return http.delete('meetups/' + data)
    }

    retrieveMeetups() {
        return http.get('meetups/')
    }
}

export default new MeetupsDataService();
