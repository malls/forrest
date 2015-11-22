var fs = require('fs'),
    request = require('request'),
    i = 1;

function makeIndex(num) {
    if (num.toString().length >= 3) return num;
    if (num.toString().length === 2) return '0' + num;
    if (num.toString().length === 1) return '00' + num;
}

function download(index) {
    index = makeIndex(index);
    var url = 'http://static4.grsites.com/archive/textures/marb/marb' + index + '.jpg';

    request.head(url, function(err, res, body) {
        i++;

        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        if (res.headers['content-length']) {
            request(url)
                .pipe(fs.createWriteStream('public/images/marble/marb' + index + '.jpg'))
                .on('close', function() {
                    console.log('grabbed file marb' + index + '.jpg');
                    if (i > 197) return;
                    download(i);
                });
        } else {
            if (i > 197) return;
            download(i);
        }
    });
};

download(i);