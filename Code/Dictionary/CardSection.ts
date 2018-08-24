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
        .addWidget(getWidget("EMAIL_STARRED", {threadData, messageData}))
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

function CardSectionActionCenter() {
    const action = CardService.newAction()
        .setFunctionName(["openLinkCallback", "https://www.google.com"]);

    var composeAction = CardService.newAction()
      .setFunctionName('StandAloneDraftHandler');


    const buttonSet = CardService.newButtonSet()
        .addButton(CardService.newTextButton()
                   .setText("Reply")
                   .setComposeAction(composeAction, CardService.ComposedEmailType.STANDALONE_DRAFT);


        .addButton(CardService.newTextButton()
                   .setText("Reply all")
                   .setOnClickOpenLinkAction(action));

    this.section = CardService.newCardSection()
        .setHeader("Action Center")
        .addWidget(buttonSet);
    return this.section;
}
