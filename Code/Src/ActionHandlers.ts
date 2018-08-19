////function ComposeEmail() {
////var composeActionResponse = CardService.newComposeActionResponseBuilder()
////     .setGmailDraft(GmailApp.createDraft("recipient", "subject", "body"))
////     .build();
////
////}
//
//
//var action = CardService.newAction().setFunctionName('composeEmailCallback');
// CardService.newTextButton()
//     .setText('Compose Email')
//     .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);
//
// // ...
//
// function composeEmailCallback() {
//   var thread = GmailApp.getThreadById(e.threadId);
//   var draft = thread.createDraftReply('This is a reply');
//   return CardService.newComposeActionResponseBuilder()
//       .setGmailDraft(draft)
//       .build();
// }
//
//
//var imageButton = CardService.newImageButton()
//     .setAltText("An image button with an airplane icon.")
//     .setIcon(CardService.Icon.AIRPLANE)
//     .setOpenLink(CardService.newOpenLink()
//         .setUrl("https://airplane.com"));

// var action = CardService.newAction();
//  // Finish building the action...

//  var cardAction = CardService.newCardAction()
//      .setText("Card action")
//      .setOnClickAction(action);

function ActionHandler() {
    //
}
