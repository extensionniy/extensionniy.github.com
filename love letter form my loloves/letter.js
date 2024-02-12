document.getElementById('openBtn').addEventListener('click', function() {
    var letter = document.querySelector('.letter');
    if (letter.classList.contains('closed')) {
      letter.style.height = letter.scrollHeight + 'px';
      letter.classList.remove('closed');
    } else {
      letter.style.height = '50px'; // Collapse the letter when clicked again
      letter.classList.add('closed');
    }
  });