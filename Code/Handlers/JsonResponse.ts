function JsonResponseHandler(url: string, query = {}, params = {muteHttpExceptions: true}) {

    const strQuery = Object.keys(query).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(query[key])).join("&");

    url = url + strQuery;

    try {
        const response = UrlFetchApp.fetch(url, params);
        //
        this.json = response.getContentText();
        this.data = JSON.parse(this.json);
        Logger.log(url);
        Logger.log(strQuery);
        Logger.log(params);
        Logger.log(this.data);

    } catch (e) {
        Logger.log(e);
        this.data = {};
    }
}
