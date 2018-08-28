function StatsWidget(threads) {
    return CardService.newTextParagraph()
        .setText(doGet("Templates/calSection", new StatsHandler(threads)));
}
