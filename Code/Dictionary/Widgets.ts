function getWidget(widgetName:string, args?:object) {

    if (args !== undefined) {
        const messageData = args.messageData;
        const threadData = args.threadData;
    }

    const DEFAULT_MAILBOX_QUERY = props.getProperty("MAILBOX_QUERY");

    if (widgetName === "EMAIL_STARRED") {
        // return WidgetHandler(doGet("Templates/paragraph", messageData));
        return CardService.newKeyValue()
            .setIcon(CardService.Icon.STAR)
            .setContent("OMG")
            .setMultiline(true);

    }

    if (widgetName === "EMAIL_BODY") {
        return WidgetHandler(doGet("Templates/body", messageData));
        // return CardService
        //     .newKeyValue()
        //     .setContent(messageData.body)
        //     .setMultiline(true);
    }

    if (widgetName === "EMAIL_RECEIPT") {
        return CardService.newKeyValue()
            .setIcon(CardService.Icon.CLOCK)
            .setContent(messageData.date)
            .setMultiline(true)
            .setBottomLabel(messageData.time);
    }

    if (widgetName === "CONTACT_PERSON") {
        return CardService.newKeyValue()
            .setIcon(CardService.Icon.PERSON)
            .setContent(messageData.sender);
    }

    if (widgetName === "THREAD_LINK") {
        return  CardService
            .newButtonSet()
            .addButton(CardService.newTextButton()
                       .setText("Open Thread" + " (" + threadData.count + ") ↗️" )
                       .setOpenLink(CardService.newOpenLink()
                                    .setUrl(threadData.link)
                                    .setOpenAs(CardService.OpenAs.FULL_SIZE)
                                    .setOnClose(CardService.OnClose.NOTHING)));
    }

    if (widgetName === "INPUT_MAIL_SEARCH") {
        return  CardService.newTextInput()
            .setFieldName("INPUT_MAIL_SEARCH_KEY")
            .setTitle("Text input title")
            .setHint("Search mail")
            .setValue(DEFAULT_MAILBOX_QUERY)
    };
}
