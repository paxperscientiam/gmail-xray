function MailSearchAction() {
    return CardService
        .newAction()
        .setFunctionName('MailSearchButtonHandler');
}


function MailSearchButtonHandler(e) {
    // GmailApp.search(
    var QUERY = JSON.parse(e.formInput);
    Logger.log(QUERY.INPUT_MAIL_SEARCH_KEY);
}
