// -*- mode:typescript -*-

function CardMetaSection(args) {
    // section header has to be text
    this.section = CardService.newCardSection()
        .setHeader(args.header)
        .addWidget(args.widget);
    //
    return this.section;
}
