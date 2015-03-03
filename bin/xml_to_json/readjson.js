Array.prototype.unique = function (){
    var r =  [];
    o:for(var i = 0, n = this.length; i < n; i++){
        for(var x = 0, y = r.length; x < y; x++){
            if(r[x]==this[i]) continue o;}
        r[r.length] = this[i];}
    return r;
};
var fs = require('fs');
var fn = 'omv$indesign-10.064$10.0';
var util = require("util");

fs.readFile('src/' + fn + '.json', 'utf8', function(err, data) {
  if (err) {
    return console.error(err);
  } else {
    var classes = [];
    methods = [];
    properties = [];
    var json = JSON.parse(data);
    // console.log(util.inspect(json.dictionary.package[0].classdef[0], true, 2, true));
    var pkg = json.dictionary.package[0];
    for (var i = 0; i < pkg.classdef.length; i++) {
      var cdef = pkg.classdef[i];
      // console.log(cdef.$.name);
      classes.push(cdef.$.name);
      for (var j = 0; j < cdef.elements.length; j++) {
        var ele = cdef.elements[j];
        // console.log(util.inspect(ele.method, true, 2, true));
        // for(var key in ele.method){
        //   console.log(key);
        // }
        // console.log(ele.property[0]);
        if (ele.hasOwnProperty('method')) {
          // console.log('has method');
          for (var l = 0; l < ele.method.length; l++) {
            var meth = ele.method[l];
            // console.log(meth.$.name);
            methods.push(meth.$.name);
          }
        } else {
          // console.log('has not method');
        }
        for (var k = 0; k < ele.property.length; k++) {
          var prop = ele.property[k];
          // console.log(prop.$.name);
          properties.push(prop.$.name);
        }


      }

    }

var filter = function(elem, pos) {
    return this.indexOf(elem) == pos;
  };
var uniqueclasses = classes.unique();
var uniquemethods = methods.unique();
var uniqueproperties = properties.unique();

// console.log(uniqueclasses, uniqueproperties, uniquemethods);
fs.writeFile('src/classes.txt',uniqueclasses,'utf8');
fs.writeFile('src/methods.txt',uniquemethods,'utf8');
fs.writeFile('src/properties.txt',uniqueproperties,'utf8');
  }
});