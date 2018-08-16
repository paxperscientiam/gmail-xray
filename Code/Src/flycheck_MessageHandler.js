// -*- mode: typescript -*-

function MessageData(message) {
    var strEmail = message.getFrom();
    var contacts = ContactsApp.getContactsByEmailAddress(strEmail);


    this.sender = contacts[0];
    this.subject = message.getSubject();
    this.date = message.getDate();
    this.starred = message.isStarred();

    return this;
}
