
window.cipher = {
    encode: (offset, message) => {
        let arr = [];
    for (let i = 0; i < message.length; i++) {
        if (message.charCodeAt(i) === 32) {
        arr.push(" ");
        } else if (message.charCodeAt(i) === 46){
        arr.push(".");
        } else if (message.charCodeAt(i) === 44){
        arr.push(",");
        } else if (message.charCodeAt(i) === 59){
        arr.push(";");
        } else if (message.charCodeAt(i) === 58){
        arr.push(":");
        } else if (message.charCodeAt(i) === 63){
        arr.push("?");
        } else if (message.charCodeAt(i) === 33){
        arr.push("!");
        } else if (message.charCodeAt(i) < 97) {
        let asc =  (message.charCodeAt(i)- 65 + offset)%26+65;  
        arr.push(String.fromCharCode(asc));
        } else if (message.charCodeAt(i) >= 97 ){
        let asc = (message.charCodeAt(i)-97 + offset)%26+97;
        arr.push(String.fromCharCode(asc));
        }
    } 
    let ciphered = arr.join("");
    return ciphered;
},
    decode: (offset, message) => {
        let arr = [];
        for (let i = 0; i < message.length; i++) {
            if (message.charCodeAt(i) === 32) {
            arr.push(" ");
            } else if (message.charCodeAt(i) === 46){
            arr.push(".");
            } else if (message.charCodeAt(i) === 44){
            arr.push(",");
            } else if (message.charCodeAt(i) === 59){
            arr.push(";");
            } else if (message.charCodeAt(i) === 58){
            arr.push(":");
            } else if (message.charCodeAt(i) === 63){
            arr.push("?");
            } else if (message.charCodeAt(i) === 33){
            arr.push("!");
            } else if (message.charCodeAt(i) === 168){
            arr.push("¿");
            } else if (message.charCodeAt(i) < 97) {
            let asc =  (message.charCodeAt(i) + 65 - offset)%26 + 65;  
            arr.push(String.fromCharCode(asc));
            } else if (message.charCodeAt(i) >= 97) {
            let asc = (message.charCodeAt(i) + 97 - offset)%26 + 97;
            arr.push(String.fromCharCode(asc));
            }
        }
        let deciphered = arr.join("");
        return deciphered;
    }
};