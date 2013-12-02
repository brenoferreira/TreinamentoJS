Functions = {
  soma: function(x, y) {
    return x + y;
  },

  sub: function(x, y) {
    return this.soma(x, -y);
  },

  mult: function(){
    return arguments[0] * arguments[1];
  },

  fatorial: function(n){
    if(n === 0) return 1;
    else return n * this.fatorial(n -1);
  },

  somaCurried: function(x){
    return function(y){
      return x + y;
    }
  }
}

closure = function(x) {
  this.funcaoPublica = function(){
    return funcaoPrivada();
  };

  funcaoPrivada = function(){
    return x;
  }
};