// -*- mode:typescript -*-

function doGet(templateFileName, data) {
    var html = HtmlService.createTemplateFromFile("myTemplate");
    html.data = data;
    return html.evaluate().getContent();

}
