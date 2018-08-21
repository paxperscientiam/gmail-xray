function Translate(text) {
    const lang = Session.getActiveUserLocale();
    if (lang !== "en") {
        return LanguageApp.translate(text, "en", lang);
    } else {
        return text;
    }
}
