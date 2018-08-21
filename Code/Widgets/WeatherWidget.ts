function WeatherWidget() {
    var response = UrlFetchApp.fetch("https://api.weather.gov/stations/KMKC/observations/current");
    Logger.log(response.properties.presentWeather[0].weather);

    return CardService.newTextParagraph().setText(
        "These widgets are display-only. " +
            'A text paragraph can have multiple lines and ' +
            'formatting.');
}
