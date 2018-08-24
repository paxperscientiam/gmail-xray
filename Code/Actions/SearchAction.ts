function MailSearchAction() {
    return CardService
        .newAction()
        .setFunctionName('MailSearchButtonHandler');
}


function MailSearchButtonHandler(e) {
   // GmailApp.search(
    Logger.log("SEARCHING!!! "+ e);

}
