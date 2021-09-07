import DashboardService from "@/service/dashboard.service"

const InitialState = {
    dashboardData: [],
    dashboardDataLoaded: false
}

export const DashboardData = {
    namespaced: true,
    state: () => (InitialState),
    mutations: {
        updateDashboardData(state, data) {
            state.dashboardData = data
        },
        updateLoadingStatus(state, newLoadingStatus) {
            state.dashboardDataLoaded = newLoadingStatus
        }
    },
    actions: {
        getDashboardData({commit}) {
            commit('updateLoadingStatus', true)
            return DashboardService.getDashboardInfo()
                .then(result => {
                    commit('updateDashboardData',  result.data)
                    commit('updateLoadingStatus', false)
                })
        }
    },
    getters: {
        getDashboardData(state) {
            return state.participantsList
        },
        getDashboardDataLoadingStatus(state) {
            return state.participantDataLoaded
        }
    }
}