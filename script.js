
function shortText() {
var element = document.querySelectorAll('.card-text');
var i;
for(i=0; i < element.length; i++) {
    var originalText = element[i].innerHTML;
    var newText =originalText.substring(0,180);
    element[i].innerHTML = newText + "...";
    }
}

shortText();