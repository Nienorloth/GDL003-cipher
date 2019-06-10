let avatar = 0;
let y = 0;
let x = document.getElementById("input").value;
const offOwl = document.getElementById("offowl");
const offCat = document.getElementById("offcat");
const offButter = document.getElementById("offbutter");
const offParrot = document.getElementById("offParrot");
let friend = document.getElementById("friendInvite").value;
document.getElementById("owl").addEventListener("click", owlAvatar);
document.getElementById("cat").addEventListener("click", catAvatar);
document.getElementById("butter").addEventListener("click", butterAvatar);
document.getElementById("parrot").addEventListener("click", parrotAvatar);
document.getElementById("inviteScreen").addEventListener("click", inviteScreen);
document.getElementById("codeScreen").addEventListener("click", codeScreen);
document.getElementById("decodeScreen").addEventListener("click", decodeScreen);
document.getElementById("menuB").addEventListener("click", backToMenu);
document.getElementById("menuB1").addEventListener("click", backToMenu);

function owlAvatar(){
    avatar = 1;
    defineOffset(1);
    document.getElementById("intro").style.display = "none";
    document.getElementById("menu").style.display = "block";
}
function catAvatar(){
    avatar = 2;
    defineOffset(2);
    document.getElementById("intro").style.display = "none";
    document.getElementById("menu").style.display = "block";
}
function butterAvatar(){
    avatar = 3;
    defineOffset(3);
    document.getElementById("intro").style.display = "none";
    document.getElementById("menu").style.display = "block";
}
function parrotAvatar(){
    avatar = 4;
    defineOffset(4);
    document.getElementById("intro").style.display = "none";
    document.getElementById("menu").style.display = "block";
}
function inviteScreen(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("inhouse").style.display = "block";
    addFriend();
}
function backToMenu(){
    document.getElementById("intro").style.display = "none";
    document.getElementById("inhouse").style.display = "none";
    document.getElementById("mjs").style.display = "none";
    document.getElementById("menu").style.display = "block";
    if (avatar === 1){
        offCat.style.display="inline";
        offButter.style.display="inline"; 
        offParrot.style.display="inline"; 
    } else if (avatar === 2){
        offButter.style.display="inline";
        offOwl.style.display="inline";
        offParrot.style.display="inline"; 
    } else if (avatar === 3){
        offCat.style.display="inline";
        offOwl.style.display="inline"; 
        offParrot.style.display="inline"; 
    } else if (avatar === 4){
        offCat.style.display="inline";
        offOwl.style.display="inline"; 
        offButter.style.display="inline";
    }
    document.getElementById("friendInvite").value = " ";
    document.getElementById("input").value = " ";
    document.getElementById("output").value = " ";
}
function defineOffset(avatar){
    console.log(avatar)
    if (avatar === 1){
    offOwl.style.display="none";
    offCat.addEventListener("click", () => {
        y = 3;
        input.style.display="block";
        output.style.display="block";
        submit1.style.display="block";
        submit2.style.display="block";
        offButter.style.display="none";
        offParrot.style.display="none";
        });
     offButter.addEventListener("click", () => {
        y = 5;
        input.style.display="block";
        output.style.display="block";
        submit1.style.display="block";
        submit2.style.display="block";
        offCat.style.display="none";
        offParrot.style.display="none";
        });
    offParrot.addEventListener("click", () => {
        y = 7;
        input.style.display="block";
        output.style.display="block";
        submit1.style.display="block";
        submit2.style.display="block";
        offCat.style.display="none";
        offButter.style.display="none";
    });
    } else if (avatar === 2){
    offCat.style.display="none";
    offOwl.addEventListener("click", () => {
        y = 3;
        input.style.display="block";
        output.style.display="block";
        submit1.style.display="block";
        submit2.style.display="block";
        offButter.style.display="none";
        offParrot.style.display="none";
        });
     offButter.addEventListener("click", () => {
        y = 9;
        input.style.display="block";
        output.style.display="block";
        submit1.style.display="block";
        submit2.style.display="block";
        offOwl.style.display="none";
        offParrot.style.display="none";
        });
    offParrot.addEventListener("click", () => {
        y = 4
        input.style.display="block";
        output.style.display="block";
        submit1.style.display="block";
        submit2.style.display="block";
        offOwl.style.display="none";
        offButter.style.display="none";
        });
    } else if (avatar === 3){
    offButter.style.display="none";
    offOwl.addEventListener("click", () => {
        y = 5;
        input.style.display="block";
        output.style.display="block";
        submit1.style.display="block";
        submit2.style.display="block";
        offCat.style.display="none";
        offParrot.style.display="none";
        });
     offCat.addEventListener("click", () => {
        y = 9;
        input.style.display="block";
        output.style.display="block";
        submit1.style.display="block";
        submit2.style.display="block";
        offOwl.style.display="none";
        offParrot.style.display="none";
        });
    offParrot.addEventListener("click", () => {
        y = 6;
        input.style.display="block";
        output.style.display="block";
        submit1.style.display="block";
        submit2.style.display="block";
        offOwl.style.display="none";
        offCat.style.display="none";
        });
} else if (avatar === 4){
    offParrot.style.display="none";
    offOwl.addEventListener("click", () => {
        y = 7;
        input.style.display="block";
        output.style.display="block";
        submit1.style.display="block";
        submit2.style.display="block";
        offCat.style.display="none";
        offButter.style.display="none";
        });
     offCat.addEventListener("click", () => {
        y = 4;
        input.style.display="block";
        output.style.display="block";
        submit1.style.display="block";
        submit2.style.display="block";
        offOwl.style.display="none";
        offButter.style.display="none";
        });
    offButter.addEventListener("click", () => {
        y = 6;
        input.style.display="block";
        output.style.display="block";
        submit1.style.display="block";
        submit2.style.display="block";
        offOwl.style.display="none";
        offCat.style.display="none";
        });
    }
}
function codeScreen(){
    debugger;
    defineOffset();
    submit1.value = "Cifrar";
    document.getElementById("menu").style.display = "none";
    document.getElementById("mjs").style.display = "block";
    document.getElementById("m1").innerHTML = "¿A quién enviarás el mensaje cifrado?";
    document.getElementById("input").placeholder = "Escribe aquí tu mensaje sin usar acentos ni la letra ñ";
    document.getElementById("output").placeholder = "Aquí se mostrará tu mensaje descifrado";
    submit1.addEventListener("click", () => {
    document.getElementById("output").innerHTML = window.cipher.encode();
    });  
 }
