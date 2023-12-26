var theYearDate = document.querySelector('.theYearDate');

theYearDate.innerHTML = "١٤٤٥ - ٢٠٢٣";
theYearDate.setAttribute('datetime', '2023');

/* ----- Grade 10 ----- */

function Grade10(){
var keywords = document.querySelector('meta[name="keywords"]');

var seoTitles = document.querySelectorAll('meta[name="title"], meta[property="og:title"], meta[name="twitter:title"]');
var titleTag = document.querySelector('title');

var seoDescriptions = document.querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]');

if (document.body.classList.contains('grade10')){
keywords.setAttribute('content', 'الساحة العلمية,قاموس,قاموس MG,أول ثانوي, Mega Goal 3');

if (document.body.classList.contains('unit1')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة الأولى - أول ثانوي - Mega Goal 1.1 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة الأولى Mega Goal 1.1 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة الأولى - أول ثانوي - Mega Goal 1.1 | الساحة العلمية";
}

else if (document.body.classList.contains('unit2')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة الأولة - أول ثانوي - Mega Goal 1.1 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة الأولة Mega Goal 1.1 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة الأولة - أول ثانوي - Mega Goal 1.1 | الساحة العلمية";
}

else if (document.body.classList.contains('unit3')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة الأولة - أول ثانوي - Mega Goal 1.1 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة الأولة Mega Goal 1.1 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة الأولة - أول ثانوي - Mega Goal 1.1 | الساحة العلمية";
}

else if (document.body.classList.contains('unit4')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة الرابعة - أول ثانوي - Mega Goal 1.1 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة الرابعة Mega Goal 1.1 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة الرابعة - أول ثانوي - Mega Goal 1.1 | الساحة العلمية";
}

else if (document.body.classList.contains('unit5')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة الخامسة - أول ثانوي - Mega Goal 1.2 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة الخامسة Mega Goal 1.2 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة الخامسة - أول ثانوي - Mega Goal 1.2 | الساحة العلمية";
}
else if (document.body.classList.contains('unit6')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة السادسة - أول ثانوي - Mega Goal 1.2 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة السادسة Mega Goal 1.2 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة السادسة - أول ثانوي - Mega Goal 1.2 | الساحة العلمية";
}
else if (document.body.classList.contains('unit7')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة السابعة - أول ثانوي - Mega Goal 1.2 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة السابعة Mega Goal 1.2 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة السابعة - أول ثانوي - Mega Goal 1.2 | الساحة العلمية";
}
else if (document.body.classList.contains('unit8')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة الثامنة - أول ثانوي - Mega Goal 1.2 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة الثامنة Mega Goal 1.2 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة الثامنة - أول ثانوي - Mega Goal 1.2 | الساحة العلمية";
}
else if (document.body.classList.contains('unit9')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة التاسعة - أول ثانوي - Mega Goal 1.3 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة التاسعة Mega Goal 1.3 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة التاسعة - أول ثانوي - Mega Goal 1.3 | الساحة العلمية";
}
else if (document.body.classList.contains('unit10')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة العاشرة - أول ثانوي - Mega Goal 1.3 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة العاشرة Mega Goal 1.3 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة العاشرة - أول ثانوي - Mega Goal 1.3 | الساحة العلمية";
}
else if (document.body.classList.contains('unit11')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة الحادية عشرة - أول ثانوي - Mega Goal 1.3 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة الحادية عشرة Mega Goal 1.3 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة الحادية عشرة - أول ثانوي - Mega Goal 1.3 | الساحة العلمية";
}
else if (document.body.classList.contains('unit12')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة الثانية عشرة - أول ثانوي - Mega Goal 1.3 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة الثانية عشرة Mega Goal 1.3 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة الثانية عشرة - أول ثانوي - Mega Goal 1.3 | الساحة العلمية";
}
}
}
Grade10();

/* ----- Grade 11 ----- */

