
function openLinkUniversalAction() {
    var cardBuilder1 = CardService.newCardBuilder()
        .setHeader(CardService.newCardHeader()
                   .setTitle("ROFL"));

    var cardBuilder2 = CardService.newCardBuilder();
    // Finish building the cards ...

    // A universal action that shows two static cards.
    return CardService.newUniversalActionResponseBuilder()
        .displayAddOnCards([
            cardBuilder1.build();
            cardBuilder2.build();
        ]).build();
}
