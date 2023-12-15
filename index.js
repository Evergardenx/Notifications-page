
let all = document.querySelectorAll("main div");
let dots = document.querySelectorAll("span.dot");
document.querySelector(".toogle").addEventListener("click", () => {
    document.querySelector(".alert").innerHTML = "0";
    for (a of all) {
        a.style.backgroundColor = "white";
        a.querySelector("div p span.dot").style.display = "none";
    }
})
function changeNum() {

    if (document.querySelector(".alert").innerHTML > 0) {
        document.querySelector(".alert").innerHTML = 
        document.querySelector(".alert").innerHTML - 1;    } 
    else {
        document.querySelector(".alert").innerHTML = 0;
    }
}
function bgChange(b) {
    document.getElementById(b).style.backgroundColor = "white";
}
function displayChange(c) {
    document.querySelector(c).style.display = "none";
}
for (a of all) {
    let didi = a.id;
    a.addEventListener("click", () => {
        bgChange(didi);
        displayChange("#" + didi + " div p span.dot");
        changeNum();
    }, { once: true })
}
