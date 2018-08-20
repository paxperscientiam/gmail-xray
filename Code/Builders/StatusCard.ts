function StatusCard() {
    var dt = new dateArray();
    var sectionOne = CardService.newCardSection()
        .setHeader("Weather")
        .addWidget(WidgetHandler("balls"));

    var calData =  new CalendarHandler();

    var sectionTwo = CardService.newCardSection()
        .setHeader("Upcoming events")
        .addWidget(WidgetHandler(calData.name))
        .addWidget(CardService.newTextParagraph()
                   .setText(doGet("Templates/wxSection", calData)));
    ;

    return CardService.newCardBuilder()
        .setName("status card")
        .setHeader(CardService.newCardHeader()
                   .setTitle("STATUS CENTER")
                   .setSubtitle(dt.GREETING + ", today is " + dt.WEEKDAY))
        .addSection(sectionOne)
        .addSection(sectionTwo)
        .build();

}
