const frm = document.querySelector("form");
const resp = document.querySelector("h3");
const btnDese = document.getElementById("btnDese"); // Uncommented and selected the button

let criptoglobal = ""; // This will hold our encrypted phrase

frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevents the form from submitting normally

    let criptoPar = "";   // Will hold characters from original even indices
    let criptoImpar = ""; // Will hold characters from original odd indices

    const frase = frm.inFrase.value; // Get the phrase from the input field

    // Loop to separate characters into 'even' and 'odd' index groups
    for (let i = 0; i < frase.length; i++) { // Declared 'i' with 'let'
        if (i % 2 === 0) { // If the index is even
            criptoPar += frase[i];
        } else { // If the index is odd
            criptoImpar += frase[i];
        }
    }

    // Concatenate the two parts to form the final encrypted phrase
    criptoglobal = criptoPar + criptoImpar;

    // Display the encrypted phrase
    resp.innerText = `Frase Criptografada: ${criptoglobal}`;
});

frm.addEventListener("reset", () => {
    resp.innerText = ""; // Clear the display
    frm.inFrase.focus(); // Set focus back to the input field
    criptoglobal = ""; // Clear the global encrypted string on reset
});

// Event listener for the decrypt button
btnDese.addEventListener("click", () => {
    // Check if there's an encrypted phrase to decrypt
    if (!criptoglobal) {
        alert("Nenhuma frase criptografada para descriptografar!");
        return; // Stop if there's nothing to decrypt
    }

    // Determine the lengths of the 'even' and 'odd' parts from the original phrase
    // Math.ceil for 'even' part because if length is odd, the even part has one more char
    const lenPar = Math.ceil(criptoglobal.length / 2);
    // The rest of the string belongs to the 'odd' part
    const lenImpar = criptoglobal.length - lenPar;

    // Extract the 'even' and 'odd' parts from the encrypted string
    const parteCriptoPar = criptoglobal.substring(0, lenPar);
    const parteCriptoImpar = criptoglobal.substring(lenPar);

    let fraseDescriptografada = "";
    let idxPar = 0;   // Index for characters in parteCriptoPar
    let idxImpar = 0; // Index for characters in parteCriptoImpar

    // Reconstruct the original phrase by alternating characters
    // The loop runs for the total length of the original (and encrypted) phrase
    for (let i = 0; i < criptoglobal.length; i++) {
        if (i % 2 === 0) { // If the original index was even
            if (idxPar < parteCriptoPar.length) {
                fraseDescriptografada += parteCriptoPar[idxPar];
                idxPar++;
            }
        } else { // If the original index was odd
            if (idxImpar < parteCriptoImpar.length) {
                fraseDescriptografada += parteCriptoImpar[idxImpar];
                idxImpar++;
            }
        }
    }

    // Display the decrypted phrase
    resp.innerText = `Frase Descriptografada: ${fraseDescriptografada}`;
});
//codigo fornecido pelo gemini, funcionou perfeitamente