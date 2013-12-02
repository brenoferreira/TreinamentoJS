ArrayOps = {
  map: function(f, array){
    if(array.length == 0) return [];
    else return [f(array[0])].concat(ArrayOps.map(f, array.slice(1)));
  },

  filter: function(f, array){
    return ArrayOps.map(function(n) { if (f(n)) return n; else return [] }, array);
  }
}