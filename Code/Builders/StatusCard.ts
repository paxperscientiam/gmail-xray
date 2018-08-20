function StatusCard() {
    var dt = new dateArray();
    var sectionOne = CardService.newCardSection()
        .setHeader("section one")
        .addWidget(WidgetHandler("balls"));

    return CardService.newCardBuilder()
        .setName("status card")
        .setHeader(CardService.newCardHeader()
                   .setTitle("Status center")
                   .setSubtitle(dt.GREETING + ", today is " + dt.WEEKDAY))
        .addSection(sectionOne)
        .build();
}
