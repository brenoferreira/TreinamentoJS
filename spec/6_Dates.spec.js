describe("Dates", function () {
  it("Criando data com dia-mes-ano", function(){
    var data = new Date(2013, 11, 2);

    expect(data.getDay()).toBe(1); //segunda feira. Indices 0-6 p/ dias da semana
    expect(data.getDate()).toBe(2);
    expect(data.getMonth()).toBe(11);
    expect(data.getFullYear()).toBe(2013);
  });

  it("criando data via string no formato ISO 8601", function(){
    var data = new Date("Dec 2, 2013")

    expect(data.getDay()).toBe(1);
    expect(data.getDate()).toBe(2);
    expect(data.getMonth()).toBe(11);
    expect(data.getFullYear()).toBe(2013);
  });

  it("criando data no formato tradicional", function(){
    var data = new Date("2013-12-2")

    expect(data.getDay()).toBe(1);
    expect(data.getDate()).toBe(2);
    expect(data.getMonth()).toBe(11);
    expect(data.getFullYear()).toBe(2013);
  });

  it("criando data no formato americano", function(){
    var data = new Date("12/2/2013")

    expect(data.getDay()).toBe(1);
    expect(data.getDate()).toBe(2);
    expect(data.getMonth()).toBe(11);
    expect(data.getFullYear()).toBe(2013);
  });

  it("date.now", function(){
    expect(Date.now()).toBeGreaterThan(0);
  });

  it("hora zero", function(){
    expect(Date.parse("Thu, 01 Jan 1970 00:00:00 GMT")).toEqual(0);
  });
});