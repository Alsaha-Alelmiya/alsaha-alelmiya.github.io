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
      terms[index][i].style.height = "fit-content";
      terms[index][i].style.animation = "slide-down 0.3s ease-in-out";
    }
    isItVisible[index] = true;
    document.querySelectorAll(".terms-btns")[index].classList.remove("have-caret");
    document.querySelectorAll(".terms-btns")[index].querySelector("i").style.display ="inline-block";
  } else {
    for (let i = 0; i < terms[index].length; i++) {
      terms[index][i].style.animation = "slide-up 0.3s ease-in-out";
      setTimeout(function(){
        terms[index][i].style.height = "0";
setTimeout(function(){
        terms[index][i].style.display = "none";
      }, 100);
      }, 300);
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

var examples = document.querySelectorAll('.examples');
var showExamples = document.querySelector('.showExamples');
var isExamplesShown = false;

if(document.querySelector('.menu-box .showExamples')){
showExamples.addEventListener('click', function () {
  if (isExamplesShown === false) {
    for (var i = 0; i < examples.length; i++) {
      examples[i].style.display = "block";
examples[i].style.animation = "fade-in-for-examples 0.5s ease-in-out";
    }
    isExamplesShown = true;
  } else {
    for (var i = 0; i < examples.length; i++) {
examples[i].style.animation = "fade-out-for-examples 0.3s ease-in-out";
setTimeout(function(index){
      examples[index].style.display = "none";
}, 300, i);
    }
    isExamplesShown = false;
  }
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

// Get the elements by their class names
const mTitles = document.getElementsByClassName("m-titles");
const sTitles = document.getElementsByClassName("s-titles");
const items = document.getElementsByClassName("items");
const tables = document.getElementsByTagName("table");
const th = document.getElementsByTagName("th");
const td = document.getElementsByTagName("td");
const icons = document.getElementsByClassName("icons");
const arI = document.getElementsByClassName("ar-i");
const arSt = document.getElementsByClassName("ar-st");
const enI = document.getElementsByClassName("en-i");
const enSt = document.getElementsByClassName("en-st");

// Apply the converted styles using the style property
for (let i = 0; i < mTitles.length; i++) {
  mTitles[i].style.backgroundColor = "var(--dark-bg-color)";
  mTitles[i].style.color = "var(--fg-color)";
  mTitles[i].style.fontFamily = "ibm plex sans arabic";
  mTitles[i].style.fontWeight = "500";
  mTitles[i].style.border = "none";
  mTitles[i].style.borderTop = "2px solid white";
  mTitles[i].style.fontSize = "12px";
}

for (let i = 0; i < sTitles.length; i++) {
  sTitles[i].style.backgroundColor = "var(--bg-color)";
  sTitles[i].style.color = "var(--fg-color)";
  sTitles[i].style.fontFamily = "markazi-text";
  sTitles[i].style.borderTop = "2px solid white";
  sTitles[i].style.fontSize = "15px";
}

for (let i = 0; i < items.length; i++) {
  items[i].style.fontFamily = "katibeh";
  items[i].style.backgroundColor = "var(--fg-color)";
  items[i].style.color = "var(--bg-color)";
  items[i].style.fontSize = "14.5px";
}

for (let i = 0; i < tables.length; i++) {
  tables[i].style.margin = "auto";
  tables[i].style.borderRadius = "30px 5px";
  tables[i].style.border = "6px double white";
  tables[i].style.width = "100%";
}

for (let i = 0; i < th.length; i++) {
  th[i].style.borderCollapse = "collapse";
  th[i].style.padding = "10px";
}

for (let i = 0; i < td.length; i++) {
  td[i].style.borderCollapse = "collapse";
  td[i].style.padding = "10px";
}

for (let i = 0; i < icons.length; i++) {
  icons[i].style.fontFamily = "icons";
}

for (let i = 0; i < arI.length; i++) {
  arI[i].style.borderRight = "2px white solid";
}

for (let i = 0; i < arSt.length; i++) {
  arSt[i].style.borderRight = "2px white solid";
}

for (let i = 0; i < enI.length; i++) {
  enI[i].style.borderLeft = "2px white solid";
}

for (let i = 0; i < enSt.length; i++) {
  enSt[i].style.borderLeft = "2px white solid";
}