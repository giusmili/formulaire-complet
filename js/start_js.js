/* main function */
document.addEventListener("DOMContentLoaded", e => {
    e.preventDefault();
    console.log("loaded!!!");
    /* déclaration des variable */
    let parents, elments, title, dates, footer;
    parents = document.querySelector("body");
    title = document.querySelector("h1");
    footer = document.querySelector("footer p");
    title.textContent += " en javascript";

    dates = new Date().getFullYear(); //méthode date
    console.log(dates);
    footer.textContent += dates; //2021

    console.log(parents.parentElement); //parent de body html
    console.log(parents.childNodes[3].childNodes); //les enfants de body

    /* optimiser en objet */
    for (let i = 0; i < parents.childNodes.length; i++) {
        //itérer le DOM
        console.log(parents.childNodes[i]);
    }
});