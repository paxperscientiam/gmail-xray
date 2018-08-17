// -*- mode:typescript -*-
/*
  CONSTANTS
*/
var IMG = new ImageSet();

function CardSection(args) {
    var index = args.index + 1;

    var messageData = new MessageData(args.message);

    var sender = messageData.sender;

    var date = messageData.date;

    var time = messageData.time;

    var msgAge = messageData.age;

    var widgetPriority = WidgetHandler(doGet("Templates/paragraph", {md: messageData}));

    var widgetBody = CardService
        .newKeyValue()
        .setContent("body text")
        .setMultiline(true);

    var widgetTime = CardService.newKeyValue()
        .setIcon(CardService.Icon.CLOCK)
        .setContent(date)
        .setMultiline(true)
        .setBottomLabel(time);

    var widgetPerson = CardService.newKeyValue()
        .setIcon(CardService.Icon.PERSON)
        .setContent(sender);

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
    //.setHeader("Date: "+ date + "</br>Time: " + time + "</br>Message: " + index + "/" + args.count)
        .setHeader(doGet("Templates/sectionHeader", { index: index, count: args.count, msgAge: msgAge }))
        .addWidget(widgetPriority)
        .addWidget(widgetPerson)
        .addWidget(widgetTime)
        .addWidget(widgetBody)
        .addWidget(widgetButton)
        .addWidget(widgetDonate);

    return this.section;

}

function buildAddOn() {

    var threads = GmailApp.search(MAILBOX_QUERY, 0, MAX_THREADS);
    var cards = [];

    var threadData = {};
    var messageData = {};

    for (var i = 0; i < threads.length && i < MAX_THREADS; i++) {
        var message = threadData.message[0];
        threadData = new ThreadData(threads[i]);
        messageData = new MessageData(message);

        var count = threadData.count;
        var msgAge = messageData.date;

        var msgStatus = message.isPriority;
        cardHeader = new CardHeader(threadData);

        // var textParagraph = CardService.newTextParagraph().setText("ROF");
        // var cardSection = CardService.newCardSection()
        //     .setHeader("Soothing actions")
        //     .addWidget(textParagraph);

        var card = CardService.newCardBuilder()
            .setHeader(cardHeader)
           // .addSection(cardSection);

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
    Logger.log(scriptProperties.getProperties());

}
