function MailSearchWidget() {
    const DEFAULT_MAILBOX_QUERY = props.getProperty("MAILBOX_QUERY");
    //
    return  CardService.newTextInput()
        .setFieldName("INPUT_MAIL_SEARCH_KEY")
        .setMultiline(true)
        .setTitle("Search mail")
        .setHint("Try 'in:inbox and is:starred'")
        .setValue(DEFAULT_MAILBOX_QUERY)
}
