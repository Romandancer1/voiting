import axios from "axios";

const API_URL = 'https://voting-app.newtechaudit.ru/api/rounds/';

class AdminService {
    async finishRound(roundID) {
        return await axios.put(API_URL + 'finish/', {
            params: {
                roundID: roundID
            }
        })
    }

    async getAllRounds() {
         return await axios.get(API_URL + 'get-all/')
    }

    async downloadExcel() {
        return await axios.get(API_URL + 'load-results/')
    }
}

export default new AdminService();