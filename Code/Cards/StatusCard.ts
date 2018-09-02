function StatusCard(args) {
    const dt = new dateArray();
    const IMG_BARS = props.getProperty("IMG_BARS");

    const card = CardService.newCardBuilder()
        .setName("Status Card")
        .setHeader(CardService.newCardHeader()
                   .setTitle("STATUS CENTER")
                   .setSubtitle(dt.GREETING + ", today is " + dt.WEEKDAY)
                   .setImageUrl(IMG_BARS));

    const sectionMailSearch = CardService.newCardSection()
        .setHeader("Mail search")
        .addWidget(getWidget("INPUT_MAIL_SEARCH"))
        .addWidget(CardService.newTextButton()
                   .setText("Search")
                   .setOnClickAction(MailSearchAction(card)));

    const mailStats = CardService.newCardSection()
        .setHeader("Mail statistics")
        .addWidget(getWidget("MAIL_STATS", {threads: args.threads}));

    const sectionWx = CardService.newCardSection()
        .setHeader("Local weather")
        .addWidget(WeatherWidget());

    return card
        .addSection(sectionWx)
        .addSection(sectionMailSearch)
        .addSection(mailStats)
        .build();

}
