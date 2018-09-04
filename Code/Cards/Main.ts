function MainCard() {
    const IMG_EXCLAMATION = props.getProperty("IMG_EXCLAMATION");
    const card = CardService.newCardBuilder();

    const header = CardService.newCardHeader()
        .setTitle(doGet("Templates/headerTitle"))
        .setSubtitle(doGet("Templates/headerSubtitle", messageData))
        .setImageStyle(CardService.ImageStyle.SQUARE)
        .setImageUrl(IMG_EXCLAMATION);

    card.setHeader(header);

    return card;
}
