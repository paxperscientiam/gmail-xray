// -*- mode:typescript -*-

function getTpl(templateFileName) {
    var html = HtmlService.createHtmlOutputFromFile(templateFileName);
    return html;
}
