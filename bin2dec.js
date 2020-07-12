function start() {
    let entrada = document.getElementById("texto");
    entrada.addEventListener("keyup", verifica, false)
    entrada.focus();
}

function verifica() {
    a = (document.getElementById("texto").value);
    for (var x = 0; x < a.length; x++) {
        if (a[x] != 0 && a[x] != 1) {
            alert("Numeros binario só podem conter 0 ou 1");
            a = a.replace(a[x], "");
            document.getElementById("texto").value = a;
        }
    }

    numero = parseInt(a, 2);
    if (isNaN(numero)) {
        document.getElementById("resposta").innerHTML = "";
    } else { document.getElementById("resposta").innerHTML = numero; }

}