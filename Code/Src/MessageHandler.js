// -*- mode: typescript -*-

function MessageData(message) {
    var strEmail = message.getFrom();
    var contact = ContactsApp.getContactsByEmailAddress(strEmail);

//    Logger.log(contacts);
    this.sender = "tony";
    this.subject = message.getSubject();
    this.date = message.getDate();
    this.starred = message.isStarred();

    return this;
}
