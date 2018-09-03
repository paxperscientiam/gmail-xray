// -*- mode:typescript -*-

function CardMetaSection(args) {
    var textParagraph = CardService.newTextParagraph();
    // section header has to be text
    this.section = CardService.newCardSection()
        .setHeader(args.header)
        .addWidget(textParagraph);
       // .addWidget(args.widget);
    //
    return this.section;
}
