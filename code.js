let botoes = document.querySelectorAll("div.botao")
let vizu = document.getElementById("val")

console.log(botoes)

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
       botao.style.boxShadow = "inset 0 2px 4px rgba(22, 14, 14, 0.863)"; 
       setTimeout(() => {
        botao.style.boxShadow = "none"
       }, 200);
    })

    if(botao.className.includes("numero")){
        botao.addEventListener("click", () => {
            let val = Number(botao.id)
            console.log(val)

            addval(val)
        })
    }else if(botao.id == "c"){
        botao.addEventListener("click", () => {
            addval("limpa")
        })
    }else if(botao.id == "virgula"){
        botao.addEventListener("click", () => {
            addval(",")
        })
    }
});

function addval(valor){
    if(valor === "limpa"){
        vizu.innerText = ""
    }else{
        vizu.innerText += valor
    }
}