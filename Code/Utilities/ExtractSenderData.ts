/**
 *  This function builds a set of data about this sender's presence in your
 *  inbox.
 *
 *  @param {String} messageId The message ID of the open message.
 *  @return {Object} a collection of sender information to display in cards.
 */
function extractSenderData(messageId) {
    // Use the Gmail service to access information about this message.
    const mail = GmailApp.getMessageById(messageId);
    const threadId = mail.getThread().getId();
    const senderEmail = extractEmailAddress(mail.getFrom());

    const recentThreads = GmailApp.search("from:" + senderEmail);
    const recents = [];

    // Retrieve information about up to 5 recent threads from the same sender.
    recentThreads.slice(0, MAX_THREADS).forEach((thread) => {
        if (thread.getId() !== threadId && ! thread.isInChats()) {
            recents.push({
                count: thread.getMessageCount(),
                lastDate: thread.getLastMessageDate().toDateString(),
                link: "https://mail.google.com/mail/u/0/#inbox/" + thread.getId(),
                subject: thread.getFirstMessageSubject(),
            });
        }
    });

    const senderData = {
        recents,
        senderEmail,
    };

    return senderData;
}
