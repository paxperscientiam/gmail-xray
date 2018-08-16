// -*- mode:typescript -*-

function getTpl(templateFileName, data) {
    var html = HtmlService.createHtmlFromFile(templateFileName);

    html.data = {
        out: "shit"
    }
    Logger.log(html.data);

    return html.evaluate;

}
