// -*- mode:typescript -*-

function getTpl(templateFileName, data) {
    var html = HtmlService.createHtmlOutputFromFile(templateFileName);

    html.data = {
        balls: "tony"
    }

    return html.evaluate;

}
