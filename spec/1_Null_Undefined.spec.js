describe("Null_Undefined", function(){
  it("retornaNull", function(){
      var res = NullUndefined.retornaNull();

      expect(res).toBeNull();
  });

  it("variavel null nao e undefined", function(){
      var res = NullUndefined.retornaNull();

      expect(res == undefined).toBeTruthy();
  });  

  it("retornaNull checagem == undefined manual", function(){
      var res = NullUndefined.retornaNull();

      expect(res === null).toBeTruthy();
  });

  it("metodoInexistente e undefined", function(){
      var res = NullUndefined.metodoInexistente;

      expect(res).toBeUndefined();
  });

  it("metodoInexistente e undefined checagem manual", function(){
      var res = NullUndefined.metodoInexistente;

      expect(typeof res === "undefined").toBeTruthy();
  });

  it("metodoInexistente e undefined checagem manual melhor", function(){
      var res = NullUndefined.metodoInexistente;

      expect(res === void 0).toBeTruthy();
  });

  it("document.getElementById retorna null quando elemento nao existe", function(){
    var elementoInexistente = document.getElementById("elementoInexistente");

    expect(elementoInexistente).toBeNull();
  });

  it("declarar variavel", function(){
    var x;

    expect(x).toBeUndefined();
  });

  it("funcao retorna undefined", function(){
    var resultado = NullUndefined.retornaJson();

    expect(resultado).toBeUndefined();
  });
});