function CardHeader(message) {
    const messageData = new MessageData(message);
    const imgUrl;
    //
    const IMG_EXCLAMATION = props.getProperty("IMG_EXCLAMATION");
    const IMG_ENVELOPE = props.getProperty("IMG_ENVELOPE");
    const IMG_ENVELOPE_OPEN = props.getProperty("IMG_ENVELOPE_OPEN");
    const IMG_STAR = props.getProperty("IMG_STAR");
    const IMG_STAR_EXCLAMATION = props.getProperty("IMG_STAR_EXCLAMATION");

    if (messageData.starred && messageData.isPriority) {
        imgUrl = IMG_STAR_EXCLAMATION;
    } else if (messageData.starred) {
        imgUrl = IMG_STAR;
    } else if (messageData.isPriority) {
        imgUrl = IMG_EXCLAMATION;
    } else if (messageData.unread) {
        imgUrl = IMG_ENVELOPE;
    } else {
        imgUrl = IMG_ENVELOPE_OPEN;
    }

    this.header = CardService.newCardHeader()
        .setTitle(doGet("Templates/headerTitle", messageData))
        .setSubtitle(doGet("Templates/headerSubtitle", messageData))
        .setImageStyle(CardService.ImageStyle.SQUARE)
        .setImageUrl(imgUrl);

    card.setHeader(header);

    return card;
}
