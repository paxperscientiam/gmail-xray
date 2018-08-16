// -*- mode:typescript -*-

function getTpl(templateFileName, data) {
    var html = HtmlService.createHtmlOutputFromFile(templateFileName);

    html.data = data;

    return html.evaluate;

}
