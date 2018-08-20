function StatusCard() {
    var dt = new dateArray();
    var sectionOne = CardService.newCardSection()
        .setHeader("section one")
        .addWidget(WidgetHandler("balls"));

    return CardService.newCardBuilder()
        .setName("status card")
        .setHeader(new CardHeader({}))
        .addSection(sectionOne)
        .build();
}
