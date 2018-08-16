// -*- mode:typescript -*-
/*
  CONSTANTS
*/
const MAX_THREADS = 10;
const IMG = new ImageSet();
const BRAND_NAME = "Email X-Ray";
const QUERY = "in:inbox newer_than:5d";

function CardSection(args) {
    var msg = MessageData(args.message);
    var body = args.message.getPlainBody();
    var sender = msg.sender;

    var index = args.index + 1;
    //
    // var output = HtmlService.createHtmlOutput(args.message.getBody());
    // table#bodyTable
    // var tmp = output.asTemplate();
    // Logger.log(tmp.getRawContent());
    var html = HtmlService.createTemplateFromFile("Templates/body");
    var barf = {};
    barf.shit = "HAHAHAHHA";
    html.data = barf;
    Logger.log(html.evaluate().getContent());
    //
    var date = formatDateService(msg.date);
    var time = formatTimeService(msg.date);

    var msgAge = formatAge(msg.date);

    var ifInbox = args.message.isInInbox() ? "inbox" : "&nbsp;";

    var ifPriority = args.message.isInPriorityInbox() ? "<b>IMPORTANT</b>" : "&nbsp;";

    var widgetLabels = WidgetHandler("<p style=\"margin: 0;padding: 0 0 10px 0;background:#ee;\">" + ifPriority + "</p>");

    var widgetBody = CardService
        .newKeyValue()
        .setContent("BALLS")
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
                   .setText("Open Thread" + " (" + args.count + ") ⬀" )
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
        .addWidget(widgetLabels)
        .addWidget(widgetPerson)
        .addWidget(widgetTime)
        .addWidget(widgetBody)
        .addWidget(widgetButton)
        .addWidget(widgetDonate);

    return this.section;

}

function buildAddOn() {

    var threads = GmailApp.search(QUERY, 0, MAX_THREADS);
    var cards = [];

    var Thread = {};
    var Message = {};

    for (var i = 0; i < threads.length && i < MAX_THREADS; i++) {
        Thread = new ThreadData(threads[i]);
        Message = new MessageData(Thread.message[0]);

        var count = Thread.count;
        var msgAge = formatAge(Message.date);

        var msgStatus = Thread.message[0].isInPriorityInbox();
        cardHeader = new CardHeader({
            age: msgAge,
            count: count,
            sender: Message.sender,
            status: msgStatus,
            subject: Message.subject,
        });

        var card = CardService.newCardBuilder()
            .setHeader(cardHeader);

        for (var j = 0; j < count; j++) {
            //
            //
            var msg = new CardSection({
                count: count,
                index: j,
                link: Thread.link,
                message: Thread.message[j],
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
    //

}
