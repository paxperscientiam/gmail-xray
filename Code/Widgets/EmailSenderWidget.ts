function EmailSenderWidget(sender) {
    return CardService.newKeyValue()
        .setIcon(CardService.Icon.PERSON)
        .setContent(sender);
}
