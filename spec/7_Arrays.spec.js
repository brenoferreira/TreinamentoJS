describe("Arrays", function(){
  it("map", function(){
    var dobrados = ArrayOps.map(function(n) { 
      return n * 2
    }, [1, 2, 3]);

    expect(dobrados).toEqual([2, 4, 6]);
  });

  it("filter", function(){
    var mairQueUm = ArrayOps.filter(function(n) { 
      return n > 1
    }, [1, 2, 3]);

    expect(mairQueUm).toEqual([2, 3]);
  });

  it("reduce", function(){
    var soma = ArrayOps.reduce(function(acc, n) { 
      return acc + n;
    }, [1, 2, 3], 0);

    expect(soma).toEqual(6);
  });

  it("reduce mult", function(){
    var soma = ArrayOps.reduce(function(acc, n) { 
      return acc * n
    }, [1, 2, 3, 4, 5], 1);

    expect(soma).toEqual(120);
  });

  it("all", function(){
    var mairQueZero = ArrayOps.all(function(n) { return n > 0}, [1, 2, 3]);

    expect(mairQueZero).toBeTruthy();
  });

  it("all falso", function(){
    var mairQueZero = ArrayOps.all(function(n) { return n > 2}, [1, 2, 3]);

    expect(mairQueZero).toBeFalsy();
  });

  it("any", function(){
    var mairQueZero = ArrayOps.any(function(n) { return n > 2}, [1, 2, 3]);

    expect(mairQueZero).toBeTruthy();
  });

  it("any falso", function(){
    var mairQueZero = ArrayOps.any(function(n) { return n > 3}, [1, 2, 3]);

    expect(mairQueZero).toBeFalsy();
  });
});