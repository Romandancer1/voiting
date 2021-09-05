import AuthService from "@/service/auth.service"

const InitialState = {
      user: {
         name: null,
         dataLoaded: false
      },
      userDataLoaded: false
}

export const UserData = {
    namespaced: true,
    state: () => (InitialState),
    mutations: {
        getUserData(state, userData) {
            state.user.email = userData.judge.email;
            state.user.name = userData.judge.name;
            state.user.id = userData.judge.id
        },
        updateLoadingStatus(state, newLoadingStatus) {
            state.userDataLoaded= newLoadingStatus
        }

    },
    actions: {
        loadUser({commit}) {
            commit('updateLoadingStatus', true)
            AuthService.getUserInfo().then(response => {
                commit('getUserData', response)
                commit('updateLoadingStatus', false)
            })

        }
    }

}