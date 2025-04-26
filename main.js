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
        newModif.innerText = "Modifier"
        
        
        let newSupp = document.createElement("button")
        newSupp.innerText = "Supprimer"
        
        let newInput = document.createElement("input")
        newInput.placeholder = " Modification"
        newInput.style.display = "none"

        divBtnTache.appendChild(newInput)
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
            }
            else if (liste.children.length >= 1) {
                listeVide.style.display = "none"
            }
        })
        newModif.addEventListener("click", ()=> {
            newInput.style.display = "inline"
            newInput.focus()
        })

        newInput.addEventListener("keypress", (e)=>{
            if (e.key === "Enter"){
                e.preventDefault()
                if (newInput.value.trim() !== "") {
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
    }
    else if (liste.children.length >= 1) {
        listeVide.style.display = "none"
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
    }
    else if (liste.children.length >= 1) {
        listeVide.style.display = "none"
    }
})

btnTout.addEventListener("click", ()=>{
    modeAffichage = "Tout"
    Array.from(liste.children).forEach(li => {
        li.style.display = "flex"
    })
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

})

