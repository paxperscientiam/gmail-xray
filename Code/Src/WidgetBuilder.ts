function WidgetBuilder(args) {
    var content = args.content;
    var icon = args.content;

    return  CardService.newKeyValue()
        .setIcon(CardService.Icon.${icon})
        .setContent(content);
}
