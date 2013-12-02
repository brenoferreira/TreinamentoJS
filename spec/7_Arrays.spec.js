describe("Arrays", function(){
  it("map", function(){
    var dobrados = ArrayOps.map(function(n) { return n * 2}, [1, 2, 3]);

    expect(dobrados).toEqual([2, 4, 6]);
  });

  it("filter", function(){
    var mairQueUm = ArrayOps.filter(function(n) { return n > 1}, [1, 2, 3]);

    expect(mairQueUm).toEqual([2, 3]);
  });
});