function Section(args) {
    const Widgets = args.widget;

    this.section = CardService.newCardSection()
        .setHeader(header);

    Widgets.forEach((widget) => {
        this.section.addWidget(widget);
    });
    //
    return this.section;
}
