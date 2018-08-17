// -*- mode: typescript -*-

function MessageData(message) {
    this.sender = message.getFrom();
    this.subject = message.getSubject();
    this.date = formatDateService(message.getDate());
    this.time = formatTimeService(message.getDate());
    this.starred = message.isStarred();
    this.age = formatAge(this.date);
    this.isPriority = message.isInPriorityInbox();
    this.isInInbox = message.isInInbox();
}
