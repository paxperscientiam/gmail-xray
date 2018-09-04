function WeatherWidget(period = 0) {
    Logger.log("Running WeatherTodayWidget ... ");
    const WX_SUNNY = props.getProperty("WX_SUNNY");


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
