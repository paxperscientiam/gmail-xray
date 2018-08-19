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

    var threadData = {};

    for (var i = 0; i < threads.length && i < MAX_THREADS; i++) {
        threadData = new ThreadData(threads[i]);
        var message = threadData.message[0];

        var count = threadData.count;

        var card = CardService.newCardBuilder()
            .setHeader(( new CardHeader(threadData) ));

        for (var j = 0; j < count; j++) {
            //
            // threaData -> count, link, message
            var Obj = mergeObjs({index: j}, threadData, message);
            var msg = new CardSection(Obj).setCollapsible(false);
            var action = new CardSectionActionCenter();
            card = SectionChainer(card, [{section: msg}, {section: action}]);
        }

        var foot = new CardSectionSecondary();
        foot.setCollapsible(true);
        card = SectionChainer(card, {msg: foot});

        cards.push(card
                   .setName("Card name")
                   .build());

    }
    return cards;
}

function testing() {

}
