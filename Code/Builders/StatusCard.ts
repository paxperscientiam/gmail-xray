function StatusCard() {
    var today =


    return CardService.newCardBuilder()
        .setName("Card name")
        .setHeader(CardService.newCardHeader().setTitle("Card title"))
        .addSection(cardSection.setCollapsible(false))
        .build();
}
