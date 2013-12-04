describe("Objects", function () {
  it("ciaAerea", function(){
    expect(Voo.ciaAerea).toBe("TAM");
  });

  it("voo", function(){
    expect(Voo.voo).toBe("JJ1234");
  });

  it("origem", function(){
    expect(Voo.origem.cidade).toBe("São Paulo");
  });

  it("destino", function(){
    expect(Voo.destino.cidade).toBe("New York");
  });

  it("duas paradas", function(){
    expect(Voo.paradas.length).toEqual(2);
  });

  it("primeira parada no panama", function(){
    expect(Voo.paradas[0].cidade).toBe("Ciudad de Panama");
  });

  it("segunda parada em Miami", function(){
    expect(Voo.paradas[1].cidade).toBe("Miami");
  });

  it("sem terceira parada", function(){
    expect(Voo.paradas[3]).toBeUndefined();
  });

  it("obtem valor de propriedade com []", function(){
    expect(Voo["destino"]["aeroporto"]).toBe("JFK - John F. Kennedy International Airport");
  });

  it("altera data de chegada", function(){
    Voo.destino.horario = "10-13-2013 20:30";

    expect(Voo.destino.horario).toBe("10-13-2013 20:30");
  });
});