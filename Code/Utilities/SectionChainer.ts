function SectionChainer(card, sections) {
    sections.forEach((section) => {
        card.addSection(section);
    });
    return card;
}
