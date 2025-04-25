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
        newInput.placeholder = "Modification"
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
                tachesFinis2.innerText = tachesFinisCount
            }
            else if (!newCheckBox.checked) {
                let tachesFinisCount = parseInt(tachesFinis.innerText)
                tachesFinisCount -= 1
                tachesFinis.innerText = tachesFinisCount
                newTache.classList.remove("Terminer")
                newTache.classList.add("nonTerminer")
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
    
})
btnNonTerminer.addEventListener("click", ()=>{
    
})
btnTerminer.addEventListener("click", ()=>{
    
})