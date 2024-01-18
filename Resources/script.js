setTimeout(function(){
  document.querySelector('.loader').style.color = "#000";
}, 2900);

var contentElements = document.querySelectorAll('.content');

for (var i = 0; i < contentElements.length; i++) {
  contentElements[i].style.visibility = "hidden";
}

document.addEventListener("DOMContentLoaded", function() {
  for (var i = 0; i < contentElements.length; i++) {
    contentElements[i].style.visibility = "hidden";
  }
});

window.addEventListener("load", function() {
  var loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;

  if (loadTime < 1250) {
    window.setTimeout(function() {
      var loaderBox = document.getElementById("loaderBox");
      loaderBox.style.opacity = "0";
      loaderBox.style.display = "none";
      var contents = document.getElementsByClassName("content");
      for (var i = 0; i < contents.length; i++) {
        contents[i].style.visibility = "visible";
        contents[i].style.animation = "fade-in 1s ease-in-out";
      }
    }, 3500);
  } else {
    var loaderBox = document.getElementById("loaderBox");
    loaderBox.style.opacity = "0";
    loaderBox.style.display = "none";
    var contents = document.getElementsByClassName("content");
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.visibility = "visible";
      contents[i].style.animation = "fade-in 1s ease-in-out";
    }
  }
});