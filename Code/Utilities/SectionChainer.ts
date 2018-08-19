function SectionChainer(card, sections) {
    sections.forEach(function(section) {
        card.addSection(section);
    });
    return card;
}
