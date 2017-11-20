
class SongsheetParser{
    constructor(){

    }

    static parse(string){
        let title = 'Song';
        let bpm = undefined;
        let artist = undefined;
        let books = [];
        let blocks = [];
        let order = [];
        let default_order = [];
        let curr_block_title = '';
        let lines = [];
        let info_keys = ['title', 'bpm', 'artist', 'books'];
        let infos_regex = new RegExp('('+info_keys.join('|')+')');

        for(let line of string.split(/\r?\n/)){
            //ignore empty lines
            if(!/\w/.test(line))
                continue;

          let offset_infos = SongsheetParser.escape_block(line).search(infos_regex);
          let offset_order = SongsheetParser.escape_block(line).indexOf('[order:');
          let offset_block = SongsheetParser.escape_block(line).indexOf('[block:');
          let end = line.indexOf(']');

            // force new lines after title and order
            if(offset_infos !== -1 && offset_order !== -1)
                throw Error('Meta data must be seperated in lines');

            // parse title
            if(offset_infos !== -1){
                let match;
                let str = SongsheetParser.escape_block(line);
                let offset = 0;
                while((match = str.search(infos_regex)) > 0 ){
                  let key = str.charAt(match) + str.charAt(match+1);
                  let key_length;
                  let separator = str.indexOf(';', match) > 0 ? str.indexOf(';', match) + offset : end - offset;
                  switch(key){
                    case 'ti':
                      key_length = 7;
                      title = line.substr(offset+match+key_length, separator - match - key_length);
                      break;
                    case 'bp':
                      key_length = 5;
                      bpm = line.substr(offset+match+key_length, separator - match - key_length);
                      break;
                    case 'ar':
                      key_length = 8;
                      artist = line.substr(offset+match+key_length, separator - match - key_length);
                      break;
                    case 'bo':
                      key_length = 7;
                      books = line.substr(offset+match+key_length, separator - match - key_length).split(',');
                      break;
                  }
                  str = str.substr(match+key_length);
                  offset += match+key_length;
                }
                console.log(title, bpm, artist, books);
                end = end - offset_infos - 7;
                title = line.substr(offset_infos + 7, end).replace(/(^\s+|\s+$)/g, '');
                continue;
            }

            // parse order
            if(offset_order !== -1){
                end = end - offset_order - 7;
                for(let block of line.substr(offset_order + 7, end).split(',')){
                    order[order.length] = block.replace(/(^\s+|\s+$)/g, '');
                }
                continue;
            }

            // start block
            if(offset_block !== -1){
                // save old block
                blocks[blocks.length] = new Block(curr_block_title, lines);
                lines = [];

                // get title
                end = end - offset_block - 8;
                curr_block_title = line.substr(offset_block + 8, end).replace(/(^\s+|\s+$)/g, '');
                // if order is emtpy save order of appearance
                default_order[default_order.length] = curr_block_title;
            }
            // parse block
            else
                lines[lines.length] = new Line(line);
        }

        blocks[blocks.length] = new Block(curr_block_title, lines);

        if(order.length === 0)
            order = default_order;

        return [title, order, blocks];
    }

    static escape_block(string){
        string = string.toLowerCase().replace(/\[\s+/, '');
        string = string.replace(/\s+:/, ':');
        return string
    }
}
