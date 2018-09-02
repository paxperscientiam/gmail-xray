function JsonResponseHandler(url: string, query?: object, params?: object) {

    if (!params) {
        params = {
            muteHttpExceptions: true,
        };
    }

    const strQuery;

    if (query) {
        strQuery = Object.keys(query).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(query[key])).join("&");

    }

    const uri = url + strQuery;

    const response = UrlFetchApp.fetch(uri, params);

    //
    this.json = response.getContentText();
    this.data = JSON.parse(this.json);
}
