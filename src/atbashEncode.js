export const atbashEncode = (str) => {
    let atbashCode = 0;
    let strOut = "";
    for(var i = 0; i < str.length; i++){
        var c = str[i];
        if (c.match(/[a-z]/i)) {
            let code = str.charCodeAt(i)
            if ((code >= 65) && (code <= 90)){
                code = code - 65;
                atbashCode = (26 - code + 25)%26 + 65;
                c = String.fromCharCode(atbashCode);
            }
            // Lowercase letters
            else if ((code >= 97) && (code <= 122)){
                code = code - 97;
                atbashCode = (26 - code + 25)%26 + 97;
                c = String.fromCharCode(atbashCode);
            }
        }
        strOut += c;
    }
    return strOut;
}
