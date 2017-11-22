#!/usr/bin/env bash
# merge and min files
    # merge files
    cat ./src/header.js ./src/block.js ./src/layouts/layout.js ./src/line.js ./src/parser.js ./src/song.js ./src/songsheetGen.js ./src/utils.js ./src/layouts/simplestLayout.js ./src/fPDF.js ./src/pdfmake/build/pdfmake.js ./src/layouts/vfs_fonts.js ./src/images.js > ./songsheet.js
    # minify file
    uglifyjs songsheet.js > songsheet.min.js

# generate docs
    # clone wiki git to tmp
    git clone https://github.com/jannessm/songsheet-js.wiki.git ./tmp
    # src files
    i=0
    f=()
    for filename in ./src/*; do
        if [ -f $filename ] ; then
            f[$i]=$(basename $filename .js)
            jsdoc2md $filename > ./tmp/$(basename $filename .js).md
            i=$i+1
        fi
    done
    # src/layouts
    for filename in ./src/layouts/*; do
        if [ -f $filename ] ; then
            f[$i]=$(basename $filename .js)
            jsdoc2md $filename > ./tmp/$(basename $filename .js).md
            i=$i+1
        fi
    done

    cat README.md > ./tmp/Home.md

    sorted=($(for l in ${f[@]}; do echo $l; done | sort))
    sidebar=$(echo "[[Home]]\n\n# files\n\n")
    for item in ${sorted[*]}
    do
        sidebar=$(echo "$sidebar - [[$item|$item]]\n")
    done
    echo -e $sidebar > ./tmp/_Sidebar.md
    echo -e '<span style="color:grey">Songsheet by Jannes Magnusson</span>' > ./tmp/_Footer.md

    cd ./tmp/
    git add *
    git commit -m "update wiki"
    git push origin master

    cd ..
    sudo rm -r ./tmp/