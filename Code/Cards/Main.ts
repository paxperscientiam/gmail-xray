function MainCard() {
    const dt = new dateArray(); //
    const IMG_BARS = props.getProperty("IMG_BARS");
    //
    const card = CardService.newCardBuilder()
        .setHeader(CardService.newCardHeader()
                   .setTitle("STATUS CENTER")
                   .setSubtitle(dt.GREETING + ", today is " + dt.WEEKDAY)
                   .setImageUrl(IMG_BARS));

    const sectionWx = CardService.newCardSection()
        .setHeader("Local weather")
        .addWidget(WeatherWidget(0))
        .addWidget(WeatherWidget(1));

    return card
        .addSection(sectionWx);
}
