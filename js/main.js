document.getElementsByClassName("btn")[0].addEventListener("click", show);

function show(){
    var c = document.getElementsByClassName("popup")
    c[0].classList.remove("hide");
    c[0].classList.add("show");
}

function hide_popup() {
    var c = document.getElementsByClassName("popup")
    c[0].classList.remove("show");
    c[0].classList.add("hide");
}