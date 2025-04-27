let checkBox = document.getElementsByClassName("checkBox")
let btnAjouter = document.getElementById("btnAjouter")
let btnModifier = document.getElementById("btnModifier")
let btnSupprimer = document.getElementById("btnSupprimer")
let btnTout = document.getElementById("btnTout")
let btnNonTerminer = document.getElementById("btnNonTerminer")
let btnTerminer = document.getElementById("btnTerminer")
let inputAjouter = document.getElementById("inputAjouter")
let tachesFinis = document.getElementById("tachesFinis")
let tachesFinis2 = document.getElementById("tachesFinis2")
let tachesTotal = document.getElementById("tachesTotal")

let liste = document.getElementsByTagName("ul")[0]
let tache = document.getElementsByClassName("tache")[0]

let listeTachesNonTerminer = document.getElementById("listeTachesNonTerminer")

let tacheCount = liste.children.length
tachesFinis.innerText = 0

listeTachesTerminer.style.display = "none"
listeTachesTout.style.display = "none"

let modeAffichage = "nonTerminer"

btnAjouter.addEventListener("click", ()=>{
    
        let newTache = document.createElement("li")
        newTache.className = "tache nonTerminer"

        let divCheckText = document.createElement("div")
        newTache.appendChild(divCheckText)
        divCheckText.className = "divCheckText"
        
        let texteTache = document.createElement("span")
        texteTache.innerText = inputAjouter.value
        divCheckText.appendChild(texteTache)
        inputAjouter.value = ""
        liste.appendChild(newTache)
        
        
        let newCheckBox = document.createElement("input")
        newCheckBox.setAttribute("type", "checkbox")
        newCheckBox.className = "checkBox"
        divCheckText.prepend(newCheckBox)


        let divBtnTache = document.createElement("div")
        newTache.appendChild(divBtnTache)
        divBtnTache.className = "divButtonTache"
        
        let newModif = document.createElement("button")
        newModif.className = "btnsTache"
        let newModifText = document.createElement("span")
        newModifText.innerText = "Modifier"
        let newModifSvg = document.createElement("svg")
        newModifSvg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="M216-216h51l375-375-51-51-375 375v51Zm-72 72v-153l498-498q11-11 23.84-16 12.83-5 27-5 14.16 0 27.16 5t24 16l51 51q11 11 16 24t5 26.54q0 14.45-5.02 27.54T795-642L297-144H144Zm600-549-51-51 51 51Zm-127.95 76.95L591-642l51 51-25.95-25.05Z"/></svg>'
        newModif.appendChild(newModifText)
        newModif.appendChild(newModifSvg)
        
        let newSupp = document.createElement("button")
        newSupp.className = "btnsTache"
        let newSuppText = document.createElement("span")
        newSuppText.innerText = "Supprimer"
        let newSuppSvg = document.createElement("svg")
        newSuppSvg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>'
        newSupp.appendChild(newSuppText)
        newSupp.appendChild(newSuppSvg)
        
        let newInput = document.createElement("input")
        newInput.style = "border-radius: 5px; border: none;"
        newInput.style.display = "none"

        divCheckText.appendChild(newInput)
        divBtnTache.appendChild(newModif)
        divBtnTache.appendChild(newSupp)
        tachesTotal.innerText = tacheCount += 1


        
        newSupp.addEventListener("click", ()=> {
            newTache.remove()
            tacheCount -= 1
            tachesTotal.innerText = tacheCount
            if (newCheckBox.checked) {
                let tachesFinisCount = parseInt(tachesFinis.innerText)
                tachesFinisCount -= 1
                tachesFinis.innerText = tachesFinisCount
                let taches2FinisCount = parseInt(tachesFinis2.innerText)
                taches2FinisCount -= 1
                tachesFinis2.innerText = taches2FinisCount
            }
            let listeVide = document.getElementById("listeVide")
            if (liste.children.length === 0) {
                listeVide.style.display = "flex"
                liste.style.display = "none"
            }
            else if (liste.children.length >= 1) {
                listeVide.style.display = "none"
                liste.style.display = "flex"
            }
        })
        newModif.addEventListener("click", ()=> {
            if (newInput.style.display == "inline") {
                    texteTache.style.display = "block"
                    texteTache.innerText = newInput.value
                    newInput.value = ""
                    newInput.style.display = "none"
            }
            else {
                newInput.style.display = "inline"
                newInput.focus()
                newInput.value = texteTache.innerText
                texteTache.style.display = "none"
            }
        })

        newInput.addEventListener("keypress", (e)=>{
            if (e.key === "Enter"){
                e.preventDefault()
                if (newInput.value.trim() !== "") {
                    texteTache.style.display = "block"
                    texteTache.innerText = newInput.value
                    newInput.value = ""
                }
                newInput.style.display = "none"
            }
        })
        newInput.addEventListener("keydown", (e)=>{
            if (e.key === "Escape"){
                newInput.value = ""
                newInput.style.display = "none"
                texteTache.style.display = "block"
            }
        })


        newCheckBox.addEventListener("change", ()=> {
            if (newCheckBox.checked) {
                let tachesFinisCount = parseInt(tachesFinis.innerText)
                tachesFinisCount += 1
                tachesFinis.innerText = tachesFinisCount
                newTache.classList.remove("nonTerminer")
                newTache.classList.add("Terminer")
                tachesFinis2.innerText = tachesFinisCount
            }
            else if (!newCheckBox.checked) {
                let tachesFinisCount = parseInt(tachesFinis.innerText)
                tachesFinisCount -= 1
                tachesFinis.innerText = tachesFinisCount
                newTache.classList.remove("Terminer")
                newTache.classList.add("nonTerminer")
                tachesFinis2.innerText = tachesFinisCount
                newTache.style.display = "flex"
            }

            if (modeAffichage === "Tout") {
                newTache.style.display = "flex";
            } else if (modeAffichage === "Terminer" && newCheckBox.checked) {
                newTache.style.display = "flex";
            } else if (modeAffichage === "NonTerminer" && !newCheckBox.checked) {
                newTache.style.display = "flex";
            } else {
                newTache.style.display = "none";
            }
        })
        let listeVide = document.getElementById("listeVide")
        if (liste.children.length === 0) {
            listeVide.style.display = "flex"
            liste.style.display = "none"
        }
        else if (liste.children.length >= 1) {
            listeVide.style.display = "none"
            liste.style.display = "flex"
        }
})
inputAjouter.addEventListener("keypress", (e)=>{
    if (e.key === "Enter"){
        e.preventDefault()
        btnAjouter.click()
    }
    let listeVide = document.getElementById("listeVide")
        if (liste.children.length === 0) {
            listeVide.style.display = "flex"
            liste.style.display = "none"
        }
        else if (liste.children.length >= 1) {
            listeVide.style.display = "none"
            liste.style.display = "flex"
        }
})

