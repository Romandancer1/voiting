import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from "./auth.module";
import { UserData} from "./user.module";
import { VotingData } from "@/store/voting.module";
import { DashboardData } from "@/store/dashboard.module";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        UserData,
        VotingData,
        DashboardData
    },
});