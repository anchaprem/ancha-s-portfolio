



// Get all SVG icons

//github: anchaprem
const icons = document.querySelectorAll('.nav__item');

// Add click event listener to each SVG icon
icons.forEach(icon => {
  icon.addEventListener('click', function() {
    // Remove 'active' class from all icons
    icons.forEach(icon => icon.classList.remove('active-nav'));
    
    // Add 'active' class to the clicked icon
    this.classList.add('active-nav');
  });
});

/**
 * Progress bar animation by Hakan Havutcuoglu
 * https://codepen.io/havutcuoglu/pen/abMdvoq
 * This notice MUST stay intact in JS files and SCRIPT tags for free and legal usege.
 */
document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
      var progressBarItems = document.querySelectorAll('.progress_bar_item');
      progressBarItems.forEach(function(progressBarItem) {
          var position = progressBarItem.getBoundingClientRect().top;
          var windowHeight = window.innerHeight;
          if (position - windowHeight < 0 && !progressBarItem.classList.contains('animated')){
              progressBar(progressBarItem);
              progressBarItem.classList.add('animated');
          }
      });
  });
});
//github: anchaprem
function progressBar(target) {
  var speed = 30;
  var item = target.querySelector(".progress");
  var itemValue = parseInt(item.getAttribute("data-progress"));
  var value = target.querySelector(".item_value");
  var progress = 0;

  var count = setInterval(function () {
      if (progress <= itemValue) {
          item.style.width = progress + "%";
          value.innerHTML = progress + "%";
          progress++;
      } else {
          clearInterval(count);
      }
  }, speed);
}
//github: anchaprem

