function CardHeader(message) {
    const messageData = new MessageData(message);
    const imgUrl;
    //
    const IMG_URL = props.getProperty("IMG_URL");
    const IMG_EXCLAMATION = IMG_URL.EXCLAMATION;
    const IMG_ENVELOPE = IMG_URL.ENVELOPE;
    const IMG_ENVELOPE_OPEN = IMG_URL.ENVELOPE_OPEN;
    const IMG_STAR = IMG_URL.STAR;


    if (messageData.starred) {
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
        .setImageStyle(CardService.ImageStyle.CIRCLE)
        .setImageUrl(imgUrl);

    return this.header;
}
