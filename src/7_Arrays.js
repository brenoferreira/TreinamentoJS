ArrayOps = {
  map: function(f, array){
    if(array.length == 0) return [];
    else{
      var res = f(array[0]);
      if(res === void 0) return ArrayOps.map(f, array.slice(1));
      else return [res].concat(ArrayOps.map(f, array.slice(1)));
    }
  },

  filter: function(f, array){
    return ArrayOps.map(function(n) { if (f(n)) return n; }, array);
  }
}