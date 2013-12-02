describe("Functions", function(){
  it("soma", function(){
    var soma = Functions.soma(2, 2);

    expect(soma).toBe(4);
  });

  it("mult", function(){
    var mult = Functions.mult(3, 3);

    expect(mult).toBe(9);
  });

  it("soma call", function(){
    var soma = Functions.soma.call(this, 2, 2);

    expect(soma).toBe(4);
  });

  it("soma apply", function(){
    var soma = Functions.soma.apply(this, [2, 2]);

    expect(soma).toBe(4);
  });
  it("argumento this com erro", function(){
    try{
      var sub = Functions.sub.apply(this, [2, 2]);

      expect(sub).toBe(0);
    } catch (err){
      
    }
  });

  it("subtracao", function(){
    var sub = Functions.sub.apply(Functions, [2, 2]);

    expect(sub).toBe(0);
  });

  it("2 - (-2) e 4", function(){
    var sub = Functions.sub(2, -2);

    expect(sub).toBe(4);
  });

  it("fatorial", function(){
    var fatorial = Functions.fatorial(5);

    expect(fatorial).toBe(120);
  });

  it("somaCurried", function(){
    var soma = Functions.somaCurried(2)(2);

    expect(soma).toBe(4);
  });

  it("funcao publica", function(){
    var ok = new closure(10).funcaoPublica();

    expect(ok).toBe(10);
  });

  it("funcao privada", function(){
    var ok = new closure().funcaoPrivada

    expect(ok).toBeUndefined();
  });

  it("div", function(){
    var div = Functions.div(6, 2)

    expect(div).toBe(3);
  });

  it("div por zero", function(){
    try{
      var div = Functions.div(6, 0);
      expect(false).tobe(true);
    } catch(err){
      expect(err).toBe("divide by zero");
    }
  });

});