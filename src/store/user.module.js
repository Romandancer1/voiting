import AuthService from "@/service/auth.service"

const InitialState = {
      user: {
         name: null,
         surname: null,
      }
}

export const UserData = {
    namespaced: true,
    state: () => (InitialState),
    mutations: {
        getUserData(state, userData) {
            state.user.name = userData.first_name;
            state.user.surname = userData.last_name;
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