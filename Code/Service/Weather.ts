function WeatherService(coord, period) {
    Logger.log("Creating new WeatherService instance ... ");

    const url = "https://api.weather.gov/points/" + coord;

    const params = {
        escaping: false,
        headers: {
            "Accept": "application/geo+json;version=1",
            "From": "chrisdavidramos@gmail.com",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:62.0) Gecko/20100101 Firefox/62.0",
        },
        muteHttpExceptions: true,
    };

    const data = (new JsonResponseHandler(url, {}, params)).data;

    const dataWx2 = (new JsonResponseHandler(data.properties.forecast, {}, params)).data;

    this.temp = dataWx2.properties.periods[period].temperature;
    this.unit = dataWx2.properties.periods[period].temperatureUnit;
    this.condition = (dataWx2.properties.periods[period].shortForecast).toLowerCase();

}