function decodeScreen(){
    defineOffset();
    submit1.value = "Descifrar";
    document.getElementById("menu").style.display = "none";
    document.getElementById("mjs").style.display = "block";
    document.getElementById("m1").innerHTML = "¿Quién te envió el mensaje?";
    document.getElementById("input").placeholder = "Escribe aquí tu mensaje cifrado";
    document.getElementById("output").placeholder = "Aquí se mostrará tu mensaje descifrado";
    submit1.addEventListener("click", () => {
    document.getElementById("output").innerHTML = window.cipher.decode();
    });  
}
function addFriend(){
    let friends = [];
    document.getElementById("fsubmit").addEventListener("click", addF);

    function addF(){
    let name = document.getElementById("friendInvite").value
    friends.push({nombre: name, imagen: ""});
    if (friends.length === 3){
        document.getElementById("fsubmit").disabled = true;
    }
    let friendList = document.getElementById("friendList");
    let li = document.createElement("li");
    let node = document.createTextNode(name);
    li.appendChild(node);
    document.getElementById("friendList").appendChild(li);
    //.getElementById("friendList").innerHTML ="Tus amigos:<br>" + document.getElementById("friendInvite").value + "</br>";
    erase();
    }
    function erase(){
    document.getElementById("friendInvite").value = " ";
    }
 }

 /*
 if (friends.length >= 3){
    friendInvite.style.display="none";
    fsubmit.style.display="none";
 }
 while (friends.length <= 3);
if (friends.length = 3){
    friendInvite.style.display="none";
    fsubmit.style.display="none";
}*/