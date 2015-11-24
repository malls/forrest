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
        url: 'http://jasonrivette.com/',
        text: 'jason rivette'
    },
    {
        url: 'http://darciewilder.com/',
        text: 'darcie wilder'
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
    }
];

function getRandomFile(files) {
    var index = Math.floor((Math.random() * (files.length - 1) + 1));
    return files[index];
}

module.exports = {
    friends: friends,
    links: links,
    press: press,
    getRandomFile: getRandomFile
};