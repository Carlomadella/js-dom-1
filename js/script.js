// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
// Numero minimo di push: 4

const off = document.getElementById('front-image');
const on = document.getElementById('back-image');
const button = document.getElementById("onOffButton")

button.addEventListener('click', function(){
    if(off.classList.contains('d-block') ){
        off.classList.remove("d-block")
        off.style.display = 'none';
        on.classList.remove("d-none")
        on.style.display = 'block';
    }
});