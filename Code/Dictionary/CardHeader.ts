function CardHeader(message) {
    const messageData = new MessageData(message);

    this.header = CardService.newCardHeader()
        .setTitle(doGet("Templates/headerTitle", messageData))
        .setSubtitle(doGet("Templates/headerSubtitle", messageData))
        .setImageStyle(CardService.ImageStyle.CIRCLE)
        .setImageUrl("https://raw.githubusercontent.com/paxperscientiam/gmail-xray/master/Img/material/star/ic_star_rate_black_18dp_1x.png");

    return this.header;
}
