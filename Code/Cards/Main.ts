function MainCard() {
    const IMG_EXCLAMATION = props.getProperty("IMG_EXCLAMATION");
    const card = CardService.newCardBuilder();

    const header = CardService.newCardHeader()
        .setTitle("<b>TITLE</b>")
        .setSubtitle("subtitle")
        .setImageStyle(CardService.ImageStyle.SQUARE)
        .setImageUrl(IMG_EXCLAMATION);

    card.setHeader(header);

    return card;
}
