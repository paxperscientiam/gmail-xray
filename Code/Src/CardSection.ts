function CardSection(args) {
    var messageData = new MessageData(args.message);
    //
    this.section = CardService.newCardSection()
        .setHeader(doGet("Tem3Mplates/sectionHeader", {
            count: args.count,
            index: args.index + 1,
            msgAge: messageData.age,
        }))
        .addWidget(getWidget("EMAIL_PRIORITY"))
        .addWidget(getWidget("EMAIL_BODY"))
        .addWidget(getWidget("EMAIL_RECEIPT"))
        .addWidget(getWidget("THREAD_LINK"));

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

    const buttonReply = CardService.newTextButton()
        .setText("Reply")
        .setOnClickOpenLinkAction(action);

    var buttonReplyAll = CardService.newTextButton()
        .setText("Reply all")
        .setOnClickOpenLinkAction(action);

    var buttonSet = CardService.newButtonSet()
        .addButton(buttonReply)
        .addButton(buttonReplyAll);

    this.section = CardService.newCardSection()
        .setHeader("Action Center")
        .addWidget(buttonSet);
    return this.section;
}
