// -*- mode:typescript -*-
/*
  CONSTANTS
*/
var MAX_THREADS = 10;
var IMG = new ImageSet();
var BRAND_NAME = "Email X-Ray";

function CardHeader(args) {
    var count = args.count - 1;

    if (args.count > 4) {
        count = 4;
    }

    var imgIndex = IMG.indexNormal[count];

    if (args.status) {
        imgIndex = IMG.indexImportant[count];
    }
    // .setTitle("<font color=\"#1257e0\">" + args.subject + "</font>")

    this.header = CardService.newCardHeader()
        .setTitle(getTpl("Templates/headerTitle"))
        .setSubtitle("creator: " + args.sender + "</br>" + args.age)
        .setSubtitle("creator: " + args.sender + "</br>" + args.age)
        .setImageStyle(CardService.ImageStyle.CIRCLE)
        .setImageUrl(imgIndex);

    return this.header;
}

function WidgetBuilder() {
    return this;
}

function CardMetaSection(args) {
    // section header has to be text
    this.section = CardService.newCardSection()
        .setHeader(args.header)
        .addWidget(args.widget);
    //
    return this.section;
}

function CardSection(args) {
    var msg = MessageData(args.message);
    var body = args.message.getPlainBody();
    var sender = msg.sender;

    var index = args.index + 1;
    //
    //
    var date = formatDateService(msg.date);
    var time = formatTimeService(msg.date);

    var ifInbox = args.message.isInInbox() ? "inbox":"";

    var ifPriority = args.message.isInPriorityInbox() ? "<b>IMPORTANT</b>":"";

    var widgetLabels = CardService.newTextParagraph().setText("<p style=\"margin: 0;padding: 0 0 10px 0;background:#ee;\">" + ifPriority + "</p>");

    var html = HtmlService.createTemplateFromFile("Templates/body");
    html.data = [];
//    html.data.ms = "BALLS ON YOUR CHIN";

    //.evaluate().getContent();

    var widgetBody = CardService
        .newTextParagraph()
        .setText(html);

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
        .setContent(HtmlService
                    .createTemplate('<strong>X-Ray for Gmail</strong> addon will always be free. ' +
                                    'However, donations are appreciated. ' +
                                    '<a href="https://flattr.com/@paxperscientiam">flattr</a> <a href="https://cash.me/$paxperscientiam">square</a>')
                    .evaluate()
                    .getContent())
        .setMultiline(true);

    this.section = CardService.newCardSection()
    //.setHeader("Date: "+ date + "</br>Time: " + time + "</br>Message: " + index + "/" + args.count)
        .setHeader("Message: " + index + "/" + args.count)
        .addWidget(widgetLabels)
        .addWidget(widgetPerson)
        .addWidget(widgetTime)
        .addWidget(widgetBody)
        .addWidget(widgetButton)
        .addWidget(widgetDonate);

    return this.section;

}

function SectionChainer(args) {
    var card = args.card;

    card.addSection(args.msg);

    return card;
}

function buildAddOn() {

    var threads = GmailApp.search('in:inbox newer_than:5d', 0, MAX_THREADS);
    var cards = [];

    var Thread = {};
    var Message = {};

    for (var i = 0; i < threads.length && i < MAX_THREADS; i++) {
        Thread = new ThreadData(threads[i]);
        Message = new MessageData(Thread.message[0]);

        var count = Thread.count;
        var age = formatAge(Message.date);

        var msgStatus = Thread.message[0].isInPriorityInbox();
        cardHeader = new CardHeader({
            age: age,
            count: count,
            sender: Message.sender,
            status: msgStatus,
            subject: Message.subject,
        });

        var card = CardService.newCardBuilder()
            .setHeader(cardHeader);

        for (var j = 0; j < count; j++) {
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

//function buildAddOn() {
//
//  // grab no more than 10
//  var threads = GmailApp.search('newer_than:24h', 0, MAX_THREADS);
//
//
//  var cards = [];
//
//  for (var i = 0; i < threads.length && i < MAX_THREADS; i++) {
//
//    if (threads[i].isInInbox() || threads[i].isInPriorityInbox()) {
//
//      var thread = threads[i]
//
//      var header = buildCardHeader(thread);
//
//
//      var message = threads[i].getMessages()[0],
//          sender = message.getFrom(),
//          dateBegan = message.getDate(),
//          starred = message.isStarred();
//
//      subject = threads[i].getFirstMessageSubject();
//
//      var dateRecent = threads[i].getLastMessageDate();
//      var dateBegan = Utilities.formatDate(dateRecent,'GMT',"'Began on 'E, d MMM y");
//
//      var imgStar = CardService.newImage();
//
//      var kvStarredSubject = CardService.newKeyValue()
//      .setIcon(CardService.Icon.STAR)
//      .setContent(subject);
//
//
//
//
//      var card = CardService.newCardBuilder();
//
//
//      cards.push(card
//                 .setHeader(header)
//                 .addSection(
//                   CardService.newCardSection()
//                   .setHeader(dateBegan)
//                   .addWidget(CardService.newTextParagraph().setText(
//                     threads[i].getMessages()[0].getPlainBody()
//                   )).setCollapsible(true)
//                 )
//                 .build());
//    }
//
//  }
//  return cards;
//}
//
//
//function buildCardHeader(thread) {
//  var cardHeader = CardService.newCardHeader();
//
//
//
//
//
//    var message = thread.getMessages()[0];
//  var sender = message.getFrom();
//  var threadCount = thread.getMessageCount();
//
//  var subject = thread.getFirstMessageSubject();
//
//  var link = thread.getPermalink()
//  var senderLink = "<a href=\"" + link + "\">" + sender + "</a>";
//
//  cardHeader
//  .setTitle("<font color=\"#1257e0\">" + subject + "</font>")
//  .setSubtitle("from: " + sender)
//  .setImageStyle(CardService.ImageStyle.SQUARE)
//  .setImageUrl(imgSet[threadCount]);
//
//  return cardHeader
//}

// references
// https://developers.google.com/apps-script/reference/card-service/card-header
//

function testing() {
    Logger.log("FAK")
}
