function MainCard() {
    const IMG_BARS = props.getProperty("IMG_BARS");
    const card = CardService.newCardBuilder();

    const header = CardService.newCardHeader()
        .setTitle("<b>TITLE</b>")
        .setSubtitle("subtitle")
        .setImageStyle(CardService.ImageStyle.SQUARE)
        .setImageUrl(IMG_BARS);

    card.setHeader(header);

    return card;
}
