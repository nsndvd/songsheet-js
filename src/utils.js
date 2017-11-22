
/**
 * compare two integer
 * @param {number} a - first value
 * @param {number} b - second value
 * @return {boolean} a >= b
 * */
function max(a, b){
    if(a >= b)
        return a;
    return b;
}

/**
 * read text file
 * @param {string} file - path to file
 * @returns {string} file content
 * */
function readTextFile(file)
{
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status === 0)
            {
                return rawFile.responseText;
            }else{
                return null;
            }
        }
    };
    rawFile.send(null);
}

let SIMPLEST_LAYOUT = 0;
let DEFAULT_FONT = 'ubuntu';
let FONTS = {
    anonymous: {
        normal: 'AnonymousPro-Regular.ttf',
        bold: 'AnonymousPro-Bold.ttf',
        italics: 'AnonymousPro-Italic.ttf',
        bolditalics: 'AnonymousPro-BoldItalic.ttf',
    },
    ubuntu: {
        normal: 'UbuntuMono-R.ttf',
        bold: 'UbuntuMono-B.ttf',
        italics: 'UbuntuMono-RI.ttf',
        bolditalics: 'UbuntuMono-BI.ttf',
    },
    roboto: {
        normal: 'Roboto-Regular.ttf',
        bold: 'Roboto-Medium.ttf',
        italics: 'Roboto-Italic.ttf',
        bolditalics: 'Roboto-MediumItalic.ttf',
    },
};
let MARKUP_REG = /(\*[^*]|\*\*|<r>|<b>|<g>)/g;
let MARKUP_REP_REG = /(\*|<r>|<b>|<g>)/g;

/**
 * escape regular expressions
 * @param {string} str - string to escape
 * @return {string} escaped string
 * */
function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
