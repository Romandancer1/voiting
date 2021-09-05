export default class Participant {
    constructor(roundID, judgeID, item) {
        this.roundID = roundID
        this.judgeID = judgeID.id
        this.participantID = item.id
        this.resultManagment = this.getResultManagment(item)
        this.selfManagment = this.getSelfManagment(item)
        this.clientCentricity = this.getClientCentricity(item)
    }

    getResultManagment(item) {
        try {
            return item.participant_score[0].result_management
        } catch {
            return 1
        }
    }

    getSelfManagment(item) {
        try {
            return item.participant_score[0].self_management
        } catch {
            return 1
        }

    }

    getClientCentricity(item) {
        try {
            return item.participant_score[0].client_centricity
        } catch {
            return 1
        }
    }


}
