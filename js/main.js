const under18 = "Minorenne"
const adult = "Maggiorenne"
const over65 = "Over65"

const domButton = document.querySelector('#btn1');

domButton.addEventListener('click',
    function () {
        const nomeCognome = document.getElementById('nomeCognome');
        const nomeCognomeCompilato = nomeCognome.value;
        console.log(nomeCognomeCompilato);

        const kmViaggio = document.getElementById('kmViaggio');
        const kmViaggioCompilato = kmViaggio.value;
        console.log(kmViaggioCompilato);

        const numeroKm = kmViaggioCompilato;
        const costoBase = (numeroKm * 0.21);
        let costoEffettivo;

        const casellaSelezione = document.getElementById('casellaSelezione');
        const casellaSelezioneScelta = casellaSelezione.value;
        console.log(casellaSelezioneScelta);


        if (casellaSelezioneScelta == under18) {
            costoEffettivo = (costoBase * 0.8).toFixed(2);

        } else if (casellaSelezioneScelta == over65) {
            costoEffettivo = (costoBase * 0.6).toFixed(2);

        } else {
            costoEffettivo = (costoBase).toFixed(2);

        }

        const nome = document.getElementById('nome');
        nome.innerHTML = nomeCognomeCompilato;

        const offerta = document.getElementById('offerta');
        offerta.innerHTML = casellaSelezioneScelta;


        const costo = document.getElementById('costo');
        costo.innerHTML = costoEffettivo;

    }
);





const domReset = document.querySelector('#btn2');

domReset.addEventListener('click',
    function () {
        nomeCognome.value = "";

        kmViaggio.value = "";
    }
);










// const numeroKm = parseInt(prompt("Inserisci il numero esatto dei km da percorrere"));

// const eta = parseInt(prompt("Inserisci l'età del viaggiatore"));
// console.log(eta);

// const costoBase = (numeroKm * 0.21);
// console.log(costoBase);

// const under18 = 18;
// const over65 = 65;

// let costoEffettivo;
