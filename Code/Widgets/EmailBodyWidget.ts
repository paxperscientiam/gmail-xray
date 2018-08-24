function EmailBodyWidget(messageData) {
    return WidgetHandler(doGet("Templates/body", messageData));

}
