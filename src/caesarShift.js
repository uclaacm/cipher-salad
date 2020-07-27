export const caesarShift = (plaintext, offset) => {
    var c;
    let cipher = ""
    let char;
    for (var p = 0; p < plaintext.length; p++) {
      char = plaintext[p];
      if (char.match(/[a-z]/i)) {
        c = (plaintext.charCodeAt(p) + offset)
        while (c < 65) c += 26;
        while (c > 90) c -= 26;
        char = String.fromCharCode(c)
      }
      cipher += char;
    }
    return cipher;
  }