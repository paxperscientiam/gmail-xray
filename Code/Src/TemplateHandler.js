// -*- mode:typescript -*-

function getTpl(templateFileName, data) {
    var html = HtmlService.createTemplateFromFile(templateFileName);

    Logger.log(data);
    //html.data = {...data};

    return html.evaluate().getContent();

}
