function Translate(text) {
    const lang = Session.getActiveUserLocale();
    if (lang.match(/^(en|en_US|en_GB)$/)) {
        return text;
    } else {
        return LanguageApp.translate(text, "en", lang);
    }
}
