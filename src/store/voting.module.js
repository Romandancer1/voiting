import VotingService from "@/service/voting.service"

const InitialState = {
    participantList: [],
    participantDataLoaded: false
}

export const VotingData = {
    namespaced: true,
    state: () => (InitialState),
    mutations: {
        updateParticipantList(state, data) {
            state.participantList = data
        },
        updateLoadingStatus(state, newLoadingStatus) {
            state.participantDataLoaded = newLoadingStatus
        }
    },
    actions: {
        getParticipants({commit}, query) {
            commit('updateLoadingStatus', true)
            return VotingService.getParticipantList(query.roundID, query.judgeID)
                .then(result => {
                    commit('updateParticipantList',  result.data)
                    commit('updateLoadingStatus', false)
                })
        }
    },
    getters: {
        getParticipantsData(state) {
            return state.participantList
        },
        getParticipantsLoadingStatus(state) {
            return state.participantDataLoaded
        }
    }
}