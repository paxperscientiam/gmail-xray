// -*- mode:typescript -*-

function CardHeader(args) {
    var count = args.count - 1;

    if (args.count > 4) {
        count = 4;
    }

    var imgIndex = IMG.indexNormal[count];

    if (args.status) {
        imgIndex = IMG.indexImportant[count];
    }

    this.header = CardService.newCardHeader()
        .setTitle(doGet("Templates/headerTitle", {subject: args.subject}))
        .setSubtitle(doGet("Templates/headerSubtitle", {sender: args.sender}))
        .setImageStyle(CardService.ImageStyle.CIRCLE)
        .setImageUrl(imgIndex);

    return this.header;
}
