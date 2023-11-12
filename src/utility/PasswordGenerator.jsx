function PasswordGenerator(checkBoxValues, passWordLength) {
    const symbols = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "_",
        "+",
        "-",
        "=",
        "{",
        "}",
        "[",
        "]",
        "|",
        "\\",
        ":",
        ";",
        '"',
        "'",
        "<",
        ",",
        ">",
        ".",
        "?",
        "~",
        "`",
    ];
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    let password = "";
    // Check length
    let length = passWordLength < 8 ? 8 : passWordLength;
    length = length > 20 ? 20 : length;
    let charTypes = [];
    for (const item in checkBoxValues) {
        if (checkBoxValues[item]) {
            charTypes.push(item);
        }
    }
    // Generate Password
    for (let i = 0; i < length; i++) {
        let char = '';
        // Select a random char from charTypes
        const charType = charTypes[Math.floor(Math.random()*charTypes.length)];
        // Now select a random character of this type
        if (charType === "Symbols") {
            char = symbols[Math.floor(Math.random()*symbols.length)];
        }
        else if (charType === "Number") {
            char = Math.floor(Math.random()*10);
        }
        else if (charType === "Lowercase") {
            char = lowerCase.charAt(Math.floor(Math.random()*lowerCase.length));
        }
        else {
            char = upperCase.charAt(Math.floor(Math.random()*lowerCase.length));
        }
        // Append char to password
        password = password+char;
    }
    return password;
}

export default PasswordGenerator;
