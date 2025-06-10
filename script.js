// Basic interactivity (example only)
document.addEventListener('DOMContentLoaded', () => {
  const hireMeButton = document.querySelector('.btn-orange');
  if (hireMeButton) {
    hireMeButton.addEventListener('click', () => {
      window.location.href = 'contact.html';
    });
  }
});