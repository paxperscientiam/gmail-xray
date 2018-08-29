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
    Logger.log("Composing new draft." + e.parameters.threadId);

    const thread = GmailApp.getThreadById(e.threadId);
    const draft = thread.createDraftReply("");
    return CardService.newComposeActionResponseBuilder()
        .setGmailDraft(draft)
        .build();
}

function composeEmailNewCallback(e) {
    return CardService.newComposeActionResponseBuilder()
        .setGmailDraft(GmailApp.createDraft("", "", ""))
        .build();
}

function CardSectionActionCenter(threadData) {
    const IMG_COMPOSE_NEW = props.getProperty("IMG_COMPOSE_NEW");
    const IMG_REPLY_THIS = props.getProperty("IMG_REPLY_THIS");
    const IMG_REPLY_THAT = props.getProperty("IMG_REPLY_THAT");

    const actionComposeNew = CardService.newAction().setFunctionName("composeEmailNewCallback");
    const actionReplyToMain = CardService.newAction().setFunctionName("composeEmailCallback");
    const actionReplyToThis = CardService.newAction().setFunctionName("composeEmailCallback")
        .setParameters({threadId: threadData.id});

    //     var actionCompose = CardService.newAction()
    //         .setFunctionName("StandAloneDraftHandler");

    const buttonSet = CardService.newButtonSet()
        .addButton(CardService.newImageButton()
                   .setAltText("Reply that")
                   .setIconUrl(IMG_REPLY_THAT)
                   .setComposeAction(actionReplyToMain, CardService.ComposedEmailType.REPLY_AS_DRAFT))
        .addButton(CardService.newImageButton()
                   .setAltText("Reply this")
                   .setIconUrl(IMG_REPLY_THIS)
                   .setComposeAction(actionReplyToThis, CardService.ComposedEmailType.REPLY_AS_DRAFT))
        .addButton(CardService.newImageButton()
                   .setAltText("Compose new email.")
                   .setIcon(CardService.Icon.EMAIL)
                   .setComposeAction(actionComposeNew, CardService.ComposedEmailType.STANDALONE_DRAFT));

    this.section = CardService.newCardSection()
        .setHeader("Action Center")
        .addWidget(buttonSet);
    return this.section;
}