btnTout.addEventListener("click", ()=>{
    modeAffichage = "Tout"
    Array.from(liste.children).forEach(li => {
        li.style.display = "flex"
    })
    btnTout.style = "background-color: #3d3d3d; color: white"
    btnNonTerminer.style = "background-color: rgba(255, 255, 255, 0.75); color: black"
    btnTerminer.style = "background-color: rgba(255, 255, 255, 0.75); color: black"
})
btnNonTerminer.addEventListener("click", ()=>{
    modeAffichage = "NonTerminer"
    Array.from(liste.children).forEach(li => {
        if (li.classList.contains("nonTerminer")) {
            li.style.display = "flex";
        }
        else {
            li.style.display = "none";
        }
    });
    btnNonTerminer.style = "background-color: #3d3d3d; color: white"
    btnTerminer.style = "background-color: rgba(255, 255, 255, 0.75); color: black"
    btnTout.style = "background-color: rgba(255, 255, 255, 0.75); color: black"
})
btnTerminer.addEventListener("click", ()=>{
    modeAffichage = "Terminer"
    Array.from(liste.children).forEach(li => {
        if (li.classList.contains("Terminer")) {
            li.style.display = "flex"
        }
        else {
            li.style.display = "none"
        }
    })
    btnTerminer.style = "background-color: #3d3d3d; color: white"
    btnNonTerminer.style = "background-color: rgba(255, 255, 255, 0.75); color: black"
    btnTout.style = "background-color: rgba(255, 255, 255, 0.75); color: black"
})

