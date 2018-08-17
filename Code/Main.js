// -*- mode:typescript -*-
/*
  CONSTANTS
*/
var MAX_THREADS = 10;
var IMG = new ImageSet();
var BRAND_NAME = "Email X-Ray";
var MAILBOX_QUERY = "in:inbox newer_than:5d";

function buildAddOn() {

    var threads = GmailApp.search(MAILBOX_QUERY, 0, MAX_THREADS);
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

        var textParagraph = CardService.newTextParagraph().setText("ROF");
        var cardSection = CardService.newCardSection()
            .setHeader("Soothing actions")
            .addWidget(textParagraph);

        var card = CardService.newCardBuilder()
            .setHeader(cardHeader)
            .addSection(cardSection);

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
