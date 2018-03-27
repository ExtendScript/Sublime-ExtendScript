var fs = require('fs'),
  xml2js = require('xml2js');

var parser = new xml2js.Parser();
var fn = 'omv$indesign-10.064$10.0';

fs.readFile('src/' + fn + '.xml', function(err, data) {
  parser.parseString(data, function(err, result) {
    var json = JSON.stringify(result);
    fs.writeFile('src/' + fn + '.json', json, 'utf8', function(err) {
      if (err){

      return console.log(err);
      }else{

      console.log('Done');
      }

    });
  });
});