function JsonResponseHandler(url: string, query?: object) {
    const params = {
        muteHttpExceptions: true,
    };

    const queryString = {};

    if (query !== undefined) {
        queryString = Object.keys(query).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])).join('&');
    }


    const uri = url + this.queryString;

    const response = UrlFetchApp.fetch(uri, params);

    //
    this.json = response.getContentText();
    this.data = JSON.parse(json);
}
