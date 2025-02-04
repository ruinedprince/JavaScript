function escopo() {
  const titulo  = document.getElementById("titulo");
  const form    = document.querySelector(".form"); // A função querySelector retorna o primeiro elemento com a classe (.) ou id (#) especificado no argumento.
  const result  = document.querySelector(".resultado");
  const pessoas = [];

  function recieveEventForm(event) {
    event.preventDefault(); // Impede que a página recarregue quando enviar o formulário.

    const name    = form.querySelector(".nome");
    const surname = form.querySelector(".sobrenome");
    const weight  = form.querySelector(".peso");
    const height  = form.querySelector(".altura");

    pessoas.push({
      n: name.value,

      s: surname.value,

      w: weight.value,

      h: height.value,

    });

    console.log(pessoas);

    result.innerHTML += `<p>Nome: ${name.value}, Sobrenome: ${surname.value}, Peso: ${weight.value}, Altura: ${height.value}.</p>`;

  }

  form.addEventListener("submit", recieveEventForm);

}

escopo();