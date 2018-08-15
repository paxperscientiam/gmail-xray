function ThreadData(thread) {
  this.message = thread.getMessages();
  this.labels = thread.getLabels();
  this.count = thread.getMessageCount();
  this.link = thread.getPermalink();
  //
  return this;
}