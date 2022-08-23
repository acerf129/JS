var type = "Mercedes";

    var myCar = {
      type: "BMW",

      getType: function () {
        return this.type;
      },

      getTypeFuncion: function () {
        //var thisIncontext=this;
        return function () {
            return this.type;
          //return thisIncontext.type; solution
        }
      }
    };
    console.log(myCar.getType());//BMW
    console.log(myCar.getTypeFuncion()());//Mercedes

    function giveMeFunctions() {
        var functions = [];
        for (var i = 0; i < 3; i++) {
          functions[i] = function () {
            return i * i;
          }
        }
        return functions;
      }
    //solution
    function giveMeFunctions() {
        var functions = [];
        for (var i = 0; i < 3; i++) {
          functions[i] = function (arg) {
            return function () {
              return arg * arg;
            }
          }(i);
        }
        return functions;
    }      