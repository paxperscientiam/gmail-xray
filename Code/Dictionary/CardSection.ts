function CardSection(args) {
    var index = parseInt(args.index + 1);

    var threadData = args.threadData;

    var messageData = new MessageData(args.message);
    this.section = CardService.newCardSection()
        .setHeader(doGet("Templates/sectionHeader", {
            count: threadData.count,
            index: index,
            msgAge: messageData.age,
        }))
        .addWidget(getWidget("EMAIL_PRIORITY", {threadData:threadData,messageData: messageData}))
        .addWidget(getWidget("EMAIL_BODY", {threadData:threadData,messageData: messageData}))
        .addWidget(getWidget("EMAIL_RECEIPT", {threadData:threadData,messageData: messageData}))
        .addWidget(getWidget("THREAD_LINK", {threadData:threadData,messageData: messageData}));

    return this.section;
}

function CardSectionSecondary() {
    var widgetDonate = CardService.newTextParagraph()
        .setText(doGet("Templates/donationContent", {}));

    this.section = CardService.newCardSection()
        .setHeader("Donations")
        .addWidget(widgetDonate);

    return this.section;
}

function CardSectionActionCenter() {
    const action = CardService.newAction()
        .setFunctionName(["openLinkCallback", "https://www.google.com"]);

    var buttonSet = CardService.newButtonSet()
        .addButton(CardService.newTextButton()
                   .setText("Reply")
                   .setOnClickOpenLinkAction(action))
        .addButton(CardService.newTextButton()
                   .setText("Reply all")
                   .setOnClickOpenLinkAction(action));

    this.section = CardService.newCardSection()
        .setHeader("Action Center")
        .addWidget(buttonSet);
    return this.section;
}
