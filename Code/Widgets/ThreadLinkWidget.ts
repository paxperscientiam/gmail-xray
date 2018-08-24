function ThreadLinkWidget(threadData) {
    const textButton = CardService.newTextButton()
        .setText("Open Thread" + " (" + threadData.count + ") ↗️" )
        .setOpenLink(CardService.newOpenLink()
                     .setUrl(threadData.link)
                     .setOpenAs(CardService.OpenAs.FULL_SIZE)
                     .setOnClose(CardService.OnClose.NOTHING))

    return CardService
        .newButtonSet()
        .addButton(textButton);
}
