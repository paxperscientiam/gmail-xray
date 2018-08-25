function CardSection(args) {
    const index = parseInt(args.index + 1, 10);

    const threadData = args.threadData;

    const messageData = new MessageData(args.message);
    Logger.log(messageData.isPriority);
    this.section = CardService.newCardSection()
        .setHeader(doGet("Templates/sectionHeader", {
            count: threadData.count,
            index,
            msgAge: messageData.age,
        }))
        .addWidget(getWidget("EMAIL_RECEIPT", {threadData, messageData}))
        .addWidget(getWidget("EMAIL_BODY", {threadData, messageData}))
        .addWidget(getWidget("THREAD_LINK", {threadData, messageData}));

    return this.section;
}

function CardSectionSecondary() {
    const widgetDonate = CardService.newTextParagraph()
        .setText(doGet("Templates/donationContent", {}));

    this.section = CardService.newCardSection()
        .setHeader("Donations")
        .addWidget(widgetDonate);

    return this.section;
}

function composeEmailCallback(e, args) {
    Logger.log(args.id);
    var thread = GmailApp.getThreadById(e.threadId);
    var draft = thread.createDraftReply('This is a reply');
    return CardService.newComposeActionResponseBuilder()
        .setGmailDraft(draft)
        .build();
}

function composeEmailNewCallback(e) {
    GmailApp.createDraft("recipient@yahoo.com", "subject", "body");
  //   return CardService.newComposeActionResponseBuilder()
//         .setGmailDraft(GmailApp.createDraft("recipient", "subject", "body"))
//         .build();
}

function CardSectionActionCenter(threadData) {

    const actionComposeNew = CardService.newAction().setFunctionName("composeEmailNewCallback");
    const actionReplyToMain = CardService.newAction().setFunctionName("composeEmailCallback");
    const actionReplyToSide = CardService.newAction().setFunctionName(["composeEmailCallback", threadData.id] );

    //     var actionCompose = CardService.newAction()
    //         .setFunctionName("StandAloneDraftHandler");

    const buttonSet = CardService.newButtonSet()
        .addButton(CardService.newTextButton()
                   .setText("Reply that")
                   .setComposeAction(actionReplyToMain, CardService.ComposedEmailType.REPLY_AS_DRAFT))
        .addButton(CardService.newTextButton()
                   .setText("Reply this")
                   .setComposeAction(actionReplyToMain, CardService.ComposedEmailType.REPLY_AS_DRAFT))
        .addButton(CardService.newTextButton()
                   .setText("New")
                   .setComposeAction(actionComposeNew, CardService.ComposedEmailType.STANDALONE_DRAFT));

    this.section = CardService.newCardSection()
        .setHeader("Action Center")
        .addWidget(buttonSet);
    return this.section;
}
