function MailSearchAction(card) {
    return CardService
        .newAction()
        .setFunctionName('MailSearchButtonHandler');
}

function MailSearchButtonHandler(e) {
    // GmailApp.search(
    const MAILBOX_QUERY = JSON.stringify(e.formInput.INPUT_MAIL_SEARCH_KEY, null, "  ");

    var MAILBOX_QUERY = props.getProperty("MAILBOX_QUERY");
    var MAX_THREADS = props.getProperty("MAX_THREADS");

    var threads = GmailApp.search(MAILBOX_QUERY, 0, MAX_THREADS);
    return threads;
}
