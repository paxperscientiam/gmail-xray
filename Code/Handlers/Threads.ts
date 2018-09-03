function ThreadData(threads) {
    this.threadSet = [];

    threads.forEach((thread) => {
        const threadObj = {};
        threadObj.messages =  thread.getMessages();
        threadObj.firstMessage = threadObj.messages[0];
        threadObj.labels = thread.getLabels();
        //
        threadObj.count = thread.getMessageCount();
        threadObj.length = threadObj.count;
        //
        threadObj.link = thread.getPermalink();
        threadObj.id = thread.getId();
        // first message
        threadObj.sender = extractEmailAddress(threadObj.firstMessage.getFrom());
        threadObj.subject = threadObj.firstMessage.getSubject();
        threadObj.lastDate = thread.getLastMessageDate().toDateString();

        this.threadSet.push(threadObj);
    });
}

function analyzeThread(threads) {
    //
}
