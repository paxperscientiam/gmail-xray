// -*- mode:typescript -*-

function buildAddOn(e) {
    // Activate temporary Gmail add-on scopes.
    // var accessToken = e.messageMetadata.accessToken;
    // GmailApp.setCurrentMessageAccessToken(accessToken);
    // var messageId = e.messageMetadata.messageId;
    // var senderData = extractSenderData(messageId);
    var MAILBOX_QUERY = props.getProperty("MAILBOX_QUERY");
    var MAX_THREADS = props.getProperty("MAX_THREADS");

    var Search = new SearchResults(MAILBOX_QUERY, 0, MAX_THREADS);

    var threads = Search.threads;

    var cards = [];

    cards.push(StatusCard({threads: threads}));
    //
    for (var i = 0; i < threads.length && i < MAX_THREADS; i++) {
        var threadData = new ThreadData(threads[i]); // a thread from set of threads
        var messages = threadData.messages; // a message from set of messages in a thread

        var threadCount = threadData.length;

        var card = CardService.newCardBuilder()
            .setHeader(( new CardHeader(messages[0]) ));

        for (var j = 0; j < threadCount; j++) {
            var Obj = mergeObjs({index: j}, {threadData: threadData}, {message: messages[j]});
            var msgSection = new CardSection(Obj).setCollapsible(false);
            var actionSection = new CardSectionActionCenter(threadData);
            ChainSections(card, [msgSection, actionSection]);
        }
        cards.push(card.build());
    }
    return cards;
}

function testing() {

}
