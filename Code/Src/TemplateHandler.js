// -*- mode:typescript -*-

function getTpl(templateFileName, data) {
    var html = HtmlService.createTemplateFromFile(templateFileName);

    html.data = {...data};

    return html.evaluate().getContent();

}
