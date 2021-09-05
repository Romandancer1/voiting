import axios from "axios";

const API_URL = 'https://voting-app.newtechaudit.ru/api/participants/';

class VotingService {
    async getParticipantList(roundID, judgeID) {
        return await axios
          .get(API_URL, {
              params: {
                   roundID: roundID,
                   judgeID: judgeID
              }
          })
    }

    async saveParticipantScore(data) {
        return axios.put(API_URL + 'save-score/', data)
    }
}

export default new VotingService();
