document.addEventListener("scroll",(event) => {
    let scrollPositionY = window.scrollY 
    let className = "scrolled"

    if (scrollPositionY > 0) {
        document.body.classList.add(className)
    } else {
        document.body.classList.remove(className)
        
    }
} )

function onClickCurrency(){
    let element = document.getElementById("selecao-moeda")
    element.classList.add("selecao-moeda-ativo")

}