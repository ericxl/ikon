var pjson = require('./package.json');

var program = require('commander');
var PNGImage = require('pngjs-image');

program
    .version(pjson.version, '-v, --version');

program
    .option("-r, --red <red>", "Red")
    .option("-g, --green <green>", "Green")
    .option("-b, --blue <blue>", "Blue")
    .option("-a, --alpha <alpha>", "Alpha")
    .option("-h, --hex <hex>", "Hex Color")
    .option("-n, --name <name>", "File name")


program
    .command('*')
    .description('generate image')
    .action(makeImage);

program.parse(process.argv);

exports.performSeriousCalculations = function (x) {
    //
    // Perform very serious calculations on very important data.
    //
    return 2 * x;
};

function makeImage(cmd){
    var options = program;
    var width = 50;
    var height = 50;
    var dimensions = cmd.split('x');
    if(dimensions.length <= 1){
        width = parseInt(dimensions[0]);
        height = width;
    }
    else {
        width = parseInt(dimensions[0]);
        height = parseInt(dimensions[1]);
    }

    var image = PNGImage.createImage(width, height);
    var r = 255;
    var g = 255;
    var b = 255;
    var a = 255;
    if(options.red){
        r = parseInt(options.red);
    }
    if(options.green){
        g = parseInt(options.green);
    }
    if(options.blue){
        b = parseInt(options.blue);
    }

    if(options.hex && (typeof options.hex === 'string' || options.hex instanceof String)){
        if(/^#?[0-9A-F]{6}$/i.test(''+options.hex)){
            var hexValue = options.hex.substr(options.hex.length - 6);
            r = parseInt(hexValue.substring(0,2), 16);
            g = parseInt(hexValue.substring(2,4), 16);
            b = parseInt(hexValue.substring(4,6), 16);
        }
    }

    if(options.alpha){
        a = parseInt(options.alpha);
    }

// Set a pixel at (20, 30) with red, having an alpha value of 100 (half-transparent)
    image.fillRect(0, 0, width, height, { red:r, green:g, blue:b, alpha:a });

    var outputDir = "./";
    var fileName = width+ "x" + height + ".png";

    if (options.name && (typeof options.name === 'string' || options.name instanceof String)){
        if (options.name.endsWith(".png")){
            fileName = options.name
        }
        else {
            fileName = options.name + ".png";
        }
    }

    image.writeImage(outputDir + fileName, function (err) {
        if (err) throw err;
        console.log('Written to the file');
    });
}