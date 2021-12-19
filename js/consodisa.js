window.oncontextmenu = function () {
    return false;
};

document.addEventListener("keydown", function(event){
    var key = event.key || event.keyCode;

    if (key == 123) {
        console.warn("testett"),
        return false;
    } else if ((event.ctrlKey && event.shiftKey && key == 73) || (event.ctrlKey && event.shiftKey && key == 74)) {
        console.warn("testett"),
        return false;
    }
}, false);

//throw "Warning! You are not authorized to access the developer console of Shehan's website.";
