function WeatherWidget() {


    const params = {
        muteHttpExceptions: true,
    };

    const API_IPINFO = props.getProperty("API_IPINFO");

    const urlIPINFO = "https://ipinfo.io/geo?token=" + API_IPINFO;


    try {
        const responseIP = UrlFetchApp.fetch(urlIPINFO, params);
        const jsonIP = responseIP.getContentText();
        const dataIP = JSON.parse(jsonIP);

        const ip = dataIP.ip;
        const city = dataIP.city;
        const region = dataIP.region;
        var coord = dataIP.loc;

        var lat = Number(coord.split(",")[0]);
        var lon = Number(coord.split(",")[0]);

        // weather service api limit precision to 4 decimal places
        lat = lat.toFixed(4);
        lon = lon.toFixed(4);

        var coord = String(lat) + "," + String(lon);

        const txt = "Nice weather in " + city + ".";

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
            "From": "chrisdavidramos@gmail.com"
        },
        muteHttpExceptions: true,
    };


    try {
        const responseWx_1 = UrlFetchApp.fetch(urlWx_1, paramsWx);
        const jsonWx_1 = responseWx_1.getContentText();
        const dataWx_1 = JSON.parse(jsonWx_1);

        const urlWx_2 = dataWx_1.properties.forecast;

        //const wx = Math.round(dataWx_1.properties.temperature.value);
        //return CardService.newTextParagraph().setText(txt + ", " + wx + "°C");
        const responseWx_2 = UrlFetchApp.fetch(urlWx_2, paramsWx);

        const jsonWx_2 = responseWx_2.getContentText();
        const dataWx_2 = JSON.parse(jsonWx_2);

        const temp = dataWx_2.properties.periods[0].temperature;

        return CardService.newTextParagraph().setText(txt + ", " + temp + "°F");
    } catch (e) {
        Logger.log(e);
        return CardService.newTextParagraph().setText("Wx service not working :(");
    }


}
