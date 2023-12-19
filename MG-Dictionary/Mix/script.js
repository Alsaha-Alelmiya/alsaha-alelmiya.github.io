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
    }, 1250);
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

function openMenu(){
document.getElementById("menu-box").style.translate = "0";
}

function closeMenu() {
document.getElementById("menu-box").style.translate = "100% -100%";
}
   
var terms = [
  document.querySelectorAll(".first-term.units-links"),
  document.querySelectorAll(".second-term.units-links"),
  document.querySelectorAll(".third-term.units-links")
];

var isItVisible = [false, false, false];

function toggleTerm(index) {
  if (isItVisible[index] == false) {
    for (let i = 0; i < terms[index].length; i++) {
      terms[index][i].style.display = "block";
      terms[index][i].style.animation = "slide-down 0.4s ease-in-out";
    }
    isItVisible[index] = true;
    document.querySelectorAll(".terms-btns")[index].classList.remove("have-caret");
    document.querySelectorAll(".terms-btns")[index].querySelector("i").style.display ="inline-block";
  } else {
    for (let i = 0; i < terms[index].length; i++) {
      terms[index][i].style.animation = "slide-up 0.4s ease-in-out";
      setTimeout(function(){
        terms[index][i].style.display = "none";
      }, 400);
    }
    isItVisible[index] = false;
    document.querySelectorAll(".terms-btns")[index].classList.add("have-caret");
    document.querySelectorAll(".terms-btns")[index].querySelector("i").style.display ="none";
  }
}

var termButtons = document.querySelectorAll(".terms-btns");

termButtons.forEach(function(button, index) {
  button.addEventListener("click", function() {
    toggleTerm(index);
  });
});

const buttons = Array.from(document.querySelectorAll('.identify-v-e-btns'));
const quickCheckBtn = document.querySelector('.quick-check-btn');
const vocabularyBuildingBtn = document.querySelector('.vocabulary-building-btn');
const afterReadingBtn = document.querySelector('.after-reading-btn');

const quickCheck = Array.from(document.querySelectorAll('.quick-check'));
const vocabularyBuilding = Array.from(document.querySelectorAll('.vocabulary-building'));
const afterReading = Array.from(document.querySelectorAll('.after-reading'));

const isItOn = [false, false, false];

function toggleBackgroundColor(elements, index, color) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = color;
  }
  isItOn[index] = !isItOn[index];
}

if (quickCheckBtn) {
  quickCheckBtn.addEventListener('click', function() {
    toggleBackgroundColor(quickCheck, 0, isItOn[0] ? 'var(--fg-color)' : '#C022284a');
  });
}

if (afterReadingBtn) {
  afterReadingBtn.addEventListener('click', function() {
    toggleBackgroundColor(afterReading, 1, isItOn[1] ? 'var(--fg-color)' : '#44B8694a');
  });
}

if (vocabularyBuildingBtn) {
  vocabularyBuildingBtn.addEventListener('click', function() {
    toggleBackgroundColor(vocabularyBuilding, 2, isItOn[2] ? 'var(--fg-color)' : '#78523B4a');
  });
}

if (window.innerWidth < 450 || window.matchMedia('print').matches) {
  var styleSheets = ['styles-for-units.css', 'styles-for-grades-pages.css', 'styles.css', 'styles-for-home-page.css'];
  var rules = [];

  // Find the target stylesheets
  for (var i = 0; i < document.styleSheets.length; i++) {
    var href = document.styleSheets[i].href;

    for (var j = 0; j < styleSheets.length; j++) {
      if (href.includes(styleSheets[j])) {
        rules = rules.concat(Array.from(document.styleSheets[i].cssRules || document.styleSheets[i].rules));
        break;
      }
    }
  }

  // Iterate through the rules and convert px values to vw
  for (var k = 0; k < rules.length; k++) {
    var rule = rules[k];

    if (rule.style) {
      for (var l = 0; l < rule.style.length; l++) {
        var property = rule.style[l];
        var value = rule.style.getPropertyValue(property);

        if (value.includes('px')) {
          var newValue = parseFloat(value) / 450 * 100;
          rule.style.setProperty(property, newValue + 'vw');
        }
      }
    }
  }
}
