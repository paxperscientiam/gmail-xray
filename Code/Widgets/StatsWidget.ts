function StatsWidget(threads) {
    return CardService.newTextParagraph()
        .setText(doGet("Templates/mailStats", new StatsHandler(threads)));
}
