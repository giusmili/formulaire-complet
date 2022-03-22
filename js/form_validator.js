document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    let btn = document.querySelector('button[type="submit"]');
    let elements = document.querySelectorAll('input');
    let print_out = document.querySelector("p");

    //event submit
    const form = () => {
        for (rows of elements) {
            if (rows.value) {
                console.log(rows.value);
                print_out.innerHTML += ` ${rows.value}<br>`;
                // bdd.push(rows.value)
                btn.setAttribute("disabled", true);
            } else {
                print_out.innerHTML = `Champs obligatoires<br>`;
                console.log("Champs obligatoires");
            }
        }
    };
    btn.addEventListener("click", e => {
        //alert(btn.tagName)
        e.preventDefault();
        form();
    });
});