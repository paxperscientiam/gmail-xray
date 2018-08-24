function EmailSenderWidget() {
    return CardService.newKeyValue()
        .setIcon(CardService.Icon.PERSON)
        .setContent(messageData.sender);
}
