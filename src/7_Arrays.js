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
  },

  reduce: function(f, array, initial){
    if(array.length === 0) return initial;
    else return ArrayOps.reduce(f, array.slice(1), f(initial, array[0]));
  },

  all: function(f, array){
    return ArrayOps.filter(f, array).length == array.length;
  },

  any: function(f, array){
    return ArrayOps.filter(f, array).length > 0
  }
}