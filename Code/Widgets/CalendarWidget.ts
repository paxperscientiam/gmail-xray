function CalendarWidget() {
    var calData =  new CalendarHandler();

    return CardService.newTextParagraph()
        .setText(doGet("Templates/wxSection", calData));
}
