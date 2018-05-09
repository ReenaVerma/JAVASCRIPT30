window.addEventListener('DOMContentLoaded', () => {

  console.log('window loaded');

  window.addEventListener('keydown', function(e) {
    console.log(e.keyCode);

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio) return; //stops function from running altogether
  });

});
