var https = require('https');

function getAndPrintHTML (options) {



  https.get(options, function (response) {

    var data = '';
    response.setEncoding('utf8');

    response.on('data', function (chunk) {
      data += chunk;
    });

    response.on('end', function() {
     console.log(data);
    });


});

}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
getAndPrintHTML(requestOptions);
