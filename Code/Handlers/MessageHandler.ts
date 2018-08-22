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

    getLKKBTC(this.HtmlBody);
}


function getLKKBTC(html) {
  var searchstring = '<h2 id="mp-dyk-h2"';
  var index = html.search(searchstring);
  Logger.log(index);

}
