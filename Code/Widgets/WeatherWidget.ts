function WeatherWidget() {

    const params = {
        muteHttpExceptions: true,
    };

    const API_IPINFO = props.getProperty("API_IPINFO");

    const urlIPINFO = "https://ipinfo.io/geo?";

    try {
        const dataIP = JsonResponseHandler(urlIPINFO, {token: API_IPINFO});

        const ip = dataIP.ip;
        const city = dataIP.city;
        const region = dataIP.region;
        const coordData = dataIP.loc;

        let lat = Number(coordData.split(",")[0]);
        let lon = Number(coordData.split(",")[1]);

        // weather service api limit precision to 4 decimal places
        lat = lat.toFixed(4);
        lon = lon.toFixed(4);

        const coord = String(lat) + "," + String(lon);

        const txt = "Weather in " + city;

    } catch (e) {
        Logger.log(e);
        return CardService.newTextParagraph().setText("IP service not working :(");
    }

    var queryWx = '';
    const urlWx_1 = "https://api.weather.gov/points/" + coord;
    const paramsWx = {
        headers: {
            "Accept": "application/geo+json;version=1",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:62.0) Gecko/20100101 Firefox/62.0",
            "From": "chrisdavidramos@gmail.com",
        },
        muteHttpExceptions: true,
    };

    try {
        const dataWx_1 = JsonResponseHandler(urlWx_1);
        //
        const urlWx_2 = dataWx_1.properties.forecast;

        const dataWx_2 = JsonResponseHandler(urlWx_2);

        const temp = dataWx_2.properties.periods[0].temperature;
        const unit = dataWx_2.properties.periods[0].temperatureUnit;

        const txt  = `It's ${temp}°${unit} in ${city}, ${region}.`;

        return CardService.newTextParagraph().setText(txt);
    } catch (e) {
        Logger.log(e);
        return CardService.newTextParagraph().setText("Wx service not working :(");
    }

}
