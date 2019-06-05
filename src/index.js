let avatar = 0;
let x = 0;
let y = 0;
const offOwl = document.getElementById("offowl");
const offCat = document.getElementById("offcat");
const offButter = document.getElementById("offbutter");

document.getElementById("owl").addEventListener("click", owlAvatar);
document.getElementById("cat").addEventListener("click", catAvatar);
document.getElementById("butter").addEventListener("click", butterAvatar);

function owlAvatar(){
    avatar = 1;
    alert("buho " + avatar);
    defineOffset(1);
}
function catAvatar(){
    avatar = 2;
    alert("gato " + avatar);
    defineOffset(2);
}
function butterAvatar(){
    avatar = 3;
    alert("mariposa " + avatar);
    defineOffset(3);
}

function defineOffset(avatar){
    console.log(avatar)
    if (avatar === 1){
    offOwl.style.display="none";
    offCat.addEventListener("click", () => {
        y = 3;
        alert("buho y gato " + y);
        });
     offButter.addEventListener("click", () => {
        y = 5;
        alert("buho y mariposa " +y);
        });
    } else if (avatar === 2){
    offCat.style.display="none";
    offOwl.addEventListener("click", () => {
        y = 3;
        alert("gato y buho " + y);
        });
     offButter.addEventListener("click", () => {
        y = 7;
        alert("gato y mariposa " + y);
        });
    } else if (avatar === 3){
    offButter.style.display="none";
    offOwl.addEventListener("click", () => {
        y = 5;
        alert("mariposa y buho " + y);
        });
     offCat.addEventListener("click", () => {
        y = 7;
        alert("mariposa y gato " + y);
        });
    }
}
