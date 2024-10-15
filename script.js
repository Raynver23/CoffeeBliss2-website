// JavaScript to handle form submission or any interactive elements can go here
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
});
document.getElementById('searchForm').addEventListener('submit', function(event) {
    const query = document.getElementById('searchInput').value;
    if (!query) {
        alert('Please enter a search term.');
        event.preventDefault();
    }
});
// Show menu button after scrolling down
window.addEventListener('scroll', function() {
    const menuButton = document.querySelector('.menu-button');
    if (window.scrollY > 200) {
        menuButton.style.display = 'block';
    } else {
        menuButton.style.display = 'none';
    }
});
