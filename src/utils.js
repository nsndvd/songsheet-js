
function max(a, b){
    if(a >= b)
        return a;
    return b;
}

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
let REDUCED_LAYOUT = 1;
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

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
