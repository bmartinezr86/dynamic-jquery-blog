$(document).ready(function () {
  var containerCalculadora = $("#container-calc");
  function estructura() {
    var calculadora = $('<div id="calculadora"></div>');
    var containerResult = $('<div id="container-resultado"></div>');
    var operation = $('<span id="operation"></span>');
    var result = $(
      '<div><span id="operator"></span><span id="result"></span></div>'
    );

    containerResult.append(operation);
    containerResult.append(result);

    var containerOptions = $('<div id="container-options"></div>');
    var optionsTop = $('<div id="options-top"></div>');
    var optionsBottom = $('<div id="options-bottom"></div>');
    var optionsBottomRight = $('<div class="right"></div>');
    var btnC = $('<span id="reset" class ="btn-calc">C</span>');
    var btnPercentag = $('<span id="percentag" class ="btn-calc">%</span>');
    var btnDivide = $('<span id="divide" class ="btn-calc">/</span>');
    var btnMultiply = $('<span id="multiply" class ="btn-calc">*</span>');
    var btnMinus = $('<span id="minus" class ="btn-calc">-</span>');
    var btnPlus = $('<span id="plus" class ="btn-calc">+</span>');
    var btnEqual = $('<span id="equal" class="btn-calc">=</span>');
    var btnDot = $('<span id="dot" class="btn-calc">.</span>');
    var btnDelete = $(
      '<span id="delete" class="btn-calc"><i class="fa-solid fa-delete-left"></i></span>'
    );
    var containerNumbers = $('<div id="container-numbers" ></div>');
    for (let i = 0; i <= 9; i++) {
      var num = $('<div id="num-' + i + '" class="btn-calc">' + i + "</div>");
      containerNumbers.append(num);
    }
    containerNumbers.append(btnDot);
    containerNumbers.append(btnDelete);

    optionsTop.append(btnC);
    optionsTop.append(btnPercentag);
    optionsTop.append(btnDivide);
    optionsTop.append(btnMultiply);

    optionsBottomRight.append(btnMinus);
    optionsBottomRight.append(btnPlus);
    optionsBottomRight.append(btnEqual);

    optionsBottom.append(containerNumbers);
    optionsBottom.append(optionsBottomRight);

    containerOptions.append(optionsTop);
    containerOptions.append(optionsBottom);

    calculadora.append(containerResult);
    calculadora.append(containerOptions);

    containerCalculadora.append(calculadora);
  }

  function funcionalityCalc() {
    var operationContainer = $("#operation");
    var operatorContainer = $("#operator");
    var opertorInUse = "";
    var operation = "";

    $(document).on("click", ".btn-calc", function () {
      var btnSeleccionado = $(this).attr("id");
      switch (btnSeleccionado) {
        case "reset":
          operation = "";
          opertorInUse = "";
          operationContainer.text(operation);
          $("#result").text(operation);
          break;
        case "percentag":
          opertorInUse = "%";
          operation += opertorInUse;
          operatorContainer.text(opertorInUse);
          break;
        case "divide":
          opertorInUse = "/";
          operation += opertorInUse;
          break;
        case "multiply":
          opertorInUse = "*";
          operation += opertorInUse;
          break;
        case "minus":
          opertorInUse = "-";
          operation += opertorInUse;
          break;
        case "plus":
          opertorInUse = "+";
          operation += opertorInUse;
          break;
        case "dot":
          operation += ".";
          break;
        case "delete":
          operation = operation.slice(0, -1);
          break;
        case "equal":
          var result = eval(operation);
          $("#result").text(result);
          break;
        default: // si no es uno de los anteriores botones es un numero
          var num = btnSeleccionado.split("-").pop();
          operation += num;
          break;
      }
      operatorContainer.text(opertorInUse);
      operationContainer.text(operation);
    });
  }
  function calculadora() {
    estructura();
    funcionalityCalc();
  }

  calculadora();
});
