var https = require('https');

module.exports = function getHTML (options, callback) {
    https.get(options, function (response) {

    var data = '';
    response.setEncoding('utf8');

    response.on('data', function (chunk) {
      data += chunk;
    });

    response.on('end', function() {
     callback(data);
    });

  })
};
