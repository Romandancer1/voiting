import axios from "axios";

const API_URL = 'https://voting-app.newtechaudit.ru/api/judges/';

class JudgeService {
   
    async getFinished() {
         return await axios.post(API_URL + 'get-finished/')
        .then(response => {
            return response.data
    })
}

}

export default new JudgeService();