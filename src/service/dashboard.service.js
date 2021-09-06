import axios from "axios";

const API_URL = 'http://voting-app.newtechaudit.ru/api/participants/statistics/';

class DashboardService {
    async getDashboardInfo() {
        return await axios.get(API_URL)
    }
}

export default new DashboardService();
