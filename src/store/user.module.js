import AuthService from "@/service/auth.service"

const InitialState = {
      user: {
         name: null
      }
}

export const UserData = {
    namespaced: true,
    state: () => (InitialState),
    mutations: {
        getUserData(state, userData) {
            state.user.email = userData.judge.email;
            state.user.name = userData.judge.name;
            state.user.id = userData.judge.id
        }

    },
    actions: {
        loadUser({commit}) {
            AuthService.getUserInfo().then(response => {
                commit('getUserData', response)
            })

        }
    }

}