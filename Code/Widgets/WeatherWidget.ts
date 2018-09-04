function WeatherWidget(period = 0) {
    Logger.log("Running WeatherTodayWidget ... ");
    const SUNNY = props.getProperty("WX_SUNNY");
    const CLOUDY = props.getProperty("WX_CLOUDY");
    const RAINY = props.getProperty("WX_RAINY");
    const MOSTLYCLOUDY = props.getProperty("WX_MOSTLYCLOUD");
    const MOSTLYSUNNY = props.getProperty("WX_MOSTLYSUNNY");
    const QUESTION = props.getProperty("IMG_QUESTIONMARK");

    const icon;

    const params = {
        muteHttpExceptions: true,
    };

    try {
        const Location = new LocationService();
    } catch (e) {
        Logger.log(e);
        return CardService.newTextParagraph().setText("IP service not working :(");
    }

    try {
        const Weather = new WeatherService(Location.coord, period);

        const message  = `${Weather.temp}°${Weather.unit}, ${Weather.condition}.`;
        const name = Weather.name;

        if (/sunny/i.test(Weather.condition) ) {
            icon = SUNNY;
        } else if (/cloudy/i.test(Weather.condition) ) {
            icon = CLOUDY;
        } else if (/rain/i.test(Weather.condition) ) {
            icon = RAINY;
        } else {
            icon = QUESTION;
        }

        // return CardService.newTextParagraph().setText(doGet("Templates/weatherToday", {message, name}));
        return CardService.newKeyValue()
            .setIconUrl(WX_SUNNY)
            .setContent(doGet("Templates/weatherToday", {message, name}));
    } catch (e) {
        Logger.log(e);
        return CardService.newTextParagraph().setText("Wx service not working :(");
    }
}

function WeatherTomorrowWidget() {
    Logger.log("Running WeatherTomorrowWidget ... ");
