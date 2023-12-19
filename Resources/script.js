setTimeout(function(){
document.querySelector('.loader').style.color="#000";
}, 2900);

var content = document.querySelectorAll('.content');

for(i = 0; i < content.length; i++){
content[i].style.visibility ="hidden";
}

document.addEventListener("DOMContentLoaded", function() {
  for (i = 0; i < content.length; i++) {
    content[i].style.visibility = "hidden";
  }
});

window.addEventListener("load", function() {
  var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;

  if (loadTime < 1250) {
    window.setTimeout(function() {
      var loaderBox = document.getElementById("loaderBox");
      loaderBox.style.opacity = "0";
      loaderBox.style.display = "none";
      var content = document.getElementsByClassName("content");
      for (var i = 0; i < content.length; i++) {
        content[i].style.visibility = "visible";
        content[i].style.animation = "fade-in 1s ease-in-out";
      }
    }, 3500);
  } else {
    var loaderBox = document.getElementById("loaderBox");
    loaderBox.style.opacity = "0";
    loaderBox.style.display = "none";
    var content = document.getElementsByClassName("content");
    for (var i = 0; i < content.length; i++) {
      content[i].style.visibility = "visible";
      content[i].style.animation = "fade-in 1s ease-in-out";
    }
  }
});