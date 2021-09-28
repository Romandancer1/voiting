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
        },
        getPart({commit}, query) {
            // commit('updateLoadingStatus', true)
            return VotingService.getParticipantList(query.roundID, query.judgeID)
                .then(result => {
                    commit('updateParticipantList',  result.data)
                    commit('updateLoadingStatus', false)
                })
        },

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
            // console.log(state.participantList['game'][0]['round_id']['is_finished'])
            return state.participantList['game'][0]['round_id']['is_finished']
        },
        isCurrentScoreFinished: (state) => (roundID) => {
            return state.participantList['game'][0]['judge_id'][''.concat('round_', roundID , '_finished')]
        },
        getFinishedScore: (state) => (dict, roundID) => {
            // console.log(dict)
            if (state.participantList['game'].length > 0) {
                // console.log(roundID)
                if (dict[''.concat('round_', roundID, '_finished')] != true) {
                  let aggregatedData = []
                  let searchedData = state.participantList['game'][0]['table_id']['participant_id'].slice()

                  searchedData.forEach(
                      value => {
                        try {
                            
                            aggregatedData.push({
                                name: value.name ,
                                score:  value.participant_score[0].client_centricity  +
                                 value.participant_score[0].result_management  +
                                 value.participant_score[0].self_management 
                            }) 
                        } 
                        catch (e){
                            aggregatedData.push({
                                name: value.name,
                                score: 0 
                            })
                        }
                   
                            
                        // })
                        // console.log(value.name,value.participant_score[0].client_centricity)
                      }
                  )
                  aggregatedData.sort((a, b) => (a.score < b.score) ? 1 : -1)
                  for (var i = 1; i <= aggregatedData.length; i++) {
                    aggregatedData[i - 1]['rating'] = i
                  }
                  return aggregatedData
                }
             }
             return false
        }
    }
}