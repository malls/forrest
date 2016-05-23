var fs = require('fs-extended');

var friends = [
    {
        url: 'http://dallegretto.com/',
        text: 'dan allegretto'
    },
    {
        url: 'http://www.albedell.com/',
        text: 'al bedell'
    },
    {
        url: 'http://sammckinniss.com/',
        text: 'sam mckinniss'
    },
    {
        url: 'http://brycegrat.es/',
        text: 'bryce grates'
    },
    {
        url: 'http://www.sigridlauren.com/',
        text: 'sigrid lauren'
    },
    {
        url: 'http://kerrydoran.net/',
        text: 'kerry doran'
    },
    {
        url: 'http://kalliopimathios.com/',
        text: 'kalliopi mathios'
    },
    {
        url: 'http://mikepepi.com/',
        text: 'mike pepi'
    },
    {
        url: 'http://tcour.com/',
        text: 'brian droitcour'
    },
    {
        url: 'http://josephwaine.com/',
        text: 'joe waine'
    },
    {
        url: 'http://jasonrivette.com/',
        text: 'jason rivette'
    },
    {
        url: 'http://www.annakhachiyan.com/',
        text: 'anna khachiyan'
    },
    {
        url: 'http://darciewilder.com/',
        text: 'darcie wilder'
    },
    {
        url: 'http://alexanderiezzi.com',
        text: 'alex iezzi'
    },
    {
        url: 'http://seanmanchee.com',
        text: 'sean manchee'
    },
    {
        url: 'http://lilylakeboquet.com',
        text: 'lily lake'
    },
    {
        url: 'http://www.doajafri.com/',
        text: 'doa jafri'
    }
];

var links = [
    {
        url: 'mailto:_@forrestalmasi.com',
        text: '_@forrestalmasi.com'
    },
    {
        url: 'http://twitter.com/forrestalmasi',
        text: 'twitter.com/forrestalmasi'
    },    {
        url: 'http://twitter.com/everyphotoshop',
        text: 'twitter.com/everyphotoshop'
    },
    {
        url: 'http://raretides.tumblr.com',
        text: 'raretides.tumblr.com'
    },    {
        url: 'http://raretines.tumblr.com',
        text: 'raretines.tumblr.com'
    },
    {
        url: 'https://github.com/malls',
        text: 'github.com/malls'
    },
    {
        url: 'http://isitflagday.us/',
        text: 'isitflagday.us'
    },
    {
        url: 'http://gardenparty.club',
        text: 'gardenparty.club'
    }
];

var press = [
    {
        url: 'http://www.maskmagazine.com/the-substance-issue/life/interview-the-thread',
        text: 'Mask Magazine: The Thread'
    },
    {
        url: 'http://dismagazine.com/disco/51435/the-real-remixes-hit-the-beach/',
        text: 'Dis Magazine: The Real Remixes Hit The Beach'
    },
    {
        url: 'http://sexmagazine.us/sexlife/basically-basel-at-saras-house/',
        text: 'Sex Magazine: Basically Basel at Sara\'s House'
    },
    {
        url: 'http://www.franklinstreetworks.org/it-narratives-the-movement-of-objects-as-information/',
        text: 'Franlin Street Works: It Narratives: The Movement of Objects as Information'
    }
];

// function makeBlogs() {
//     var blogs = [];
//     var blogsList = fs.readdirSync('./public/texts/');

//     blogsList.forEach(function (item) {
//         blogs.push({
//             url: '/texts/' + item,
//             text: item
//         });
//     });
//     return blogs;
// }

function getRandomFile(files) {
    var index = Math.floor((Math.random() * (files.length - 1) + 1));
    return files[index];
}

function makeUrl (str) {
    if (str.indexOf('http') === 0) return str;
    return 'http://' + str;
}

function numberSuffixer (num) {
    var numString = num.toString();
    var index = numString.length - 1;
    if (numString[index - 1] == 1) {
        return numString + 'th'
    } else if (numString[index] == 1) {
        return numString + 'st';
    } else if (numString[index] == 2) {
        return numString + 'nd';
    } else if (numString[index] == 3) {
        return numString + 'rd';
    } else {
        return numString + 'th';
    }

}

module.exports = {
    // blogs: makeBlogs(),
    friends: friends,
    getRandomFile: getRandomFile,
    links: links,
    makeUrl: makeUrl,
    numberSuffixer: numberSuffixer,
    press: press
};