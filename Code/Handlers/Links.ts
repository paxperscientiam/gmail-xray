function openLinkCallback(Uri) {
    return CardService.newActionResponseBuilder()
        .setOpenLink(CardService.newOpenLink()
                     .setUrl(Uri))
        .build();
}
