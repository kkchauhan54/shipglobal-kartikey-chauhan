function toggleAccordion(element) {
    const content = element.nextElementSibling;
    content.classList.toggle('open');
    // Calculate Max-height
    if (content.classList.contains('open')) {
        content.style.maxHeight = content.scrollHeight + 'px';
    } else {
        content.style.maxHeight = 0;
    }
}
