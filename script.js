document.getElementById('learn-more-btn').addEventListener('click', function() {
    alert('Welcome to my static website!');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Message sent successfully!');
    } else {
        alert('Please fill out all fields.');
    }
});
