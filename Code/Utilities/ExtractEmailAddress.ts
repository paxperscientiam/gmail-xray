/**
 *  Given the result of GmailMessage.getFrom(), extract only the email address.
 *  getFrom() can return just the email address or a string in the form
 *  "Name <myemail@domain>".
 *
 *  @param {String} sender The results returned from getFrom().
 *  @return {String} Only the email address.
 */
function extractEmailAddress(sender) {
  const regex = /\<([^\@]+\@[^\>]+)\>/;
  const email = sender;  // Default to using the whole string.
  const match = regex.exec(sender);
  if (match) {
    email = match[1];
  }
  return email;
}
