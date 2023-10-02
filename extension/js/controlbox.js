const feedbackBox = document.querySelector('.container');
let isDragging = false;
let initialX, initialY;
let offsetX, offsetY;

feedbackBox.addEventListener('mousedown', (e) => {
    isDragging = true;
    initialX = e.clientX - feedbackBox.getBoundingClientRect().left;
    initialY = e.clientY - feedbackBox.getBoundingClientRect().top;
    offsetX = e.clientX - feedbackBox.getBoundingClientRect().left;
    offsetY = e.clientY - feedbackBox.getBoundingClientRect().top;
    feedbackBox.classList.add('draggable');
    e.preventDefault();
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.clientX - initialX;
    const y = e.clientY - initialY;
    feedbackBox.style.left = `${x}px`;
    feedbackBox.style.top = `${y}px`;
});

window.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        feedbackBox.classList.remove('draggable');
    }
});
