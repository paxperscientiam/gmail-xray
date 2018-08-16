// -*- mode:typescript -*-

function getTpl(templateFileName, data) {
    var html = HtmlService.createHtmlOutputFromFile(templateFileName);

    html.data = ["shit"];

    return html.evaluate;

}
