function SectionHeader(args) {
    this.header = CardService.newCardSection()
        .setHeader(args.header);
    return this.header;
}
