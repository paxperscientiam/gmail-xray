
function openLinkUniversalAction() {
    return CardService.newUniversalActionResponseBuilder()
        .setOpenLink(CardService.newOpenLink()
                     .setUrl("https://www.google.com"))
        .build();
}
