// O usuário pode criar uma nota
// O usuário pode editar uma nota
// O usuário pode excluir uma nota
// Ao fechar a janela do navegador as notas serão armazenadas e quando o Usuário retornar, os dados serão recuperados
let notescontainer = document.querySelector("#notescontainer")
let notas = document.getElementById("notas")
let criarnota = document.querySelectorAll("div.container button.but")[0]

criarnota.addEventListener("click", criarnovanota)
window.addEventListener("click", save)

function criarnovanota (){
    notas = document.getElementById("notas")
    let nota = document.createElement("div")
    nota.setAttribute("class", "note")
    notas.appendChild(nota)
    let titlenote = document.createElement("input")
    titlenote.setAttribute("type", "text")
    titlenote.setAttribute("class", "titlenote")
    titlenote.setAttribute("placeholder", "Titulo")
    nota.appendChild(titlenote)
    let textarea = document.createElement("textarea")
    textarea.setAttribute("name", "nota")
    textarea.setAttribute("class", "txt")
    textarea.setAttribute("cols", "40")
    textarea.setAttribute("rows", "8")
    nota.appendChild(textarea)
    let button = document.createElement("button")
    button.setAttribute("class", "del")
    button.setAttribute("onclick", "apagarnota(this)")
    nota.appendChild(button)
    let img = document.createElement("img")
    img.setAttribute("class", "lixo")
    img.setAttribute("src", "./Imagen/lixeira.png")
    button.appendChild(img)
}

function apagarnota (element){
    let estanota = element.parentNode
    let confirmar = confirm("Deseja realmente apagar esta nota?")

    if(confirmar == true){
        notas.removeChild(estanota)
    }
}

function save (){
    localStorage.setItem("notes", notas)
}

onload = function(){
    let containernotas = localStorage.getItem("notes")
    notas.innerHTML = containernotas
}





