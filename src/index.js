let avatar = 0;
let offset = 0;
const offOwl = document.getElementById("offowl");
const offCat = document.getElementById("offcat");
const offButter = document.getElementById("offbutter");
const offParrot = document.getElementById("offParrot");
const cifrar = document.getElementById("cifrar");
const paraCifrar = document.getElementById("paraCifrar");
const result = document.getElementById("result");
const copiar = document.getElementById("copiar");
const music = document.getElementById("music");

const music1 = () => {
    music.play();
  };

const owlPic = document.createElement("img");
owlPic.src= "imagenes/owl.JPG";
owlPic.setAttribute("height", "95px");
owlPic.setAttribute("width", "110px");

const catPic = document.createElement("img");
catPic.src= "imagenes/gato.JPG";
catPic.setAttribute("height", "95px");
catPic.setAttribute("width", "110px");

const butterPic = document.createElement("img");
butterPic.src= "imagenes/mariposa.JPG";
butterPic.setAttribute("height", "95px");
butterPic.setAttribute("width", "110px");

const parrotPic = document.createElement("img");
parrotPic.src= "imagenes/loro.JPG";
parrotPic.setAttribute("height", "95px");
parrotPic.setAttribute("width", "110px");

let owlAvatar = () => {
    avatar = 1;
    defineOffset(1);
    document.getElementById("intro").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("friend1").style.display = "none";
    document.getElementById("yourId").appendChild(owlPic);
    music1();
};
let catAvatar = () => {
    avatar = 2;
    defineOffset(2);
    document.getElementById("intro").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("friend2").style.display = "none";
    document.getElementById("yourId").appendChild(catPic);
    music1();
};
let butterAvatar = () => {
    avatar = 3;
    defineOffset(3);
    document.getElementById("intro").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("friend3").style.display = "none";
    document.getElementById("yourId").appendChild(butterPic);
    music1();
};
let parrotAvatar = () => {
    avatar = 4;
    defineOffset(4);
    document.getElementById("intro").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("friend4").style.display = "none";
    document.getElementById("yourId").appendChild(parrotPic);
    music1();
};
const inviteScreen = () => {
    document.getElementById("menu").style.display = "none";
    document.getElementById("inhouse").style.display = "block";
    let reset = () => {
        window.location.reload();
    };
    document.getElementById("changeId").addEventListener("click", reset);
    
    let addFriend = () => {
        let friends = [];
        let addF = () => {
        let name = document.getElementById("friendInvite").value;
        friends.push(name);
        if (friends.length === 3){
            document.getElementById("friendAdd").disabled = true;
            erase();
        }
        let li = document.createElement("li");
        let node = document.createTextNode(name);
        li.appendChild(node);
        document.getElementById("friendList").appendChild(li);
    };
        let friendOwl = () => {
        document.getElementById("forFriendList").appendChild(owlPic);
        document.getElementById("friend1").disabled = true;
        document.getElementById("friend1").style.backgroundColor="gray";
        };
        let friendCat = () => {
        document.getElementById("forFriendList").appendChild(catPic);
        document.getElementById("friend2").disabled = true;
        document.getElementById("friend2").style.backgroundColor="gray";
        };
        let friendButter = () => {
        document.getElementById("forFriendList").appendChild(butterPic);
        document.getElementById("friend3").disabled = true;
        document.getElementById("friend3").style.backgroundColor="gray";
        };
        let friendParrot = () => {
        document.getElementById("forFriendList").appendChild(parrotPic);
        document.getElementById("friend4").disabled = true;
        document.getElementById("friend4").style.backgroundColor="gray";
        };
        document.getElementById("friend1").addEventListener("click", friendOwl);
        document.getElementById("friend2").addEventListener("click", friendCat);
        document.getElementById("friend3").addEventListener("click", friendButter);
        document.getElementById("friend4").addEventListener("click", friendParrot);
        document.getElementById("friendAdd").addEventListener("click", addF);

    
        let erase = () => {
        document.getElementById("friendInvite").value = " ";
        };
     };

     addFriend();
};
let backToMenu = () => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("inhouse").style.display = "none";
    document.getElementById("mjs").style.display = "none";
    document.getElementById("menu").style.display = "block";
    paraCifrar.style.display="none";
    result.style.display="none";
    cifrar.style.display="none";
    copiar.style.display="none";
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
};
let defineOffset = (avatar) => {
    console.log(avatar);
    if (avatar === 1){
    offOwl.style.display="none";
    offCat.addEventListener("click", () => {
        offset = 15;
        console.log(offset);
        paraCifrar.style.display="block";
        result.style.display="block";
        cifrar.style.display="block";
        copiar.style.display="block";
        offButter.style.display="none";
        offParrot.style.display="none";
        });
     offButter.addEventListener("click", () => {
        offset = 21;
        console.log(offset);
        paraCifrar.style.display="block";
        result.style.display="block";
        cifrar.style.display="block";
        copiar.style.display="block";
        offCat.style.display="none";
        offParrot.style.display="none";
        });
    offParrot.addEventListener("click", () => {
        offset = 12;
        console.log(offset);
        paraCifrar.style.display="block";
        result.style.display="block";
        cifrar.style.display="block";
        copiar.style.display="block";
        offCat.style.display="none";
        offButter.style.display="none";
    });
    } else if (avatar === 2){
    offCat.style.display="none";
    offOwl.addEventListener("click", () => {
        offset = 15;
        console.log(offset);
        paraCifrar.style.display="block";
        result.style.display="block";
        cifrar.style.display="block";
        copiar.style.display="block";
        offButter.style.display="none";
        offParrot.style.display="none";
        });
     offButter.addEventListener("click", () => {
        offset = 9;
        console.log(offset);
        paraCifrar.style.display="block";
        result.style.display="block";
        cifrar.style.display="block";   
        copiar.style.display="block";
        offOwl.style.display="none";
        offParrot.style.display="none";
        });
    offParrot.addEventListener("click", () => {
        offset = 38;
        console.log(offset);
        paraCifrar.style.display="block";
        result.style.display="block";
        cifrar.style.display="block";
        copiar.style.display="block";
        offOwl.style.display="none";
        offButter.style.display="none";
        });
    } else if (avatar === 3){
    offButter.style.display="none";
    offOwl.addEventListener("click", () => {
        offset = 21;
        console.log(offset);
        paraCifrar.style.display="block";
        result.style.display="block";
        cifrar.style.display="block";
        copiar.style.display="block";
        offCat.style.display="none";
        offParrot.style.display="none";
        });
     offCat.addEventListener("click", () => {
        offset = 9;
        console.log(offset);
        paraCifrar.style.display="block";
        result.style.display="block";
        cifrar.style.display="block";
        copiar.style.display="block";
        offOwl.style.display="none";
        offParrot.style.display="none";
        });
    offParrot.addEventListener("click", () => {
        offset = 33;
        console.log(offset);
        paraCifrar.style.display="block";
        result.style.display="block";
        cifrar.style.display="block";
        copiar.style.display="block";
        offOwl.style.display="none";
        offCat.style.display="none";
        });
} else if (avatar === 4){
    offParrot.style.display="none";
    offOwl.addEventListener("click", () => {
        offset = 12;
        console.log(offset);
        paraCifrar.style.display="block";
        result.style.display="block";
        cifrar.style.display="block";
        copiar.style.display="block";
        offCat.style.display="none";
        offButter.style.display="none";
        });
     offCat.addEventListener("click", () => {
        offset = 38;
        console.log(offset);
        paraCifrar.style.display="block";
        result.style.display="block";
        cifrar.style.display="block";
        copiar.style.display="block";
        offOwl.style.display="none";
        offButter.style.display="none";
        });
    offButter.addEventListener("click", () => {
        offset = 33;
        console.log(offset);
        paraCifrar.style.display="block";
        result.style.display="block";
        cifrar.style.display="block";
        copiar.style.display="block";
        offOwl.style.display="none";
        offCat.style.display="none";
        });
        return offset;
    }
};
let codeScreen = () => {
    defineOffset();
    cifrar.value = "Cifrar";
    document.getElementById("menu").style.display = "none";
    document.getElementById("mjs").style.display = "block";
    document.getElementById("m1").innerHTML = "¿A quién enviarás el mensaje cifrado?";
    document.getElementById("paraCifrar").placeholder = "Escribe aquí tu mensaje sin usar acentos ni la letra ñ";
    document.getElementById("result").placeholder = "Aquí se mostrará tu mensaje descifrado";
    cifrar.addEventListener("click", () => {
        let message = document.getElementById("paraCifrar").value;
        console.log(offset);
        document.getElementById("result").innerHTML = window.cipher.encode(offset, message);
    });
    copiar.addEventListener("click", () => {
            const copT = document.getElementById("result");
            copT.select();
            document.execCommand("copy");
            alert("Copied the text: " + copT.value); 
    });
};
let decodeScreen = () => {
    cifrar.value = "Descifrar";
    document.getElementById("menu").style.display = "none";
    document.getElementById("mjs").style.display = "block";
    document.getElementById("m1").innerHTML = "¿Quién te envió el mensaje?";
    document.getElementById("paraCifrar").placeholder = "Escribe aquí tu mensaje cifrado";
    document.getElementById("result").placeholder = "Aquí se mostrará tu mensaje descifrado";
    cifrar.addEventListener("click", () => {
        let message = document.getElementById("paraCifrar").value;
        console.log(offset);
        document.getElementById("result").innerHTML = window.cipher.decode(offset, message);
    });  
    copiar.addEventListener("click", () => {
        const copT = document.getElementById("result");
        copT.select();
        document.execCommand("copy");
        alert("Copied the text: " + copT.value); 
});
};

document.getElementById("owl").addEventListener("click", owlAvatar);
document.getElementById("cat").addEventListener("click", catAvatar);
document.getElementById("butter").addEventListener("click", butterAvatar);
document.getElementById("parrot").addEventListener("click", parrotAvatar);
document.getElementById("inviteScreen").addEventListener("click", inviteScreen);
document.getElementById("codeScreen").addEventListener("click", codeScreen);
document.getElementById("decodeScreen").addEventListener("click", decodeScreen);
document.getElementById("menuB").addEventListener("click", backToMenu);
document.getElementById("menuB1").addEventListener("click", backToMenu);
