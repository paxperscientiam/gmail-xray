function JsonResponseHandler(url: string, query?: object, params?: object) {
    if (params) {
        params = mergeObjs({muteHttpExceptions: true}, params);
    } else {
        params = {muteHttpExceptions: true};
    }

    const strQuery = "";

    if (query) {
        strQuery = Object.keys(query).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(query[key])).join("&");
        url = url + strQuery;
    }

    try {
        const response = UrlFetchApp.fetch(url, params);
    //
        this.json = response.getContentText();
        this.data = JSON.parse(this.json);
        Logger.log(url);
        Logger.log(query);
        Logger.log(params);
        Logger.log(data);

    } catch (e) {
        Logger.log(e);
        this.data = {};
    }
}
