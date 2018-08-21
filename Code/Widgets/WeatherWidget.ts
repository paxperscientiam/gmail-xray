function WeatherWidget() {
  //   var query = '';
    var url = "https://api.weather.gov/stations/KMKC/observations/current";
  // + '?sort=stars'
    // + '&q=' + encodeURIComponent(query);
    var params = {
        headers: {
            "Accept": "application/vnd.noaa.dwml+xml;version=1",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:62.0) Gecko/20100101 Firefox/62.0",
        },
        muteHttpExceptions: true,
    };

    var response = UrlFetchApp.fetch(url, params);
    var json = response.getContentText();
    var data = JSON.parse(json);

    var wx = data.properties.presentWeather[0].weather;

    return CardService.newTextParagraph().setText(wx);
}
