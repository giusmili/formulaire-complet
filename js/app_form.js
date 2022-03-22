document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    // let first_name, last_name, btn_validation, phone, date
    const elements = document.querySelectorAll("input");
    let footer = document.querySelector("footer p");

    for (row of elements) {
        console.log(row.value + '\n');
    }
    const dates = {
        my_date: new Date().getFullYear()
    };
    footer.innerText += dates.my_date;
    const el = document.querySelector(".inner-form");
    let list = document.createElement("ul");
    el.prepend(list);

    const form = {
        first_name: document.getElementsByName("nom")[0],
        last_name: document.getElementsByName("prenom")[0],
        phone: document.getElementsByName("phone")[0],
        date: document.getElementsByName("date")[0],
        btn_validation: document.querySelector("button"),
        warning: document.querySelector(".warning"),
        info: [],
        control() {
            //condition
            if (this.first_name.value && this.last_name.value && this.phone.value && this.date.value) {
                console.log(`Nom : ${this.first_name.value}
                    Prénom : ${this.last_name.value}
                    date : ${this.date.value}
                    phone : ${this.phone.value}
                    `);
                form.info.push(this.first_name.value, this.last_name.value, this.date.value, this.phone.value);
                console.table(form.info);
                for (let index in form.info) {
                    list.innerHTML += `<li>${index} : ${form.info[index]}</li>`;
                }
                localStorage.setItem('User', JSON.stringify(form.info));
                form.warning.classList.remove("show-warning");
            } else {
                form.warning.classList.add("show-warning");
                form.warning.innerText = "Remplir les champs";
                //alert("Remplir les champs")
            }
        }
    };

    //console.log(btn_validation)

    form.btn_validation.addEventListener("click", e => {
        e.preventDefault();
        form.control();
    });
});