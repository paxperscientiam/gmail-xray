/**
 *  This function builds a set of data about this sender's presence in your
 *  inbox.
 *
 *  @param {String} messageId The message ID of the open message.
 *  @return {Object} a collection of sender information to display in cards.
 */
function extractSenderData(messageId) {
    // Use the Gmail service to access information about this message.
    var mail = GmailApp.getMessageById(messageId);
    var threadId = mail.getThread().getId();
    var senderEmail = extractEmailAddress(mail.getFrom());

    var recentThreads = GmailApp.search("from:" + senderEmail);
    var recents = [];

    // Retrieve information about up to 5 recent threads from the same sender.
    recentThreads.slice(0,MAX_THREADS).forEach(function(thread) {
        if (thread.getId() !== threadId && ! thread.isInChats()) {
            recents.push({
                count: thread.getMessageCount(),
                lastDate: thread.getLastMessageDate().toDateString(),
                link: "https://mail.google.com/mail/u/0/#inbox/" + thread.getId(),
                subject: thread.getFirstMessageSubject(),
            });
        }
    });

    var senderData = {
        email: senderEmail,
        recents: recents
    };

    return senderData;
}
