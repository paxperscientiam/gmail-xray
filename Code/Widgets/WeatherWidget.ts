function WeatherWidget() {
    Logger.log("Running WeatherWidget ... ");
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
        const Weather = new WeatherService(Location.coord);

        const messageWx  = `It's ${Weather.temp}°${Weather.unit} in ${Location.city}, ${Location.region}. This is a ${Weather.condition}.`;

        return CardService.newTextParagraph().setText(messageWx);
    } catch (e) {
        Logger.log(e);
        return CardService.newTextParagraph().setText("Wx service not working :(");
    }

}
