let userLang = navigator.language || navigator.userLanguage;

let langEn = document.querySelectorAll('.langEn');
let langRu = document.querySelectorAll('.langRu');
let buttonRu = document.getElementById('langRu');
let buttonEn = document.getElementById('langEn');
let backToTop = document.getElementById("back-to-top");
let buttonRuCyrcle = document.getElementById("langRuButton"); 
let buttonEnCyrcle = document.getElementById("langEnButton"); 

if (userLang.toLowerCase().indexOf('ru') !== -1) {
    langEn.forEach(function(entry) {
        entry.classList.add('visibility');
    });
    buttonRu.classList.add('colorPressButton');
    buttonRu.classList.remove('button');
    backToTop.title = "Вернуться наверх";
    buttonEnCyrcle.classList.add('visibility');

} else if (userLang.toLowerCase().indexOf('en') !== -1) {

    langRu.forEach(function(entry) {
        entry.classList.add('visibility');
    });
    buttonEn.classList.add('colorPressButton');
    buttonEn.classList.remove('button');
    backToTop.title = "Back to top";
    buttonRuCyrcle.classList.add('visibility');
    
}

buttonRu.addEventListener('click', function() {

    langEn.forEach(function(entry) {
        entry.classList.add('visibility');
    });
    langRu.forEach(function(entry) {
        entry.classList.remove('visibility');
    });
    buttonRu.classList.add('colorPressButton');
    buttonRu.classList.remove('button');
    buttonEn.classList.add('button');
    buttonEn.classList.remove('colorPressButton');
    backToTop.title = "Вернуться наверх";
    buttonEnCyrcle.classList.add('visibility');
    buttonRuCyrcle.classList.remove('visibility');

});

buttonEn.addEventListener('click', function() {
    
    langRu.forEach(function(entry) {
        entry.classList.add('visibility');
    });
    langEn.forEach(function(entry) {
        entry.classList.remove('visibility');
    });
    buttonEn.classList.add('colorPressButton');
    buttonEn.classList.remove('button');
    buttonRu.classList.add('button');
    buttonRu.classList.remove('colorPressButton');
    backToTop.title = "Back to top";
    buttonRuCyrcle.classList.add('visibility');
    buttonEnCyrcle.classList.remove('visibility');
    
});