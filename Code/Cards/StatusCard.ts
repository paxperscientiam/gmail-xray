function StatusCard() {
    const dt = new dateArray();
    const IMG_BARS = props.getProperty("IMG_BARS");
    // var sectionOne = CardService.newCardSection()
    //     .setHeader("Weather")
    //     .addWidget(WeatherWidget());


    //        .addWidget(CalendarWidget());

    const card = CardService.newCardBuilder()
        .setName("status card")
        .setHeader(CardService.newCardHeader()
                   .setTitle("STATUS CENTER")
                   .setSubtitle(dt.GREETING + ", today is " + dt.WEEKDAY)
                   .setImageUrl(IMG_BARS));

    const sectionTwo = CardService.newCardSection()
        .setHeader("Upcoming events in your primary calendar")
        .addWidget(getWidget("INPUT_MAIL_SEARCH"))
        .addWidget(CardService.newTextButton()
                   .setText('Search')
                   .setOnClickAction(MailSearchAction(card)));

    return card
        .addSection(sectionTwo)
        .build();

}
