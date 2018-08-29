function MailSearchWidget() {
    const QUERY_SUGGESTION_A = props.getProperty("QUERY_SUGGESTION_A");
    const QUERY_SUGGESTION_B = props.getProperty("QUERY_SUGGESTION_B");

    //
    return CardService.newTextInput()
        .setFieldName("INPUT_MAIL_SEARCH_KEY")
        .setMultiline(true)
        .setTitle("Search mail")
        .setHint("Try 'in:inbox and is:starred'")
        .setSuggestions(CardService.newSuggestions()
                        .addSuggestion(QUERY_SUGGESTION_A)
                        .addSuggestion(QUERY_SUGGESTION_B)
                        .addSuggestions(['Blue', 'Black', 'Green']);

    //    .setValue(DEFAULT_MAILBOX_QUERY)
}
