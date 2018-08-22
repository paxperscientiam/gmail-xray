function CardHeader(message) {
    const messageData = new MessageData(message);
    var imgUrl;

    if (messageData.starred) {
        imgUrl = "https://raw.githubusercontent.com/paxperscientiam/gmail-xray/master/Img/material/star/ic_star_rate_black_18dp_1x.png";
    } else if (messageData.unread) {
        imgUrl = "https://raw.githubusercontent.com/paxperscientiam/gmail-xray/master/Img/encharm/Font-Awesome-SVG-PNG/master/black/png/64/envelope-o.png";
    } else {
        imgUrl = "https://raw.githubusercontent.com/paxperscientiam/gmail-xray/master/Img/encharm/Font-Awesome-SVG-PNG/master/black/png/64/envelope-open-o.png";
    }

    this.header = CardService.newCardHeader()
        .setTitle(doGet("Templates/headerTitle", messageData))
        .setSubtitle(doGet("Templates/headerSubtitle", messageData))
        .setImageStyle(CardService.ImageStyle.CIRCLE)
        .setImageUrl(imgUrl);

    return this.header;
}
