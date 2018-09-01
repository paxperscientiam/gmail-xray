function WeatherWidget() {
    //   var query = '';
    //const url = "https://api.weather.gov/stations/KMKC/observations/current";
    // + '?sort=stars'
    // + '&q=' + encodeURIComponent(query);
    //    const params = {
    //         headers: {
    //             "Accept": "application/vnd.noaa.dwml+xml;version=1",
    //             "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:62.0) Gecko/20100101 Firefox/62.0",
    //         },
    //         muteHttpExceptions: true,
    //     };

    const params = {
        muteHttpExceptions: true,
    };

    const API_IPINFO = props.getProperty("API_IPINFO");

    const urlIPINFO = "https://ipinfo.io/geo?token=" + API_IPINFO;


    try {
        const responseIP = UrlFetchApp.fetch(urlIPINFO, params);
        const jsonIP = response.getContentText();
        const dataIP = JSON.parse(jsonIP);

        const ip = dataIP.ip;
        const city = dataIP.city;
        const region = dataIP.region;
        Logger.log(ip);
        return CardService.newTextParagraph().setText(ip);
    } catch (e) {
        Logger.log(e);
        return CardService.newTextParagraph().setText("Check back later :(");
    }




    //  const url = "http://api.ipstack.com/check?access_key=b2e5ad187eeafde9d9e1de4e777091da"

    //     try {
    //         const response = UrlFetchApp.fetch(url, params);
    //         const json = response.getContentText();
    //         const data = JSON.parse(json);

    //        // const wx = Math.round(data.properties.temperature.value);
    //         // return CardService.newTextParagraph().setText(wx);
    //         const ip = data.ip;
    //         return CardService.newTextParagraph().setText(ip);

    //     } catch (e) {
    //         return CardService.newTextParagraph().setText("Check back later :(");
    //     }

    //    return CardService.newTextParagraph().setText("Check back later :(");

}
