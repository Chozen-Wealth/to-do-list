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

let listeTachesTerminer = document.getElementById("listeTachesTerminer")
let listeTachesNonTerminer = document.getElementById("listeTachesNonTerminer")
let listeTachesTout = document.getElementById("listeTachesTout")

let listeFini = document.getElementsByTagName("ul")[1]
let listeTout = document.getElementsByTagName("ul")[2]

let tacheCount = liste.children.length
tachesFinis.innerText = 0
listeTachesTerminer.style.display = "none"
listeTachesTout.style.display = "none"

btnAjouter.addEventListener("click", ()=>{
        let newTache = document.createElement("li")
        newTache.className = "tache nonTerminer"
        let texteTache = document.createElement("span")
        texteTache.innerText = inputAjouter.value
        newTache.appendChild(texteTache)
        inputAjouter.value = ""
        liste.appendChild(newTache)
        
        
        let newCheckBox = document.createElement("input")
        newCheckBox.setAttribute("type", "checkbox")
        newCheckBox.className = "checkBox"
        newTache.prepend(newCheckBox)
        
        let newModif = document.createElement("button")
        newModif.innerText = "Modifier"
        
        let newSupp = document.createElement("button")
        newSupp.innerText = "Supprimer"
        
        let newInput = document.createElement("input")
        newInput.placeholder = "Modification"
        newInput.style.display = "none"

        newTache.appendChild(newInput)
        newTache.appendChild(newModif)
        newTache.appendChild(newSupp)
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
        })
        newModif.addEventListener("click", ()=> {
            newInput.style.display = "inline"
            if (newInput.value) {
                texteTache.innerText = newInput.value
                newInput.style.display = "none"
            }
            
        })
        newInput.addEventListener("keypress", (e)=>{
            if (e.key === "Enter"){
                e.preventDefault()
                newModif.click()
            }
        })
        newCheckBox.addEventListener("change", ()=> {
            if (newCheckBox.checked) {
                let tachesFinisCount = parseInt(tachesFinis.innerText)
                tachesFinisCount += 1
                tachesFinis.innerText = tachesFinisCount
                newTache.classList.remove("nonTerminer")
                newTache.classList.add("Terminer")
                listeFini.appendChild(newTache)
                newCheckBox.style.pointerEvents = "none"
                newModif.style.display = "none"
                tachesFinis2.innerText = tachesFinisCount
            }
        })
})
inputAjouter.addEventListener("keypress", (e)=>{
    if (e.key === "Enter"){
        e.preventDefault()
        btnAjouter.click()
    }
})

btnTout.addEventListener("click", ()=>{
    Array.from(liste.children).forEach(element => {
        listeTout.appendChild(element)
    });
    Array.from(listeFini.children).forEach(element => {
        listeTout.appendChild(element)
    })
    listeTachesTout.style.display = "block"
    listeTachesNonTerminer.style.display = "none"
    listeTachesTerminer.style.display = "none"
})
btnNonTerminer.addEventListener("click", ()=>{
    Array.from(listeTout.children).forEach(element => {
        liste.appendChild(element)
    })
    Array.from(listeFini.children).forEach(element => {
        liste.appendChild(element)
    })
    listeTachesNonTerminer.style.display = "block"
    listeTachesTerminer.style.display = "none"
    listeTachesTout.style.display = "none"
})
btnTerminer.addEventListener("click", ()=>{
    Array.from(liste.children).forEach(element => {
        listeFini.appendChild(element)
    })
    Array.from(listeTout.children).forEach(element => {
        listeFini.appendChild(element)
    })
    listeTachesNonTerminer.style.display = "block"
    listeTachesTerminer.style.display = "none"
    listeTachesTout.style.display = "none"
})