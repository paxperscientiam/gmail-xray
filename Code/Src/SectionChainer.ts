function SectionChainer(args) {
    const card = args.card;
    card.addSection(args.msg);
    return card;
}
