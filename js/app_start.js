/* main function */
document.addEventListener("DOMContentLoaded",(e)=>{
    e.preventDefault()
    console.log("loaded!!!")
    /* déclaration des variable */
    let parents, elments, title, dates, footer
    parents = document.querySelector("body")
    title = document.querySelector("h1")
    footer = document.querySelector("footer p")
    title.textContent += " en javascript"
  
    dates = new Date().getFullYear()
    console.log(dates)
    footer.textContent += dates//2021
    
    console.log(parents.parentElement)//parent de body
    console.log(parents.childNodes[3].childNodes)//les enfants de body


})