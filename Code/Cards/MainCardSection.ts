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

function composeEmailCallback(e) {
    var thread = GmailApp.getThreadById(e.threadId);
    var draft = thread.createDraftReply('This is a reply');
    return CardService.newComposeActionResponseBuilder()
        .setGmailDraft(draft)
        .build();
}

function CardSectionActionCenter() {

    const actionReplyToMain = CardService.newAction().setFunctionName("composeEmailCallback");

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
                   .setComposeAction(actionReplyToMain, CardService.ComposedEmailType.STANDALONE_DRAFT));

    this.section = CardService.newCardSection()
        .setHeader("Action Center")
        .addWidget(buttonSet);
    return this.section;
}
