const ENDPOINT = require('../../resources/Endpoint');
const Member = require('./Member');

class MemberConfimation {

  constructor(party, data) {
    this.party = party;
    this.member = new Member(this.party, data);
    this.revision = data.revision;
    this.time = data.time;
  }

  confirm() {
    return this.party.app.http.sendPost(
      `${ENDPOINT.PARTY}/${this.party.app.id}/parties/${this.party.id}/members/${this.member.id}/confirm`,
      `${this.party.app.auth.tokenType} ${this.party.app.auth.accessToken}`,
      {},
    );
  }

  reject() {
    return this.party.app.http.sendPost(
      `${ENDPOINT.PARTY}/${this.party.app.id}/parties/${this.party.id}/members/${this.member.id}/reject`,
      `${this.party.app.auth.tokenType} ${this.party.app.auth.accessToken}`,
      {},
    );
  }

}

module.exports = MemberConfimation;
