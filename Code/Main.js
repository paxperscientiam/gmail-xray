//
function CardSection(args) {
    var messageData = new MessageData(args.message);

    var widgetPriority = WidgetHandler(doGet("Templates/paragraph", {md: messageData}));

    var widgetBody = CardService
        .newKeyValue()
        .setContent("body text")
        .setMultiline(true);

    var widgetTime = CardService.newKeyValue()
        .setIcon(CardService.Icon.CLOCK)
        .setContent(messageData.date)
        .setMultiline(true)
        .setBottomLabel(messageData.time);

    var widgetPerson = CardService.newKeyValue()
        .setIcon(CardService.Icon.PERSON)
        .setContent(messageData.sender);

    var widgetButton = CardService
        .newButtonSet()
        .addButton(CardService.newTextButton()
                   .setText("Open Thread" + " (" + args.count + ") ↗️" )
                   .setOpenLink(CardService.newOpenLink()
                                .setUrl(args.link)
                                .setOpenAs(CardService.OpenAs.FULL_SIZE)
                                .setOnClose(CardService.OnClose.NOTHING)));

    var widgetDonate = CardService
        .newKeyValue()
        .setContent(doGet("Templates/donationContent", {}))
        .setMultiline(true);

    this.section = CardService.newCardSection()
        .setHeader(doGet("Templates/sectionHeader", {
            count: args.count,
            index: args.index + 1,
            msgAge: messageData.age,
        }))
        .addWidget(widgetPriority)
        .addWidget(widgetPerson)
        .addWidget(widgetTime)
        .addWidget(widgetBody)
        .addWidget(widgetButton)
        .addWidget(widgetDonate);

    return this.section;

}

function buildAddOn() {
    var MAILBOX_QUERY = props.getProperty("MAILBOX_QUERY");
    var MAX_THREADS = props.getProperty("MAX_THREADS");

    var threads = GmailApp.search(MAILBOX_QUERY, 0, MAX_THREADS);
    var cards = [];

    var threadData = {};
    var messageData = {};

    for (var i = 0; i < threads.length && i < MAX_THREADS; i++) {
        threadData = new ThreadData(threads[i]);
        var message = threadData.message[0];
        messageData = new MessageData(message);

        var count = threadData.count;

        var card = CardService.newCardBuilder()
            .setHeader(( new CardHeader(threadData) ));

        for (var j = 0; j < count; j++) {
            //
            //
            var msg = new CardSection({
                count: count,
                index: j,
                link: threadData.link,
                message: threadData.message[j],
            }).setCollapsible(false);

            card = SectionChainer({card: card, msg: msg});
        }

        cards.push(card
                   .setName("Card name")
                   .build());

    }
    return cards;
}

function testing() {
    Logger.log(props.getProperties());

}
