function WeatherWidget() {

    const params = {
        muteHttpExceptions: true,
    };

    const API_IPINFO = props.getProperty("API_IPINFO");

    const urlIPINFO = "https://ipinfo.io/geo?";

    try {
        const dataIP = (new JsonResponseHandler(urlIPINFO, {token: API_IPINFO})).data;

        const ip = dataIP.ip;
        const city = dataIP.city;
        const region = dataIP.region;
        const coordData = dataIP.loc;

        let lat = Number(coordData.split(",")[0]);
        let lon = Number(coordData.split(",")[1]);

        // weather service api limit precision to 4 decimal places
        lat = lat.toFixed(4);
        lon = lon.toFixed(4);

        Logger.log(`lat:${lat}`);
        Logger.log(`lon:${lon}`);

        const coord = String(lat) + "," + String(lon);

    } catch (e) {
        Logger.log(e);
        return CardService.newTextParagraph().setText("IP service not working :(");
    }

    const urlWx1 = "https://api.weather.gov/points/" + coord;
    const paramsWx = {
        headers: {
            "Accept": "application/geo+json;version=1",
            "From": "chrisdavidramos@gmail.com",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:62.0) Gecko/20100101 Firefox/62.0",
        },
        muteHttpExceptions: true,
    };

    try {
        const dataWx1 = (new JsonResponseHandler(urlWx1)).data;
        //
        const urlWx2 = dataWx1.properties.forecast;

        const dataWx2 = (new JsonResponseHandler(urlWx2)).data;

        const temp = dataWx2.properties.periods[0].temperature;
        const unit = dataWx2.properties.periods[0].temperatureUnit;

        const txt  = `It's ${temp}°${unit} in ${city}, ${region}.`;

        return CardService.newTextParagraph().setText(txt);
    } catch (e) {
        Logger.log(e);
        return CardService.newTextParagraph().setText("Wx service not working :(");
    }

}
