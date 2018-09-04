function MessageData(message) {
    this.sender = message.getFrom();
    this.subject = message.getSubject();
    this.date = formatDateService(message.getDate());
    this.time = formatTimeService(message.getDate());
    this.body = message.getPlainBody();
    //
    this.starred = message.isStarred();
    this.unread = message.isUnread();
    this.age = formatAge(this.date);
    this.isPriority = message.isInPriorityInbox();
    this.isInInbox = message.isInInbox();
    //
    // this gets me the HTML as pure text
    this.htmlBody = message.getBody();
}
