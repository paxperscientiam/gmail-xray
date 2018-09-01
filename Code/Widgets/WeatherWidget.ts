function WeatherWidget() {
    //   var query = '';
    const url = "https://api.weather.gov/stations/KMKC/observations/current";
    // + '?sort=stars'
    // + '&q=' + encodeURIComponent(query);
    const params = {
        headers: {
            "Accept": "application/vnd.noaa.dwml+xml;version=1",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:62.0) Gecko/20100101 Firefox/62.0",
        },
        muteHttpExceptions: true,
    };

//     try {
//         const response = UrlFetchApp.fetch(url, params);
//         const json = response.getContentText();
//         const data = JSON.parse(json);

//         const wx = Math.round(data.properties.temperature.value);
//         return CardService.newTextParagraph().setText(wx);
//     } catch (e) {
//         return CardService.newTextParagraph().setText("Check back later :(");
    //     }
    return CardService.newTextParagraph().setText("Check back later :(");

}
