function MailSearchAction() {
    return CardService
        .newAction()
        .setFunctionName('MailSearchButtonHandler');
}


function MailSearchButtonHandler() {
    Logger.log("SEARCHING!!!");

}
