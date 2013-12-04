var Aplicacao = {};

__hasProp = {}.hasOwnProperty,
__extends = function(child, parent) { 
  for (var key in parent) { 
    if (__hasProp.call(parent, key)) 
      child[key] = parent[key]; 
  } 
  function ctor() { 
    this.constructor = child; 
  } 
  ctor.prototype = parent.prototype; 
  child.prototype = new ctor(); 
  child.__super__ = parent.prototype; 
  return child; 
};

(function(){
  var ContaBancaria = function(numero, agencia) {
    this.numero = numero;
    this.agencia = agencia;
    this.banco = "Itau";
    this.saldo = 0;
  };

  ContaBancaria.prototype.depositar = function(valor){
    this.saldo = this.saldo + valor;
  };

  ContaBancaria.prototype.retirar = function(valor){
    if(this.saldo >= valor)
      this.saldo = this.saldo - valor;
    else throw "Saldo insuficiente";
  };

  var ContaPoupanca = function(){
    this.rendimento = 0;
    this.saldo = 0;
  };

  __extends(ContaPoupanca, ContaBancaria)

  Aplicacao.ContaBancaria = ContaBancaria;
  Aplicacao.ContaPoupanca = ContaPoupanca;
})();

