document.addEventListener("scroll",(event) => {
    let scrollPositionY = window.scrollY 
    let className = "scrolled"

    if (scrollPositionY > 0) {
        document.body.classList.add(className)
    } else {
        document.body.classList.remove(className)
        
    }
} )

function setActiveButton(selecaoMoedaAtivo){
    clearCurrencyActive()
    let element = document.getElementById(selecaoMoedaAtivo)
    element.classList.add("selecao-moeda-ativo")
}

function clearCurrencyActive(){
    let dolar = document.getElementById("selecao-moeda-dolar")
    dolar.classList.remove("selecao-moeda-ativo")
    let euro = document.getElementById("selecao-moeda-euro")
    euro.classList.remove("selecao-moeda-ativo")
    let libra = document.getElementById("selecao-moeda-libra")
    libra.classList.remove("selecao-moeda-ativo")
    let cad = document.getElementById("selecao-moeda-cad")
    cad.classList.remove("selecao-moeda-ativo")
}

function setActiveItem(){
    let activeItem = document.getElementsByClassName("carousel-item active")[0]
    if (activeItem.id === "item-dolar" ){
        setActiveButton('selecao-moeda-dolar')
    } else if (activeItem.id === "item-euro" ) {
        setActiveButton('selecao-moeda-euro')
    } else if (activeItem.id === "item-libra" ) {
        setActiveButton('selecao-moeda-libra')
    } else if (activeItem.id === "item-cad" ) {
        setActiveButton('selecao-moeda-cad')
    }
}