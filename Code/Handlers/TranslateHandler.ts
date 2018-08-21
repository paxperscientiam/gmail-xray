function Translate(text) {
    var locale = Session.getActiveUserLocale();

    return LanguageApp.translate(text, "en", locale);
}
