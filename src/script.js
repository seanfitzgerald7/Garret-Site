var index = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    index++;
    if (index > x.length) { index = 1 }
    x[index-1].style.display = "block";
    setTimeout(carousel, 6000);
}

function mainFunc() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("show") == -1) {
        x.className += "show";
    } else {
        x.className = x.className.replace("show", "")
    }
}