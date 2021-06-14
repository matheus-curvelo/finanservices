document.addEventListener("scroll",(event) => {
    let scrollPositionY = window.scrollY 
    let className = "scrolled"
    console.log(scrollPositionY)

    if (scrollPositionY > 0) {
        document.body.classList.add(className)
    } else {
        document.body.classList.remove(className)
        
    }
} )