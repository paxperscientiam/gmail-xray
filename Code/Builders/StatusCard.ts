function StatusCard() {
    var dt = new dateArray();
    var sectionOne = CardService.newCardSection()
        .setHeader("section one")
        .addWidget(WidgetHandler("balls"));

    var calData =  new CalendarHandler();

    var sectionTwo = CardService.newCardSection()
        .setHeader("What's up?")
        .addWidget(WidgetHandler(calData.name));

    return CardService.newCardBuilder()
        .setName("status card")
        .setHeader(CardService.newCardHeader()
                   .setTitle("STATUS CENTER")
                   .setSubtitle(dt.GREETING + ", today is " + dt.WEEKDAY))
        .addSection(sectionOne)
        .addSection(sectionTwo)
        .build();

}
