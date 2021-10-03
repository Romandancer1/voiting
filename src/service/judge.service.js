import axios from "axios";

const API_URL = 'https://voting-app.newtechaudit.ru/api/judges/';

class JudgeService {
    async getFinished() {
         return await axios.post(API_URL + 'get-finished/')
        .then(response => {
            return response.data
        })
    }

    async finishParticipantScore(id, roundID) {
        return axios.put(API_URL + 'finish-score/' + id, {
            roundID: roundID
        })
    }

    async sendJudgeFeedback(email, is_ok, feedback_text) {
        return axios.post(API_URL + 'send-feedback/',{
            feedback: {
                email: email,
                is_ok: is_ok,
                feedback_text: feedback_text
            }

        })
   }

}

export default new JudgeService();