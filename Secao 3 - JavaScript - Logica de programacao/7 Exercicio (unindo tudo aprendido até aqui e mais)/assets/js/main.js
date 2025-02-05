function calcIMC() {
    const form   = document.querySelector(".form"); // A função querySelector retorna o primeiro elemento com a classe (.) ou id (#) especificado no argumento.
    const result = document.querySelector(".result");

    function recValuesFromForm(event) {
        event.preventDefault();

        const weight = parseFloat(form.querySelector("#input-weight").value);
        const height = parseFloat(form.querySelector("#input-height").value);
        const imc    = weight / ((height / 100) ** 2);

        if (imc < 18.5){
            result.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)</p>`

        } else if (imc >= 18.5 && imc <= 24.99){
            result.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Peso normal)</p>`

        } else if (imc >= 25 && imc <= 29.99){
            result.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Sobrepeso)</p>`

        } else if (imc >= 30 && imc <= 34.99){
            result.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)</p>`

        } else if (imc >= 35 && imc <= 39.99){
            result.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)</p>`

        } else {
            result.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)</p>`

        }

    }

    form.addEventListener("submit", recValuesFromForm);

}

calcIMC ();