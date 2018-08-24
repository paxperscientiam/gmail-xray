function MailSearchAction() {
    return CardService
        .newAction()
        .setFunctionName('MailSearchButtonHandler');
}


function MailSearchButtonHandler(e) {
    // GmailApp.search(
    //var QUERY = JSON.parse(e.formInput.INPUT_MAIL_SEARCH_KEY);
    Logger.log(JSON.stringify(e.formInput, null, "  "));
}
