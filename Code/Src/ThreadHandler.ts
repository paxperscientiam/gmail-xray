function ThreadData(thread) {
    var sender = extractEmailAddress(this.message.getFrom());

    this.messages = thread.getMessages();
    this.message = this.messages[0];
    this.labels = thread.getLabels();
    this.count = thread.getMessageCount();
    this.link = thread.getPermalink();
    //
    this.sender = sender;
    this.subject = this.message.getSubject();
}
