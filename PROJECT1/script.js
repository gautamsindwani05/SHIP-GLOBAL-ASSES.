document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const isOpen = content.style.maxHeight;

            document.querySelectorAll('.accordion-content').forEach(item => {
                item.style.maxHeight = null;
            });

            content.style.maxHeight = isOpen ? null : content.scrollHeight + 'px';
        });
    });
});