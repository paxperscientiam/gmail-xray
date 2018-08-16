// -*- mode:typescript -*-

function getTpl(templateFileName, data) {
    var html = HtmlService.createHtmlOutputFromFile(templateFileName);

    //html.data = ["shit"];
    Logger.log(html.data);

    return html.evaluate;

}
