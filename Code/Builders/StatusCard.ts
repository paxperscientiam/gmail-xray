function StatusCard() {
    var dt = new dateArray();
    var sectionOne = CardService.newCardSection()
        .setHeader("section one");

    return CardService.newCardBuilder()
        .setName("status card")
        .setHeader(CardService
                   .newCardHeader()
                   .setTitle("Today is " + dt.WEEKDAY))
        .addSection(sectionOne)
        .build();
}
