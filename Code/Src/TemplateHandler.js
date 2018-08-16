// -*- mode:typescript -*-

function getTpl(templateFileName) {
    var html = HtmlService.createHtmlOutputFromFile(templateFileName)
        .evaluate()
        .getContent();

    return html;
}
