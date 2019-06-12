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

let owlAvatar = () => {
    avatar = 1;
    defineOffset(1);
    document.getElementById("intro").style.display = "none";
    document.getElementById("menu").style.display = "block";
}
let catAvatar = () => {
    avatar = 2;
    defineOffset(2);
    document.getElementById("intro").style.display = "none";
    document.getElementById("menu").style.display = "block";
}
let butterAvatar = () => {
    avatar = 3;
    defineOffset(3);
    document.getElementById("intro").style.display = "none";
    document.getElementById("menu").style.display = "block";
}
let parrotAvatar = () => {
    avatar = 4;
    defineOffset(4);
    document.getElementById("intro").style.display = "none";
    document.getElementById("menu").style.display = "block";
}
const inviteScreen = () => {
    document.getElementById("menu").style.display = "none";
    document.getElementById("inhouse").style.display = "block";
    addFriend();
    let addFriend = () => {
        let friends = [];
        document.getElementById("friendAdd").addEventListener("click", addF);
        let addF = () => {
        let name = document.getElementById("friendInvite").value;
        friends.push({nombre: name, imagen:""});
        if (friends.length === 3){
            document.getElementById("friendAdd").disabled = true;
        }
        let li = document.createElement("li");
        let node = document.createTextNode(name);
        li.appendChild(node);
        document.getElementById("friendList").appendChild(li);
        //.getElementById("friendList").innerHTML ="Tus amigos:<br>" + document.getElementById("friendInvite").value + "</br>";
        erase();
        }
       let erase = () => {
        document.getElementById("friendInvite").value = " ";
        }
     }
}
let backToMenu = () => {
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
}
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
}
let codeScreen = () => {
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
}  
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
}

document.getElementById("owl").addEventListener("click", owlAvatar);
document.getElementById("cat").addEventListener("click", catAvatar);
document.getElementById("butter").addEventListener("click", butterAvatar);
document.getElementById("parrot").addEventListener("click", parrotAvatar);
document.getElementById("inviteScreen").addEventListener("click", inviteScreen);
document.getElementById("codeScreen").addEventListener("click", codeScreen);
document.getElementById("decodeScreen").addEventListener("click", decodeScreen);
document.getElementById("menuB").addEventListener("click", backToMenu);
document.getElementById("menuB1").addEventListener("click", backToMenu);



