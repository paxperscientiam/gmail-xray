// -*- mode:typescript -*-

function CardHeader(threadData) {
    this.header = CardService.newCardHeader()
        .setTitle(doGet("Templates/headerTitle", threadData))
        .setSubtitle(doGet("Templates/headerSubtitle", threadData));
    return this.header;
}
