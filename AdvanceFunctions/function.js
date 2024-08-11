function constfuncs() {
    var funcs = [];
    for (var i = 0; i < 5; i++) {
      funcs[i] = function() {
        return i;
      };
    }
    return funcs;
  }
 console.log(constfuncs);