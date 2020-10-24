const withImages = require('next-images');


module.exports = withImages({
    
        build: {
            transpile: ['gsap'],
        },
    
});