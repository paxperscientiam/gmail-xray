function SectionChainer(card, sections) {
    sections.forEach(function(element) {
        card.addSection(element.section);
    });
    return card;
}
