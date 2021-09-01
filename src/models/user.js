export default class User {
    constructor(email, password, firstName, lastName, isJudge, isStaff) {
        this.email = email
        this.password = password
        this.firstName = firstName;
        this.lastName = lastName;
        this.isJudge = isJudge;
        this.isStaff = isStaff;
    }
}
