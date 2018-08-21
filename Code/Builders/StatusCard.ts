function StatusCard() {
    var dt = new dateArray();
    // var sectionOne = CardService.newCardSection()
    //     .setHeader("Weather")
    //     .addWidget(WeatherWidget());

    var sectionTwo = CardService.newCardSection()
        .setHeader("Upcoming events in your primary calendar")
        .addWidget(CalendarWidget());

    return CardService.newCardBuilder()
        .setName("status card")
        .setHeader(CardService.newCardHeader()
                   .setTitle("STATUS CENTER")
                   .setSubtitle(dt.GREETING + ", today is " + dt.WEEKDAY))
//        .addSection(sectionOne)
        .addSection(sectionTwo)
        .build();

}
