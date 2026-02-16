const textarea = document.getElementById('text-input');
const counter   = document.getElementById('char-count');
const MAX = 50;

textarea.addEventListener('input', () => {
    if (textarea.value.length > MAX) {
        textarea.value = textarea.value.slice(0, MAX);
    }

    const count = textarea.value.length;
    counter.textContent = `Character Count: ${count}/${MAX}`;

    if (count === MAX) {
        textarea.style.color = 'red';
        counter.classList.add('danger');
    }
    else{
        textarea.style.color = '#2d3748';
        counter.classList.remove('danger');

    }
});