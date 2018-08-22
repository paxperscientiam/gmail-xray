function CardHeader(message) {
    const messageData = new MessageData(message);

    this.header = CardService.newCardHeader()
        .setTitle(doGet("Templates/headerTitle", messageData))
        .setSubtitle(doGet("Templates/headerSubtitle", messageData));
    return this.header;
}
