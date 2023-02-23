const domButton = document.querySelector('#btn1');

domButton.addEventListener('click',
    function () {
        const ticket = document.getElementById('ticket');
        ticket.classList.remove('d-none');

        const nomeCognome = document.getElementById('nomeCognome');
        const nomeCognomeCompilato = nomeCognome.value;
        console.log(nomeCognomeCompilato);

        const kmViaggio = document.getElementById('kmViaggio');
        const kmViaggioCompilato = kmViaggio.value;
        console.log(kmViaggioCompilato);

        const numeroKm = kmViaggioCompilato;
        const costoBase = (numeroKm * 0.21);

        const casellaSelezione = document.getElementById('casellaSelezione');
        const casellaSelezioneScelta = casellaSelezione.value;
        console.log(casellaSelezioneScelta);

        if (casellaSelezioneScelta == "Sconto applicato 20%") {
            costoEffettivo = (costoBase * 0.8).toFixed(2);
            console.log(costoEffettivo);


        } else if (casellaSelezioneScelta == "Sconto applicato 40%") {
            costoEffettivo = (costoBase * 0.6).toFixed(2);

        } else {
            (casellaSelezioneScelta == "Prezzo Intero")
            costoEffettivo = (costoBase).toFixed(2);

        }

        const nome = document.getElementById('nome');
        nome.innerHTML = nomeCognomeCompilato;

        const offerta = document.getElementById('offerta');
        offerta.innerHTML = casellaSelezioneScelta;

        const numeroCasuale = Math.floor((Math.random() * 10)) + 1;
        const carrozza = document.getElementById('carrozza');
        carrozza.innerHTML = numeroCasuale;

        const numeroCasualeCodice = Math.floor((Math.random() * 99999)) + 1000;
        const codice = document.getElementById('codice');
        codice.innerHTML = numeroCasualeCodice;

        const costo = document.getElementById('costo');
        costo.innerHTML = costoEffettivo;

    }
);


const domReset = document.querySelector('#btn2');

domReset.addEventListener('click',
    function () {
        const ticket = document.getElementById('ticket');
        ticket.classList.add('d-none');

        nomeCognome.value = "";

        kmViaggio.value = "";
    }
);


