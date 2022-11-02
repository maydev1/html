
      function calcula() {
        var x = document.querySelector("#x");
        var y = document.querySelector("#y");
        var operacao = document.querySelector ("#operacao");
        var resultado = document.querySelector ("#resultado");

        if (x.value == "" || y.value == "") {
          alert ("Favor preencher o valor de x e y");
        } else {

          if (operacao.value == "+") {
            resultado.innerHTML = parseInt(x.value) + parseInt(y.value);
          }
          if (operacao.value == "-") {
            resultado.innerHTML = parseInt(x.value) - parseInt(y.value);
          }
          if (operacao.value == "*") {
            resultado.innerHTML = parseInt(x.value) * parseInt(y.value);
          }
          if (operacao.value == "/") {
            resultado.innerHTML = parseInt(x.value) / parseInt(y.value);
          }
          x.value = "";
          y.value = "";
          resultado.style.display = "block";
          resultado.style["background-color"] = "white";
        }
      }
    