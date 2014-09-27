function hover(element) {
    var src = element.getAttribute("src");
    var index = src.indexOf(".png");
    var newsrc = src.substring(0, index) + "_focus.png";
    element.setAttribute('src', newsrc);
}
function unhover(element) {
    var src = element.getAttribute("src");
    var index = src.indexOf("_focus.png");
    var newsrc = src.substring(0, index) + ".png";
    element.setAttribute('src', newsrc);
}