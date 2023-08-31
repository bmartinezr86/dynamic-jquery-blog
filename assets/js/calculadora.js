$(document).ready(function () {
  var containerCalculadora = $("#container-calc");
  function estructura() {
    var calculadora = $('<div id="calculadora"></div>');
    var containerResult = $('<div id="container-resultado"></div>');
    var operation = $('<span id="operation">1+1+1+1</span>');
    var result = $(
      '<div><span id="operator"></span><span id="operation">1+1+1+1</span></div>'
    );

    containerResult.append(operation);
    containerResult.append(result);

    var containerOptions = $('<div id="container-options"></div>');
    var btnC = $('<span id="reset" class ="btn-calc">C</span>');
    var btnPercentag = $('<span id="percentag" class ="btn-calc">%</span>');
    var btnDivide = $('<span id="divide" class ="btn-calc">/</span>');
    var btnMultiply = $('<span id="multiply" class ="btn-calc">x</span>');
    var btnMinus = $('<span id="minus" class ="btn-calc">-</span>');
    var btnPlus = $('<span id="plus" class ="btn-calc">+</span>');
    var btnEqual = $('<span id="equal" class ="btn-calc">=</span>');
    var btnDot = $('<span id="dot" class ="btn-calc">.</span>');
    var btnDelete = $(
      '<span id="delete"><i class="fa-solid fa-delete-left"></i></span>'
    );
    var containerNumbers = $('<div id="container-numbers" ></div>');
    for (let i = 0; i <= 9; i++) {
      var num = $('<div id="num-' + i + '" class ="btn-calc">' + i + "</div>");
      containerNumbers.append(num);
    }
    containerNumbers.append(btnDot);
    containerNumbers.append(btnDelete);

    containerOptions.append(btnC);
    containerOptions.append(btnPercentag);
    containerOptions.append(btnDivide);
    containerOptions.append(btnMultiply);
    containerOptions.append(containerNumbers);
    containerOptions.append(btnMinus);
    containerOptions.append(btnPlus);
    containerOptions.append(btnEqual);

    calculadora.append(containerResult);
    calculadora.append(containerOptions);

    containerCalculadora.append(calculadora);
  }
  function calculadora() {
    estructura();
  }

  calculadora();
});
