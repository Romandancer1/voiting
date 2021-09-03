import AuthService from "@/service/auth.service"


// Parse local storage to get user token
const user = JSON.parse(localStorage.getItem('voting_app_user'));

// if user found, set state loggedIn true
const InitialState = user
  ? { status: { loggedIn: true }, user }
  : { status: {
      loggedIn: false,
      loggedError: null,
      loadingStatus: false
        },
        user: null };



export const auth = {
    namespaced: true,
    state: () => (InitialState),
    actions: {
        /***
         *
         * @param commit
         * @param user
         * @returns {Promise<void>}
         */
        login({commit}, user) {
            commit('loadingLoginStatus', true)
            return AuthService.login(user).then(
                response => {
                    commit('loadingLoginStatus', false)
                    if(typeof(response) === 'number') {
                        commit('loginFailure', response)
                    } else {
                        commit('loginSuccess', user)
                        return response.judge
                    }
                })
        },
        /***
         *
         * @param commit
         * @param user
         * @returns {Promise<unknown>}
         */
        register({commit}, user) {
            return AuthService.register(user).then(
                response => {
                    commit('registerSuccess');
                    return Promise.resolve(response.data);
                },
                error => {

                    commit('registerFailure');
                    return Promise.reject(error);
                }
            );

        },

        logout({commit}) {
            AuthService.logout();
            commit('logout')
        }
    },
    mutations: {
        loadingLoginStatus (state, newLoadingStatus) {
            state.status.loadingStatus = newLoadingStatus
        },
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        loginFailure(state, error) {
          state.status.loggedIn = false;
          state.user = null;
          state.status.loggedError = error;
        },
        logout(state) {
          state.status.loggedIn = false;
          state.status.loggedError = null;
          state.status.loadingStatus = false;
          state.user = null;
        },
        registerSuccess(state) {
          state.status.loggedIn = false;
        },
        registerFailure(state) {
          state.status.loggedIn = false;
        }

    },
    getters: {
        getUserData(state) {
            return state.user
        },
        getUserLogged(state) {
            return state.status.loggedIn
        },
        getLoginFailedStatus(state) {
            return state.status.loggedError
        }
    }
}