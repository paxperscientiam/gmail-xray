function ThreadData(thread) {
    // thread

    this.messages = thread.getMessages();
    this.firstMessage = this.messages[0];
    this.labels = thread.getLabels();
    this.count = thread.getMessageCount();
    this.link = thread.getPermalink();
    //
    // first message
    this.sender = extractEmailAddress(this.firstMessage.getFrom());
    this.subject = this.firstMessage.getSubject();
    this.lastDate = thread.getLastMessageDate().toDateString();

    // last message
}
