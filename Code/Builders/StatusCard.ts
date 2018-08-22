function StatusCard() {
    const dt = new dateArray();
    const IMG_BARS = props.getProperty("IMG_BARS");
    // var sectionOne = CardService.newCardSection()
    //     .setHeader("Weather")
    //     .addWidget(WeatherWidget());

    const sectionTwo = CardService.newCardSection()
        .setHeader("Upcoming events in your primary calendar")
        .addWidget(CalendarWidget());

    return CardService.newCardBuilder()
        .setName("status card")
        .setHeader(CardService.newCardHeader()
                   .setTitle("STATUS CENTER")
                   .setSubtitle(dt.GREETING + ", today is " + dt.WEEKDAY)
                   .setImageUrl(IMG_BARS))
    //        .addSection(sectionOne)
        .addSection(sectionTwo)
        .build();

}
