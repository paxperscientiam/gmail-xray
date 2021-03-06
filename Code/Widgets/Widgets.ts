function getWidget(widgetName: string, args?: object) {

    if (args !== undefined) {
        const messageData = args.messageData;
        const threadData = args.threadData;
        const threads = args.threads;
    }

    if (widgetName === "EMAIL_BODY") {
        return EmailBodyWidget(messageData);
    }

    if (widgetName === "EMAIL_RECEIPT") {
        return EmailReceiptWidget(messageData);
    }

    if (widgetName === "CONTACT_PERSON") {
        return EmailSenderWidget(messageData);
    }

    if (widgetName === "THREAD_LINK") {
        return ThreadLinkWidget(threadData);
    }

    if (widgetName === "INPUT_MAIL_SEARCH") {
        return MailSearchWidget();
    }

    if (widgetName === "MAIL_STATS") {
        return StatsWidget(threads);
    }
}
