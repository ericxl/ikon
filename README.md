# Ikon

[![Build Status](https://travis-ci.org/ericxl/ikon.svg?branch=master)](https://travis-ci.org/ericxl/ikon)

  A simple plain PNG image generator for prototyping. No need to go to Photoshop!
  
  [API documentation](https://ericxl.github.io/ikon/)

## Usage

Generate a 200x200 png

    $ ikon 200x200
    $ ikon 200

Generate a png using rgb color
    
    $ ikon 200x100 -r 255 -g 0 -b 0
    
Generate a png using rgb color with alpha 
    
    $ ikon 200x100 -r 255 -g 0 -b 0 -a 125
    
Generate a png using hex color code 
    
    $ ikon 200x100 -h #51812b
    $ ikon 200x100 -h 51812b
    
Generate a png with a name image.png 
    
    $ ikon 200x100 -h #51812b -n image.png
    $ ikon 200x100 -h 51812b -n image
    
## License

MIT
    
