// Expand/Collapse Logic
document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const content = document.getElementById(targetId);

        // Toggle the expanded class
        content.classList.toggle('expanded');

        // Update button text
        this.textContent = content.classList.contains('expanded') ? 'Collapse' : 'Expand';
    });
});


// Toggle Expand Function
function toggleExpand(button) {
    const miniContainer = button.closest('.mini-container');

    // Toggle the "expanded" class
    miniContainer.classList.toggle('expanded');

    // Update button text
    if (miniContainer.classList.contains('expanded')) {
        button.textContent = 'Less';
    } else {
        button.textContent = 'More';
    }
}

const scrollContainer = document.querySelector('.scroll-container');

function openNewWindow(url) {
    window.open(url, '_blank');
}