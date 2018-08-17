function ThreadData(thread) {
    this.message = thread.getMessages();
    this.labels = thread.getLabels();
    this.count = thread.getMessageCount();
    this.link = thread.getPermalink();
    //
    this.sender = this.message[0].getFrom();
    this.subject = this.message[0].getSubject();
}
