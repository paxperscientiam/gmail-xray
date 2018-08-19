function ThreadData(thread) {
    // thread

    this.messages = thread.getMessages();
    this.message = this.messages[0];
    this.labels = thread.getLabels();
    this.count = thread.getMessageCount();
    this.link = thread.getPermalink();
    //
    // first message
    this.sender = extractEmailAddress(this.message.getFrom());
    this.subject = this.message.getSubject();
    this.lastDate = thread.getLastMessageDate().toDateString();

    // last message
}
