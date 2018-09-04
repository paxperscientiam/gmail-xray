function Section(args) {
    const textParagraph = CardService.newTextParagraph().setText("shit");
    //
    this.section = CardService.newCardSection()
        .setHeader(args.header)
        .addWidget(textParagraph);
    return this.section;
}
