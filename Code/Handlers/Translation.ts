function Translate(text) {
    const lang = Session.getActiveUserLocale();
    try {
        if (lang.match(/^(en|en_US|en_GB)$/)) {
            return text;
        } else {
            return LanguageApp.translate(text, "en_US", lang);
        }
    } catch (e) {
        Logger.log(e);
    }
    return text;
}
