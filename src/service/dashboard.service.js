import axios from "axios";

const API_URL = 'https://voting-app.newtechaudit.ru/api/dashboard/';

class DashboardService {
    async getDashboardInfo() {
        return await axios.get(API_URL)
    }
}

export default new DashboardService();
