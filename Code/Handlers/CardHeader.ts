function CardHeader(args) {
    this.header = CardService.newCardHeader()
        .setTitle(args.title)
        .setSubtitle(args.subtitle);
    //
    return this.header;
}
