function Section(args) {
    this.section = CardService.newCardSection()
        .setHeader(args.header);
    return this.section;
}
