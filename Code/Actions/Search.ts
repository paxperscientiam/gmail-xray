function MailSearchAction(card) {
    return CardService
        .newAction()
        .setFunctionName("MailSearchButtonHandler");
}

function MailSearchButtonHandler(e) {
    // GmailApp.search(
    const MAILBOX_QUERY = JSON.stringify(e.formInput.INPUT_MAIL_SEARCH_KEY, null, "  ");

    const MAILBOX_QUERY = props.getProperty("MAILBOX_QUERY");
    const MAX_THREADS = props.getProperty("MAX_THREADS");

    return GmailApp.search(MAILBOX_QUERY, 0, MAX_THREADS);
}

function notificationCallback() {
    return CardService.newActionResponseBuilder()
        .setNotification(CardService.newNotification()
                         .setType(CardService.NotificationType.WARNING)
                         .setText("Some info to display to user"))
        .build();
}
