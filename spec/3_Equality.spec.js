describe("Equality", function () {
  describe("loose equality", function(){
    it("compara numeros", function(){
      expect(1 == 1).toBeTruthy()
    });

    it("compara numero com string", function(){
      expect(1 == "1").toBeTruthy();
    });

    it("compara numero com string", function(){
      expect("1" == 1).toBeTruthy();
    });

    it("0 e ''", function(){
      expect(0 == '').toBeTruthy();
      expect('' == '0').toBeFalsy();
    });

    it("null e undefined", function(){
      expect(false == undefined).toBeFalsy();
      expect(false == null).toBeFalsy();
      expect(null == undefined).toBeTruthy();
    });

    it("arrays", function(){
      expect(0 == [0]).toBeTruthy();
      expect([1] == 1).toBeTruthy();
      expect([] == 0).toBeTruthy();
      expect([1] == "1").toBeTruthy();
      expect([] == '').toBeTruthy();
    });
  });

  describe("strict equality", function(){
    it("compara numeros", function(){
      expect(1 === 1).toBeTruthy()
    });

    it("compara numero com string", function(){
      expect(1 === "1").toBeFalsy();
    });

    it("compara numero com string", function(){
      expect("1" === 1).toBeFalsy();
    });

    it("0 e ''", function(){
      expect(0 === '').toBeFalsy();
      expect('' === '0').toBeFalsy();
    });

    it("null e undefined", function(){
      expect(false === undefined).toBeFalsy();
      expect(false === null).toBeFalsy();
      expect(null === undefined).toBeFalsy();
    });

    it("arrays", function(){
      expect(0 === [0]).toBeFalsy();
      expect([1] === 1).toBeFalsy();
      expect([] === 0).toBeFalsy();
      expect([1] === "1").toBeFalsy();
      expect([] === '').toBeFalsy();
    });
  });
})