function MessageData(message) {
  this.sender = message.getFrom();
  this.subject = message.getSubject();
  this.date = message.getDate();
  this.starred = message.isStarred();
  
  return this;
}