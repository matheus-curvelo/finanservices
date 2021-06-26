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
    let dolar = document.getElementById("selecao-moeda-usd")
    dolar.classList.remove("selecao-moeda-ativo")
    let euro = document.getElementById("selecao-moeda-eur")
    euro.classList.remove("selecao-moeda-ativo")
    let libra = document.getElementById("selecao-moeda-gbp")
    libra.classList.remove("selecao-moeda-ativo")
    let cad = document.getElementById("selecao-moeda-cad")
    cad.classList.remove("selecao-moeda-ativo")
}

function setActiveItem(){
    let activeItem = document.getElementsByClassName("carousel-item active")[0]
    if (activeItem.id === "item-dolar" ){
        setActiveButton('selecao-moeda-usd')
    } else if (activeItem.id === "item-euro" ) {
        setActiveButton('selecao-moeda-eur')
    } else if (activeItem.id === "item-libra" ) {
        setActiveButton('selecao-moeda-gbp')
    } else if (activeItem.id === "item-cad" ) {
        setActiveButton('selecao-moeda-cad')
    }
}

function get(url) {
    var request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criarElementoBotao(cotacao){
    // console.log(usuario)

    const {moeda} = cotacao

    elemento = document.createElement("button")
    elemento.classList.add("selecao-moeda")
    elemento.innerHTML = moeda

    return elemento
}

function criarSlide(dado){
    const slideDiv = document.createElement("div")
    slideDiv.id = `item-${dado.sigla.toLowerCase()}`
    slideDiv.classList.add("carousel-item")
    slideDiv.classList.add("mt-4")

    Object.entries(dado).forEach(([chave, valor]) => {
        console.log("")
        const span = document.createElement("span")

        span.classList.add(`${chave}-cotacao`)
        span.innerText = valor + " "
    
        slideDiv.appendChild(span)
    } )
    
    return slideDiv
}

function main(){
    let data = get("https://southamerica-east1-cotacao-316018.cloudfunctions.net/get-cotacao")
    let cotacoes = JSON.parse(data)
    let inserirDados = document.getElementById("botoes-api")
    let slideContainer = document.getElementById("slide-api")
    console.log(cotacoes)

    cotacoes.forEach((cotacao, index) => {
        let botao = criarElementoBotao(cotacao)
        let slide = criarSlide(cotacao)
        const sigla = cotacao.sigla.toLowerCase()

        if ( index === 0 ) {
            botao.classList.add("selecao-moeda-ativo")
            slide.classList.add("active")
        } 
        
        botao.id = `selecao-moeda-${sigla}`
        
        botao.setAttribute('data-bs-target', "#carouselExampleControls")
        botao.setAttribute('data-bs-slide-to', index)
        botao.setAttribute('onclick', `setActiveButton('selecao-moeda-${sigla}')`)

        slideContainer.appendChild(slide)
        inserirDados.appendChild(botao)
    });
}

main()