window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.animate');

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  var rect = element.getBoundingClientRect();

  if (rect.top <= window.innerHeight * 0.75) {
    element.classList.add('animated');
  }
}
});

