// -*- mode: typescript -*-

function MessageData(message) {
    Logger.log("MessageDate:" + message.getDate());


    this.sender = message.getFrom();
    this.subject = message.getSubject();
    this.date = message.getDate();
    this.starred = message.isStarred();

    return this;
}
