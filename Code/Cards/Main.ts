function MainCard() {
    const dt = new dateArray(); //
    const IMG_BARS = props.getProperty("IMG_BARS");
    //
    try {
        const Location = new LocationService();
        const city = Location.city;
        const region = Location.region;

        const msgWx = `Weather in ${city}, ${region}`;
    } catch (e) {
        const msgWx = "Local weather";
    }

    const card = CardService.newCardBuilder()
        .setHeader(CardService.newCardHeader()
                   .setTitle("STATUS CENTER")
                   .setSubtitle(dt.GREETING + ", today is " + dt.WEEKDAY)
                   .setImageUrl(IMG_BARS));

    const sectionWx = CardService.newCardSection()
        .setHeader(msgWx)
        .addWidget(WeatherWidget(0))
        .addWidget(WeatherWidget(1));

    return card
        .addSection(sectionWx);
}
