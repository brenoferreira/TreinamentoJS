describe("Classes", function () {
  it("construir um novo objeto", function(){
    var conta = new Aplicacao.ContaBancaria("1234-5", "1234");
    expect(conta.numero).toBe("1234-5");
    expect(conta.agencia).toBe("1234");
  });

  it("depositar", function(){
    var conta = new Aplicacao.ContaBancaria("1234-5", "1234");
    
    conta.depositar(100);
    expect(conta.saldo).toBe(100);
  });

  it("retirar", function(){
    var conta = new Aplicacao.ContaBancaria("1234-5", "1234");
    
    conta.depositar(100);
    conta.retirar(50);
    expect(conta.saldo).toBe(50);
  });

  it("retirar sem fundos", function(){
    var conta = new Aplicacao.ContaBancaria("1234-5", "1234");
    
    conta.depositar(100);
    try {
      conta.retirar(200);
    } catch(erro){
      expect(erro).toBe("Saldo insuficiente");
    }
  });

  it("conta poupança", function(){
    var conta = new Aplicacao.ContaPoupanca();

    conta.depositar(100);

    expect(conta.saldo).toBe(100);
  });
});