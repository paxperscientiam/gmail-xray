function getWidget(widgetName, args) {
    const messageData = args.messageData;
    const threadData = args.threadData;

    if (widgetName === "EMAIL_PRIORITY") {
        return WidgetHandler(doGet("Templates/paragraph", {md: messageData}));
    }

    if (widgetName === "EMAIL_BODY") {
        return CardService
            .newKeyValue()
            .setContent(messageData.body)
            .setMultiline(true);
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
}
