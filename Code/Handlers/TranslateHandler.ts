function Translate(text) {
    return LanguageApp.translate(text,"en", Session.getActiveUserLocale());
}
