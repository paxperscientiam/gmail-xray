function ThreadData(thread) {
    // thread

    this.messages = thread.getMessages();
    this.firstMessage = this.messages[0];

    this.labels = thread.getLabels();
    //
    this.count = thread.getMessageCount();
    this.length = this.count;
    //
    this.link = thread.getPermalink();
    this.id = thread.getId();
    //
    // first message
    this.sender = extractEmailAddress(this.firstMessage.getFrom());
    this.subject = this.firstMessage.getSubject();
    this.lastDate = thread.getLastMessageDate().toDateString();

    // last message
}


function analyzeThread(threads) {



}
