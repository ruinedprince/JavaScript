const form = document.querySelector(".form"); // A função querySelector retorna o primeiro elemento com a classe (.) ou id (#) especificado no argumento.

function recValuesFromForm() {
    const weight = parseFloat(form.querySelector("#input-weight").value);
    const height = parseFloat(form.querySelector("#input-height").value);

    if (isNaN(weight) || isNaN(height)) {
        alert("Por favor, insira valores válidos para peso e altura.");

        return null;
        
    }

    return {
        w: weight,
        h: height,

    };

}
function calcImc (weight, height) {
    return weight / ((height / 100) ** 2)

}
function handleFormSubmit (e) {
    e.preventDefault();

    const values = recValuesFromForm();

    if (!values) return;

    const imc    = calcImc (values.w, values.h);
    const result = document.querySelector(".result");

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

form.addEventListener("submit", handleFormSubmit);