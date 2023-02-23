const domButton = document.querySelector('#btn1');

domButton.addEventListener('click', 
    function () {
        const nomeCognome = document.getElementById('nomeCognome');
        const nomeCognomeCompilato = nomeCognome.value;
        
        const kmViaggio = document.getElementById('kmViaggio');
        const kmViaggioCompilato = kmViaggio.value;

        const casellaSelezione = document.getElementById('casellaSelezione');
        const casellaSelezioneScelta = casellaSelezione.value;
    }
);

const domReset = document.querySelector('#btn2');

domReset.addEventListener('click', 
    function() {
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
