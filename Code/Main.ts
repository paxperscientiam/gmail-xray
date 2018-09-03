//
function buildAddOn(e) {
    // Activate temporary Gmail add-on scopes.
    // var accessToken = e.messageMetadata.accessToken;
    // GmailApp.setCurrentMessageAccessToken(accessToken);
    // var messageId = e.messageMetadata.messageId;
    // var senderData = extractSenderData(messageId);
    const MAILBOX_QUERY = props.getProperty("MAILBOX_QUERY");
    const MAX_THREADS = props.getProperty("MAX_THREADS");
    const BATCH_SIZE = props.getProperty("BATCH_SIZE");

    const Search = new SearchResults(MAILBOX_QUERY, 0, MAX_THREADS);

    const threads = Search.threads;

    const cards = [];

    //    cards.push(StatusCard({threads}));
    //
    for (let i = 0; i < threads.length; i += BATCH_SIZE) {
        // this is a SET of threads
        const threadSet = (new ThreadData(threads.slice(i, i + BATCH_SIZE))).threadSet; // a thread from set of threads
        //   const messagesSet = threadSet.messagesSet; // a message from set of messages in a thread

        //        const threadSetCount = threadSet.length;

        threadSet.forEach((thread) => {
            const card = CardService.newCardBuilder()
                .setHeader(( new CardHeader(thread.firstMessage) ));
            cards.push(card.build());
        });

        //  for (let j = 0; j < threadSetCount; j++) {
        //             const Obj = mergeObjs({index: j}, {threadData: threadSet}, {message: messagesSet[j]});
        //             const msgSection = new CardSection(Obj).setCollapsible(false);
        //             const actionSection = new CardSectionActionCenter(threadSet);
        //             ChainSections(card, [msgSection, actionSection]);
        //         }
    }




    //return cards;
    return createNavigationCard();
}

function testing() {
    //
}

function createNavigationCard() {
    // Create a button set with actions to navigate to 3 different
    // 'children' cards.
    var buttonSet = CardService.newButtonSet();
    for(var i = 1; i <= 3; i++) {
        buttonSet.addButton(createToCardButton(i));
    }

    // Build the card with all the buttons (two rows)
    var card = CardService.newCardBuilder()
        .setHeader(CardService.newCardHeader().setTitle('Navigation'))
        .addSection(CardService.newCardSection()
                    .addWidget(buttonSet)
                    .addWidget(buildPreviousAndRootButtonSet()));
    return card.build();
}
