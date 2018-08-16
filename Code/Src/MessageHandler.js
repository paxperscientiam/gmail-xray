// -*- mode: typescript -*-

function MessageData(message) {
    var strEmail = message.getFrom();
    var contact = ContactsApp.getContact(strEmail);

    Logger.log(contacts);
    this.sender = contact;
    this.subject = message.getSubject();
    this.date = message.getDate();
    this.starred = message.isStarred();

    return this;
}
