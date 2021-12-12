const toggle = document.getElementById('toggle');
const close1 = document.getElementById('close');
const open1 = document.getElementById('open');
const modal = document.getElementById('modal');

// Toggle Nav
toggle.addEventListener('click', () => {
	document.body.classList.toggle('show-nav');
});

// Show modal
open1.addEventListener('click', () => {
	modal.classList.add('show-modal');
});

// Hide Modal
close1.addEventListener('click', () => {
	modal.classList.remove('show-modal');
});

// Hide Modal on Outside Click
window.addEventListener('click', (e) =>
	e.target == modal ? modal.classList.remove('show-modal') : false
);
