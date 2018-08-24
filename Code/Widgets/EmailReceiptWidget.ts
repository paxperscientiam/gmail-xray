function EmailReceiptWidget(messageData) {
    return CardService.newKeyValue()
        .setIcon(CardService.Icon.CLOCK)
        .setContent(messageData.date)
        .setMultiline(true)
        .setBottomLabel(messageData.time);
}
