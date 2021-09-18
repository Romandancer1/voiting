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
        },
        getCurrentTableID(state) {
            return state.participantList['game'][0]['table_id']['table_id']
        },
        isRoundFinished(state){
            console.log(state.participantList['game'][0]['round_id']['is_finished'])
            return state.participantList['game'][0]['round_id']['is_finished']
        },
        isCurrentScoreFinished: (state) => (roundID) => {
            return state.participantList['game'][0]['judge_id'][''.concat('round_', roundID , '_finished')]
        }
    }
}