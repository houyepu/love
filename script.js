document.getElementById('clickable').addEventListener('click', function() {
    this.style.display = 'none'; // Hide initial message
    document.getElementById('message').style.display = 'block';
});

