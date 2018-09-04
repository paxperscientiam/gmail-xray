function JsonResponseHandler(url: string, query = {}, params = {muteHttpExceptions: true}) {
    const strQuery = Object.keys(query).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(query[key])).join("&");

    url = url + strQuery;
    Logger.log(`url: ${url}`);
    try {
        const response = UrlFetchApp.fetch(url, params);
        //
        this.json = response.getContentText();
        this.data = JSON.parse(this.json);
    } catch (e) {
        Logger.log(e);
        this.data = {};
    }
}
