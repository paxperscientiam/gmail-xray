function CardHeader(message) {
    const messageData = new MessageData(message);
    var imgUrl;

    if (message.starred === true) {
        imgUrl = "https://raw.githubusercontent.com/paxperscientiam/gmail-xray/master/Img/material/star/ic_star_rate_black_18dp_1x.png";
    } else {
        imgUrl = "https://raw.githubusercontent.com/paxperscientiam/gmail-xray/master/Img/icons8-secured-letter-64.png";
    }

    this.header = CardService.newCardHeader()
        .setTitle(doGet("Templates/headerTitle", messageData))
        .setSubtitle(doGet("Templates/headerSubtitle", messageData))
        .setImageStyle(CardService.ImageStyle.CIRCLE)
        .setImageUrl(imgUrl);

    return this.header;
}
