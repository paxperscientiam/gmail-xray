// -*- mode: typescript -*-

function MessageData(message) {

    this.sender = message.getFrom();
    this.subject = message.getSubject();
    this.date = formatDateService(message.getDate());
    this.time = formatTimeService(message.getDate());
    this.body = message.getPlainBody();



    this.starred = message.isStarred();
    this.age = formatAge(this.date);
    this.isPriority = message.isInPriorityInbox();
    this.isInInbox = message.isInInbox();


    this.HtmlBody = message.getBody();
    var doc = XmlService.parse(this.HtmlBody)
//    var output = HtmlService.createHtmlOutput(this.HtmlBody);
  //  Logger.log(output.getMetaTags());

}
