'use strict';

const $ = require('jquery');

const Data = {
    photos: [{
        date: 'October 2015',
        loc: 'Cambridge, England',
        url: '/photos/IMG_8190.jpg',
    }, {
        date: 'October 2015',
        loc: 'Cambridge, England',
        url: '/photos/IMG_8203.jpg',
    }, {
        date: 'December 2015',
        loc: 'C\xF3rdoba, Spain',
        url: '/photos/IMG_8254.jpg',
    }, {
        date: 'December 2015',
        loc: 'Granada, Spain',
        url: '/photos/IMG_8292.jpg',
    }, {
        date: 'December 2015',
        loc: 'Granada, Spain',
        url: '/photos/IMG_8317.jpg',
    }, {
        date: 'December 2015',
        loc: 'Granada, Spain',
        url: '/photos/IMG_8329.jpg',
    }, {
        date: 'December 2015',
        loc: 'Granada, Spain',
        url: '/photos/IMG_8333.jpg',
    }, {
        date: 'December 2015',
        loc: 'Granada, Spain',
        url: '/photos/IMG_8379.jpg',
    }, {
        date: 'April 2016',
        loc: 'Herriman, Utah',
        url: '/photos/IMG_8473.jpg',
    }, {
        date: 'June 2016',
        loc: 'London, England',
        url: '/photos/IMG_0734.jpg',
    }, {
        date: 'August 2016',
        loc: 'Eugene, Oregon',
        url: '/photos/IMG_8753.jpg',
    }, {
        date: 'August 2016',
        loc: 'Woodstock, New York',
        url: '/photos/IMG_8866.jpg',
    }, {
        date: 'June 2017',
        loc: 'Ithaca, New York',
        url: '/photos/IMG_8966.jpg',
    }, {
        date: 'July 2017',
        loc: 'Brooktondale, New York',
        url: '/photos/IMG_8976.jpg',
    }, {
        date: 'July 2017',
        loc: 'Beacon, New York',
        url: '/photos/IMG_9060.jpg',
    }, {
        date: 'July 2017',
        loc: 'Beacon, New York',
        url: '/photos/IMG_9066.jpg',
    }, {
        date: 'July 2017',
        loc: 'Beacon, New York',
        url: '/photos/IMG_9078.jpg',
    }],

    init: function() {
        // change vertical scroll to horizontal in content
        window.addEventListener('mousewheel', function (e) {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                let pos = $('.site__main').scrollLeft();
                $('.site__main').scrollLeft(pos + e.deltaY);
                e.preventDefault();
            }
        });

        // load photos
        var tmpl = require('views/photo');
        for (var i = Data.photos.length - 1; i >= 0; i--) {
            var html = tmpl(Data.photos[i]);
            $('.site__content').append(html);
        }
    }
};

module.exports = Data;
