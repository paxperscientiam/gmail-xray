function EmailSubjectWidget(subject) {
    return CardService.newKeyValue()
        .setIcon(CardService.Icon.PERSON)
        .setContent(subject);
}
