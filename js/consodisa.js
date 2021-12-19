window.oncontextmenu = function () {
    console.log("Hello, World!"),
    return false;
};

document.addEventListener("keydown", function(event){
    var key = event.key || event.keyCode;

    if (key == 123) {
        console.log("Hello, World!"),
        return false;
    } else if ((event.ctrlKey && event.shiftKey && key == 73) || (event.ctrlKey && event.shiftKey && key == 74)) {
        console.log("Hello, World!"),
        return false;
    }
}, false);

//throw "Warning! You are not authorized to access the developer console of Shehan's website.";
