var cont = 0;
document.getElementById("btnAdicionarParagrafo").addEventListener("click", function () {
    var novoParagrafo = document.createElement("p");// <p></p>
    novoParagrafo.innerHTML = "Novo parágrafo adicionado. " + cont; //<p>Novo parágrafo adicionado.</p>
    document.body.appendChild(novoParagrafo);//ele esta adicionando o novo parágrafo no body 
    cont++;
});


document.getElementById("btnTrocarImagem").addEventListener("click", function () {
    document.getElementById("imagem").setAttribute("src", "imagem2.jpg");
});

document.getElementById("btnOcultar").addEventListener("click", function () {
    document.getElementById("paragrafo").style.display = "none";
});

document.getElementById("btnExibir").addEventListener("click", function () {
    document.getElementById("paragrafo").style.display = "block";
});

document.getElementById("btnMudarCor").addEventListener("click", function () {
    document.getElementById("titulo").style.color = "red";
});