function Grade11(){
var keywords = document.querySelector('meta[name="keywords"]');

var seoTitles = document.querySelectorAll('meta[name="title"], meta[property="og:title"], meta[name="twitter:title"]');
var titleTag = document.querySelector('title');

var seoDescriptions = document.querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]');

if (document.body.classList.contains('grade11')){
keywords.setAttribute('content', 'الساحة العلمية,قاموس,قاموس MG,ثاني ثانوي, Mega Goal 3');

if (document.body.classList.contains('unit1')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة الأولى - ثاني ثانوي - Mega Goal 2.1 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة الأولى Mega Goal 2.1 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة الأولى - ثاني ثانوي - Mega Goal 2.1 | الساحة العلمية";
}

else if (document.body.classList.contains('unit2')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة الثانية - ثاني ثانوي - Mega Goal 2.1 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة الثانية Mega Goal 2.1 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة الثانية - ثاني ثانوي - Mega Goal 2.1 | الساحة العلمية";
}

else if (document.body.classList.contains('unit3')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة الثانية - ثاني ثانوي - Mega Goal 2.1 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة الثانية Mega Goal 2.1 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة الثانية - ثاني ثانوي - Mega Goal 2.1 | الساحة العلمية";
}

else if (document.body.classList.contains('unit4')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة الرابعة - ثاني ثانوي - Mega Goal 2.1 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة الرابعة Mega Goal 2.1 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة الرابعة - ثاني ثانوي - Mega Goal 2.1 | الساحة العلمية";
}

else if (document.body.classList.contains('unit5')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة الخامسة - ثاني ثانوي - Mega Goal 2.2 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة الخامسة Mega Goal 2.2 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة الخامسة - ثاني ثانوي - Mega Goal 2.2 | الساحة العلمية";
}
else if (document.body.classList.contains('unit6')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة السادسة - ثاني ثانوي - Mega Goal 2.2 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة السادسة Mega Goal 2.2 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة السادسة - ثاني ثانوي - Mega Goal 2.2 | الساحة العلمية";
}
else if (document.body.classList.contains('unit7')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة السابعة - ثاني ثانوي - Mega Goal 2.2 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة السابعة Mega Goal 2.2 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة السابعة - ثاني ثانوي - Mega Goal 2.2 | الساحة العلمية";
}
else if (document.body.classList.contains('unit8')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة الثامنة - ثاني ثانوي - Mega Goal 2.2 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة الثامنة Mega Goal 2.2 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة الثامنة - ثاني ثانوي - Mega Goal 2.2 | الساحة العلمية";
}
else if (document.body.classList.contains('unit9')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة التاسعة - ثاني ثانوي - Mega Goal 2.3 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة التاسعة Mega Goal 2.3 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة التاسعة - ثاني ثانوي - Mega Goal 2.3 | الساحة العلمية";
}
else if (document.body.classList.contains('unit10')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة العاشرة - ثاني ثانوي - Mega Goal 2.3 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة العاشرة Mega Goal 2.3 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة العاشرة - ثاني ثانوي - Mega Goal 2.3 | الساحة العلمية";
}
else if (document.body.classList.contains('unit11')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة الحادية عشرة - ثاني ثانوي - Mega Goal 2.3 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة الحادية عشرة Mega Goal 2.3 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة الحادية عشرة - ثاني ثانوي - Mega Goal 2.3 | الساحة العلمية";
}
else if (document.body.classList.contains('unit12')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة الثانية عشرة - ثاني ثانوي - Mega Goal 2.3 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة الثانية عشرة Mega Goal 2.3 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة الثانية عشرة - ثاني ثانوي - Mega Goal 2.3 | الساحة العلمية";
}
}
}
Grade11();

/* ----- Grade 12 ----- */

function Grade12(){
var keywords = document.querySelector('meta[name="keywords"]');

var seoTitles = document.querySelectorAll('meta[name="title"], meta[property="og:title"], meta[name="twitter:title"]');
var titleTag = document.querySelector('title');

var seoDescriptions = document.querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]');

