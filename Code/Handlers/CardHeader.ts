function CardHeaderHandler(args) {
    this.header = CardService.newCardHeader()
        .setTitle(args.title)
        .setSubTitle(args.subtitle);
    //
    return this.header;
}
