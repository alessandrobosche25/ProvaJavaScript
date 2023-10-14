"use strict"

let celle = new Array(15)
let cella

window.onload = function(){
    creaCaselle()
}

function creaCaselle(){
    for(let i = 0; i < 15; i++)
        {
            celle[i] = new Array(15)
        }
        let body = document.getElementsByTagName("body")[0]
        let h1 = document.createElement("h1")
        h1.innerText = "Acchiappa la talpa"
        h1.style.textAlign = "center"
        body.appendChild(h1)

        let wrapper = document.createElement("div")
        wrapper.classList.add("wrapper")
        body.appendChild(wrapper)
    
        for(let i = 0; i < 15; i++)
        {
            for(let j = 0; j < 15; j++)
                {
                    let btn = document.createElement("button")
                    btn.setAttribute("class", "cella")
                    btn.setAttribute("id","cella" + i + "-" + j);
                    cella = document.getElementsByClassName("cella")
                    btn.onclick = function(){
                        click(15 * i + j);
                    }
                    celle[i][j] = document.getElementById("cella" + i + "-" + j)
                    wrapper.appendChild(btn)
                }
        }
        //celle[0][1].style.backgroundColor = "red"
        console.log(celle)
        console.log(cella)

        let punteggio = document.createElement("h1")
        punteggio.setAttribute("id", "punteggio")
        punteggio.innerText = "Punteggio: 0"
        punteggio.style.textAlign = "left"
        punteggio.style.marginLeft = "650px"
        body.appendChild(punteggio)

        posizionaSassi()
        setInterval(mostraTalpa,1500)
}

function click(i){
    if(i == indiceTalpa)
        colpita()
    else
        sbagliato()
}

let cnt = 0
let indiceTalpa = 0
let VindiceTalpa = 0

function posizionaSassi(){
    do{
            let x = generaNumero(0,224)
        if(cella[x].style.backgroundColor != "grey")
        {
            cella[x].style.backgroundColor = "grey"
            cnt++
        }
    }while(cnt < 50)
}


function mostraTalpa(){
    VindiceTalpa = indiceTalpa
    let avanti = false
    do{
        let x = generaNumero(0,224)
        if(cella[x].style.backgroundColor != "grey")
        {
            cella[x].style.backgroundColor = "red"
            indiceTalpa = x
            avanti = true
            cella[VindiceTalpa].style.backgroundColor = "darkGreen" 
        }  
    }while(avanti = false)
}
let punti = 0
function colpita(){
    punti = punti + 100
    let testo = document.getElementById("punteggio")
    testo.innerText = "Punteggio: " + punti

    if(punti == 1000)
    {
        alert("hai vinto")
        ferma()
    }
}

function sbagliato(){
    punti = punti - 100
    let testo = document.getElementById("punteggio")
    testo.innerText = "Punteggio: " + punti
}
function ferma(){

}
function generaNumero(a, b){
    return (Math.floor((b - a + 1) * Math.random()) + a)
}
