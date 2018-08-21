function WeatherWidget() {
  //   var query = '';
    var url = "https://api.weather.gov/stations/KMKC/observations/current";
  // + '?sort=stars'
  // + '&q=' + encodeURIComponent(query);

    var response = UrlFetchApp.fetch(url, {muteHttpExceptions: true});
    Logger.log(response.getContentText());


    var response = UrlFetchApp.fetch();
    Logger.log(response.properties.presentWeather[0].weather);

    return CardService.newTextParagraph().setText(
        "These widgets are display-only. " +
            'A text paragraph can have multiple lines and ' +
            'formatting.');
}
