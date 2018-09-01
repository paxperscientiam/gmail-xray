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

        const txt = "Nice weather in " + city + ".";

    } catch (e) {
        Logger.log(e);
        return CardService.newTextParagraph().setText("IP service not working :(");
    }


    var queryWx = '';
    const urlWx = "https://api.weather.gov/stations/KMKC/observations/current";
    const paramsWx = {
        headers: {
            "Accept": "application/vnd.noaa.dwml+xml;version=1",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:62.0) Gecko/20100101 Firefox/62.0",
            "From": "chrisdavidramos@gmail.com"
        },
        muteHttpExceptions: true,
    };


    try {
        const responseWx = UrlFetchApp.fetch(urlWx, paramsWx);
        const jsonWx = responseWx.getContentText();
        const dataWx = JSON.parse(jsonWx);

        const wx = Math.round(dataWx.properties.temperature.value);
        return CardService.newTextParagraph().setText(txt + "," + wx);

    } catch (e) {
        Logger.log(e);
        return CardService.newTextParagraph().setText("Wx service not working :(");
    }


}
