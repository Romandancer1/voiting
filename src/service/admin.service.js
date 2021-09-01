import axios from "axios";

const API_URL = 'https://voting-app.newtechaudit.ru/api/voting-admin/';

class AdminService {
    async finishRound(roundID) {
        return await axios.put(API_URL + 'finish/', {
            params: {
                roundID: roundID
            }
        })
    }

    async downloadExcel() {
        return await axios.get(API_URL + 'load-results/')
    }
}

export default new AdminService();