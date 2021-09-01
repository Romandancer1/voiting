import axios from "axios";

const API_URL = 'https://voting-app.newtechaudit.ru/api/participants/';

class VotingService {
    async getJudgeList() {
        return await axios
          .post(API_URL, {
          })
    }
}

export default new VotingService();
