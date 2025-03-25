// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
// Numero minimo di push: 4

const off = document.getElementById('front-image');
const on = document.getElementById('back-image');
const button = document.getElementById("onOffButton")

// button.addEventListener('click', function(){
//     if(off.classList.contains('d-block') ){
//         off.classList.remove("d-block")
//         off.style.display = 'none';
//         on.classList.remove("d-none")
//         on.style.display = 'block';
//     }
// });

// BONUS
// Facciamo accendi e spegni:
// Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
// Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
// E così via...
// Per fare questo bonus potremmo aver bisogno del metodo string.includes()

button.addEventListener('click', function(){
    if(off.classList.contains('d-block') ){
        off.classList.remove("d-block");
        off.style.display = 'none';
        on.classList.remove("d-none");
        on.style.display = 'block';
        button.textContent = "Spegni";
    }
    else {
        off.classList.remove("d-none");
        off.style.display = 'block';
        on.classList.remove("d-block");
        on.style.display = 'none';
        button.textContent = "Accendi";
    }
});