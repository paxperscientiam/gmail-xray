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

    var textParagraph = CardService.newTextParagraph()
        .setText("SHIT");

    var cardSection = CardService.newCardSection()
        .setHeader("Section header")
        .addWidget(textParagraph);


    var cardTop = CardService.newCardBuilder()
        .setName("Card name")
        .setHeader(CardService.newCardHeader().setTitle("Card title"))
        .addSection(cardSection.setCollapsible(false))
        .build();

    cards.push(cardTop);

    var threadData = {};

    for (var i = 0; i < threads.length && i < MAX_THREADS; i++) {
        threadData = new ThreadData(threads[i]); // a thread from set of threads
        var message = threadData.message[0]; // a message from set of messages in a thread

        var threadLength = threadData.threadLength;

        var card = CardService.newCardBuilder()
            .setHeader(( new CardHeader(threadData) ));

        for (var j = 0; j < threadLength; j++) {
            var Obj = mergeObjs({index: j}, threadData, message);
            var msgSection = new CardSection(Obj).setCollapsible(false);
            var actionSection = new CardSectionActionCenter();
            card = SectionChainer(card, [msgSection, actionSection]);
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