if (document.body.classList.contains('grade12')){
keywords.setAttribute('content', 'الساحة العلمية,قاموس,قاموس MG,ثالث ثانوي, Mega Goal 3');

if (document.body.classList.contains('unit1')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة الأولى - ثالث ثانوي - Mega Goal 3.1 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة الأولى Mega Goal 3.1 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة الأولى - ثالث ثانوي - Mega Goal 3.1 | الساحة العلمية";
}

else if (document.body.classList.contains('unit2')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة الثالثة - ثالث ثانوي - Mega Goal 3.1 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة الثالثة Mega Goal 3.1 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة الثالثة - ثالث ثانوي - Mega Goal 3.1 | الساحة العلمية";
}

else if (document.body.classList.contains('unit3')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة الثالثة - ثالث ثانوي - Mega Goal 3.1 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة الثالثة Mega Goal 3.1 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة الثالثة - ثالث ثانوي - Mega Goal 3.1 | الساحة العلمية";
}

else if (document.body.classList.contains('unit4')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة الرابعة - ثالث ثانوي - Mega Goal 3.1 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة الرابعة Mega Goal 3.1 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة الرابعة - ثالث ثانوي - Mega Goal 3.1 | الساحة العلمية";
}

else if (document.body.classList.contains('unit5')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة الخامسة - ثالث ثانوي - Mega Goal 3.2 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة الخامسة Mega Goal 3.2 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة الخامسة - ثالث ثانوي - Mega Goal 3.2 | الساحة العلمية";
}
else if (document.body.classList.contains('unit6')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة السادسة - ثالث ثانوي - Mega Goal 3.2 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة السادسة Mega Goal 3.2 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة السادسة - ثالث ثانوي - Mega Goal 3.2 | الساحة العلمية";
}
else if (document.body.classList.contains('unit7')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة السابعة - ثالث ثانوي - Mega Goal 3.2 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة السابعة Mega Goal 3.2 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة السابعة - ثالث ثانوي - Mega Goal 3.2 | الساحة العلمية";
}
else if (document.body.classList.contains('unit8')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة الثامنة - ثالث ثانوي - Mega Goal 3.2 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة الثامنة Mega Goal 3.2 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة الثامنة - ثالث ثانوي - Mega Goal 3.2 | الساحة العلمية";
}
else if (document.body.classList.contains('unit9')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة التاسعة - ثالث ثانوي - Mega Goal 3.3 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة التاسعة Mega Goal 3.3 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة التاسعة - ثالث ثانوي - Mega Goal 3.3 | الساحة العلمية";
}
else if (document.body.classList.contains('unit10')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة العاشرة - ثالث ثانوي - Mega Goal 3.3 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة العاشرة Mega Goal 3.3 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة العاشرة - ثالث ثانوي - Mega Goal 3.3 | الساحة العلمية";
}
else if (document.body.classList.contains('unit11')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة الحادية عشرة - ثالث ثانوي - Mega Goal 3.3 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة الحادية عشرة Mega Goal 3.3 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة الحادية عشرة - ثالث ثانوي - Mega Goal 3.3 | الساحة العلمية";
}
else if (document.body.classList.contains('unit12')){
seoTitles.forEach(function(seoTitle){
seoTitle.setAttribute('content', 'مفردات وتعبيرات الوحدة الثانية عشرة - ثالث ثانوي - Mega Goal 3.3 | الساحة العلمية');
});
seoDescriptions.forEach(function(seoDescription){
seoDescription.setAttribute('content', 'مفردات وتعبيرات الوحدة الثانية عشرة Mega Goal 3.3 مترجمة بحسب استخدامها في المنهج | مقدمة من الساحة العلمية');
});
titleTag.innerHTML = "مفردات وتعبيرات الوحدة الثانية عشرة - ثالث ثانوي - Mega Goal 3.3 | الساحة العلمية";
}
}
}
Grade12();