
window.cipher = {
    encode: function(x, y){
        let arr = [];
    for (let i = 0; i < x.length; i++) {
        if (x.charCodeAt(i) === 32) {
        arr.push(" ");
        } else if (x.charCodeAt(i) === 46){
        arr.push(".");
        } else if (x.charCodeAt(i) === 44){
        arr.push(",");
        } else if (x.charCodeAt(i) === 59){
        arr.push(";");
        } else if (x.charCodeAt(i) === 58){
        arr.push(":");
        } else if (x.charCodeAt(i) === 63){
        arr.push("?");
        } else if (x.charCodeAt(i) === 33){
        arr.push("!");
        } else if (x.charCodeAt(i) < 97) {
        let asc =  (x.charCodeAt(i)- 65 + y)%26+65;  
        arr.push(String.fromCharCode(asc));
        } else if (x.charCodeAt(i) >= 97 ){
        let asc = (x.charCodeAt(i)-97 + y)%26+97;
        arr.push(String.fromCharCode(asc));
        }
    } 
    let ciphered = arr.join("");
    return ciphered;
},
    decode: function(x,y){
        let arr = [];
        for (let i = 0; i < x.length; i++) {
            if (x.charCodeAt(i) === 32) {
            arr.push(" ");
            } else if (x.charCodeAt(i) === 46){
            arr.push(".");
            } else if (x.charCodeAt(i) === 44){
            arr.push(",");
            } else if (x.charCodeAt(i) === 59){
            arr.push(";");
            } else if (x.charCodeAt(i) === 58){
            arr.push(":");
            } else if (x.charCodeAt(i) === 63){
            arr.push("?");
            } else if (x.charCodeAt(i) === 33){
            arr.push("!");
            } else if (x.charCodeAt(i) === 168){
            arr.push("¿");
            } else if (x.charCodeAt(i) < 97) {
            let asc =  (x.charCodeAt(i)- 65 - y)%26+65;  
            arr.push(String.fromCharCode(asc));
            } else if (x.charCodeAt(i) >= 97) {
            let asc = (x.charCodeAt(i)- 97 - y)%26+97;
            arr.push(String.fromCharCode(asc));
            }
        }
        let deciphered = arr.join("");
        return deciphered;
    }
};
