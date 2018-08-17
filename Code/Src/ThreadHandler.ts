function ThreadData(thread) {
    this.messages = thread.getMessages();
    this.message = this.messages[0];
    this.labels = thread.getLabels();
    this.count = thread.getMessageCount();
    this.link = thread.getPermalink();
    //
    this.sender = this.message[0].getFrom();
    this.subject = this.message[0].getSubject();
}
