function Translate(text) {
    const lang = Session.getActiveUserLocale();
    if (lang === "en") {
        return text;
    } else {
        return LanguageApp.translate(text, "en", lang);
    }
}
