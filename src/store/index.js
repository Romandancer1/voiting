import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from "./auth.module";
import { UserData} from "./user.module";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        UserData
    },
});