function WeatherWidget() {
    Logger.log("Running WeatherWidget ... ");
    const params = {
        muteHttpExceptions: true,
    };

    try {
     //   const Location = new Location();
        Logger.log(Location);
    } catch (e) {
        Logger.log(e);
        return CardService.newTextParagraph().setText("IP service not working :(");
    }

    const urlWx1 = "https://api.weather.gov/points/" + coord;
    const paramsWx = {
        escaping: false,
        headers: {
            "Accept": "application/geo+json;version=1",
            "From": "chrisdavidramos@gmail.com",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:62.0) Gecko/20100101 Firefox/62.0",
        },
        muteHttpExceptions: true,
    };

    try {
        const dataWx1 = (new JsonResponseHandler(urlWx1, {}, paramsWx)).data;

        const urlWx2 = dataWx1.properties.forecast;

        const dataWx2 = (new JsonResponseHandler(urlWx2, {}, paramsWx)).data;

        const temp = dataWx2.properties.periods[0].temperature;
        const unit = dataWx2.properties.periods[0].temperatureUnit;
        const condition = dataWx2.properties.periods[0].shortForecast;

        const messageWx  = `It's ${temp}°${unit} in ${city}, ${region}. Weather is ${condition}.`;

        return CardService.newTextParagraph().setText(messageWx);
    } catch (e) {
        Logger.log(e);
        return CardService.newTextParagraph().setText("Wx service not working :(");
    }

}
