#!/usr/bin/env bash
# merge and min files
    # merge files
    cat ./src/header.js ./src/block.js ./src/layouts/layout.js ./src/line.js ./src/parser.js ./src/song.js ./src/songsheetGen.js ./src/utils.js ./src/layouts/simplestLayout.js ./src/fPDF.js ./src/pdfmake/build/pdfmake.js ./src/layouts/vfs_fonts.js ./src/images.js > ./songsheet.js
    # minify file
    #uglifyjs songsheet.js > ../songsheet-webeditor/src/script/songsheet.min.js
    uglifyjs songsheet.js > ./songsheet.min.js
