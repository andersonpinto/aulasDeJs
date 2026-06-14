const frm = document.querySelector("form");
const resp = document.querySelector("h3");
const btnDese = document.getElementById("btnDese");

// Holds the last encrypted string so we can decrypt it.
let lastEncrypted = "";

// Encrypt on submit
frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const frase = frm.inFrase.value;
  let evenChars = "";
  let oddChars = "";

  // Collect even‐indexed and odd‐indexed chars separately
  for (let i = 0; i < frase.length; i++) {
    if (i % 2 === 0) {
      evenChars += frase[i];
    } else {
      oddChars += frase[i];
    }
  }

  lastEncrypted = evenChars + oddChars;
  resp.innerText = lastEncrypted;
});

// Clear everything on reset
frm.addEventListener("reset", () => {
  resp.innerText = "";
  frm.inFrase.value = "";
  frm.inFrase.focus();
  lastEncrypted = "";
});

// Decrypt on btnDese click
btnDese.addEventListener("click", () => {
  if (!lastEncrypted) {
    resp.innerText = "Nothing to decrypt!";
    return;
  }

  // Split the encrypted into its two halves
  // If the original length was odd, the even‐part is one char longer.
  const totalLen = lastEncrypted.length;
  const half = Math.ceil(totalLen / 2);
  const evenChars = lastEncrypted.slice(0, half);
  const oddChars = lastEncrypted.slice(half);

  let decrypted = "";

  // Rebuild original by weaving them back together
  for (let i = 0; i < totalLen; i++) {
    if (i % 2 === 0) {
      decrypted += evenChars[i / 2 | 0];   // integer division
    } else {
      decrypted += oddChars[(i - 1) / 2 | 0];
    }
  }

  resp.innerText = decrypted;
});
// esse código fornecido pelo o4mini funcionou perfeitamente