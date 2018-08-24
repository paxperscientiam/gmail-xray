function StatusCard() {
    const dt = new dateArray();
    const IMG_BARS = props.getProperty("IMG_BARS");

    const card = CardService.newCardBuilder()
        .setName("Status Card")
        .setHeader(CardService.newCardHeader()
                   .setTitle("STATUS CENTER")
                   .setSubtitle(dt.GREETING + ", today is " + dt.WEEKDAY)
                   .setImageUrl(IMG_BARS));

    const sectionTwo = CardService.newCardSection()
        .setHeader("Upcoming events in your primary calendar")
        .addWidget(getWidget("INPUT_MAIL_SEARCH"))
        .addWidget(CardService.newTextButton()
                   .setText('Search')
                   .setOnClickAction(MailSearchAction(card)));

    return card
        .addSection(sectionTwo)
        .build();

}
