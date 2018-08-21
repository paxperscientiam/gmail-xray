function CalendarWidget() {
    return CardService.newTextParagraph()
        .setText(doGet("Templates/calSection", new CalendarHandler()));
}
