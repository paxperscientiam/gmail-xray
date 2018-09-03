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

    const card = CardService.newCardBuilder()
        .setHeader(CardService.newCardHeader()
                   .setTitle("Card header title")
                   .setSubtitle("Card header subtitle"));



    for (let i = 0; i < threads.length; i += BATCH_SIZE) {
        const threadSet = (new ThreadData(threads.slice(i, i + BATCH_SIZE))).threadSet;

        threadSet.forEach((thread) => {
            const msg = new MessageData((new ThreadData(thread)).firstMessage);
            const textParagraph = CardService.newTextParagraph().setText(msg.subject);

            const cardSection = CardService.newCardSection()
                .setHeader("header")
                .addWidget(EmailSenderWidget(sender))
                .addWidget(textParagraph);
            //
            card.addSection(cardSection);
        });
    }

    return card.build();

    // const threadSet = (new ThreadData(threads.slice(0, 1))).threadSet; // a thread from set of threads

    // const thread = threadSet[0];
    // const message = new MessageData(thread.firstMessage);
    // const sender = message.sender;

    // var textParagraph = CardService.newTextParagraph().setText("kgkhkj");
    // // Build text paragraph ...

    // var cardSection = CardService.newCardSection()
    //     .setHeader("header")
    //     .addWidget(EmailSenderWidget(sender))
    //     .addWidget(textParagraph);

    // const card = CardService.newCardBuilder()
    //     .setHeader(( new CardHeader(thread.firstMessage) ))
    //     .addSection(cardSection);

    // return card.build();

    //    cards.push(StatusCard({threads}));
    //
    // for (let i = 0; i < threads.length; i += BATCH_SIZE) {
    //     // this is a SET of threads
    //     const threadSet = (new ThreadData(threads.slice(i, i + BATCH_SIZE))).threadSet; // a thread from set of threads
    //     //   const messagesSet = threadSet.messagesSet; // a message from set of messages in a thread

    //     //        const threadSetCount = threadSet.length;

    //     // threadSet.forEach((thread) => {
    //     //     const card = CardService.newCardBuilder()
    //     //         .setHeader(( new CardHeader(thread.firstMessage) ));
    //     //     cards.push(card.build());
    //     // });

    //     //  for (let j = 0; j < threadSetCount; j++) {
    //     //             const Obj = mergeObjs({index: j}, {threadData: threadSet}, {message: messagesSet[j]});
    //     //             const msgSection = new CardSection(Obj).setCollapsible(false);
    //     //             const actionSection = new CardSectionActionCenter(threadSet);
    //     //             ChainSections(card, [msgSection, actionSection]);
    //     //         }
    // }




    // const card = CardService.newCardBuilder()
    //     .setHeader(( new CardHeader(threadSet[0].firstMessage) ))
    //     .addSection(( new CardMetaSection({header:"ballz"})));

    // return card;


}

function testing() {
    //
}

// function createNavigationCard() {
//     // Create a button set with actions to navigate to 3 different
//     // 'children' cards.
//     var buttonSet = CardService.newButtonSet();
//     for(var i = 1; i <= 3; i++) {
//         buttonSet.addButton(createToCardButton(i));
//     }

//     // Build the card with all the buttons (two rows)
//     var card = CardService.newCardBuilder()
//         .setHeader(CardService.newCardHeader().setTitle('Navigation'))
//         .addSection(CardService.newCardSection()
//                     .addWidget(buttonSet)
//                     .addWidget(buildPreviousAndRootButtonSet()))
//         .addSection(CardService.newCardSection()
//                     .addWidget(buttonSet)
//                     .addWidget(buildPreviousAndRootButtonSet()));

//     return card.build();
// }


// function createToCardButton(id) {
//     var action = CardService.newAction()
//         .setFunctionName('gotoChildCard')
//         .setParameters({'id': id.toString()});
//     var button = CardService.newTextButton()
//         .setText('Card ' + id)
//         .setOnClickAction(action);
//     return button;
// }

// /**
//  *  Create a ButtonSet with two buttons: one that backtracks to the
//  *  last card and another that returns to the original (root) card.
//  *  @return {ButtonSet}
//  */
// function buildPreviousAndRootButtonSet() {
//     var previousButton = CardService.newTextButton()
//         .setText('Back')
//         .setOnClickAction(CardService.newAction()
//                           .setFunctionName('gotoPreviousCard'));
//     var toRootButton = CardService.newTextButton()
//         .setText('To Root')
//         .setOnClickAction(CardService.newAction()
//                           .setFunctionName('gotoRootCard'));

//     // Return a new ButtonSet containing these two buttons.
//     return CardService.newButtonSet()
//         .addButton(previousButton)
//         .addButton(toRootButton);
// }

// /**
//  *  Create a child card, with buttons leading to each of the other
//  *  child cards, and then navigate to it.
//  *  @param {Object} e object containing the id of the card to build.
//  *  @return {ActionResponse}
//  */
// function gotoChildCard(e) {
//     var id = parseInt(e.parameters.id);  // Current card ID
//     var id2 = (id==3) ? 1 : id + 1;      // 2nd card ID
//     var id3 = (id==1) ? 3 : id - 1;      // 3rd card ID
//     var title = 'CARD ' + id;

//     // Create buttons that go to the other two child cards.
//     var buttonSet = CardService.newButtonSet()
//         .addButton(createToCardButton(id2))
//         .addButton(createToCardButton(id3));

//     // Build the child card.
//     var card = CardService.newCardBuilder()
//         .setHeader(CardService.newCardHeader().setTitle(title))
//         .addSection(CardService.newCardSection()
//                     .addWidget(buttonSet)
//                     .addWidget(buildPreviousAndRootButtonSet()))
//         .build();

//     // Create a Navigation object to push the card onto the stack.
//     // Return a built ActionResponse that uses the navigation object.
//     var nav = CardService.newNavigation().pushCard(card);
//     return CardService.newActionResponseBuilder()
//         .setNavigation(nav)
//         .build();
// }

// /**
//  *  Pop a card from the stack.
//  *  @return {ActionResponse}
//  */
// function gotoPreviousCard() {
//     var nav = CardService.newNavigation().popCard();
//     return CardService.newActionResponseBuilder()
//         .setNavigation(nav)
//         .build();
// }

// /**
//  *  Return to the initial add-on card.
//  *  @return {ActionResponse}
//  */
// function gotoRootCard() {
//     var nav = CardService.newNavigation().popToRoot();
//     return CardService.newActionResponseBuilder()
//         .setNavigation(nav)
//         .build();
// }
