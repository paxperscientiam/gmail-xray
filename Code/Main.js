// -*- mode:typescript -*-
function buildAddOn(e) {
    // Activate temporary Gmail add-on scopes.
    // var accessToken = e.messageMetadata.accessToken;
    // GmailApp.setCurrentMessageAccessToken(accessToken);
    // var messageId = e.messageMetadata.messageId;
    // var senderData = extractSenderData(messageId);
    var MAILBOX_QUERY = props.getProperty("MAILBOX_QUERY");
    var MAX_THREADS = props.getProperty("MAX_THREADS");

    var threads = GmailApp.search(MAILBOX_QUERY, 0, MAX_THREADS);
    var cards = [];

    cards.push(StatusCard());

    var threadData = {};

    for (var i = 0; i < threads.length && i < MAX_THREADS; i++) {
        threadData = new ThreadData(threads[i]); // a thread from set of threads
        var messages = threadData.messages; // a message from set of messages in a thread

        var threadLength = threadData.length;

        var card = CardService.newCardBuilder()
            .setHeader(( new CardHeader(threadData) ));

        for (var j = 0; j < threadLength; j++) {
            var Obj = mergeObjs({index: j}, {thread: threadData}, {message: messages[j]});
            var msgSection = new CardSection(Obj).setCollapsible(false);
            var actionSection = new CardSectionActionCenter();
            card = SectionChainer(card, [msgSection]);
        }

        // this is causing errors!
        //      var foot = new CardSectionSecondary();
        //    foot.setCollapsible(true);
        //        card = SectionChainer(card, {msg: foot});

        cards.push(card
                   .setName("Card name")
                   .build());

    }
    return cards;
}

function testing() {

}
