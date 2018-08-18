//
function CardSection(args) {
    var messageData = new MessageData(args.message);

    var widgetPriority = WidgetHandler(doGet("Templates/paragraph", {md: messageData}));

    var widgetBody = CardService
        .newKeyValue()
        .setContent(messageData.body)
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
        .addWidget(widgetButton);

    return this.section;
}

function CardSectionSecondary() {
    var widgetDonate = CardService.newTextParagraph()
        .setText(doGet("Templates/donationContent", {}));

    this.section = CardService.newCardSection()
        .setHeader("Donations")
        .addWidget(widgetDonate);
}

function buildAddOn() {
    var MAILBOX_QUERY = props.getProperty("MAILBOX_QUERY");
    var MAX_THREADS = props.getProperty("MAX_THREADS");

    var threads = GmailApp.search(MAILBOX_QUERY, 0, MAX_THREADS);
    var cards = [];

    var threadData = {};

    for (var i = 0; i < threads.length && i < MAX_THREADS; i++) {
        threadData = new ThreadData(threads[i]);
        var message = threadData.message[0];

        var count = threadData.count;

        var card = CardService.newCardBuilder()
            .setHeader(( new CardHeader(threadData) ));

        for (var j = 0; j < count; j++) {
            //
            // threaData -> count, link, message
            var Obj = mergeObjs({index: j}, threadData);
            var msg = new CardSection(Obj).setCollapsible(false);
            var foot = new CardSectionSecondary().setCollapsible(false);

            card = SectionChainer(card, {msg: msg});
            card = SectionChainer(card, {msg: foot});
        }

        cards.push(card
                   .setName("Card name")
                   .build());

    }
    return cards;
}

function testing() {
    // Logger.log(props.getProperties());
    var oo = mergeObjs({a:4, b: 5}, {c:345, d:2341});

}
