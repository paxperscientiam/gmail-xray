function JsonResponseHandler(url: string, query?: object) {
    const params = {
        muteHttpExceptions: true,
    };

    const strQuery;

    Logger.log(query);

    if (query) {
        strQuery = Object.keys(query).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(query[key])).join("&");
    }

    const uri = url + strQuery;

    Logger.log(url);

    const response = UrlFetchApp.fetch(uri, params);

    //
    this.json = response.getContentText();
    this.data = JSON.parse(json);
}
