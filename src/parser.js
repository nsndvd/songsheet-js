
class SongsheetParser{
    constructor(){

    }

    static parse(string){
        let title = 'Song';
        let blocks = [];
        let order = [];
        let default_order = [];
        let curr_block_title = '';
        let lines = [];

        for(let line of string.split(/\r?\n/)){
            //ignore empty lines
            if(!/\w/.test(line))
                continue;

            let offset_title = SongsheetParser.escape_block(line).indexOf('[title:');
            let offset_order = SongsheetParser.escape_block(line).indexOf('[order:');
            let offset_block = SongsheetParser.escape_block(line).indexOf('[block:');
            let end = line.indexOf(']');

            // force new lines after title and order
            if(offset_title !== -1 && offset_order !== -1)
                throw Error('Meta data must be seperated in lines');

            // parse title
            if(offset_title !== -1){
                end = end - offset_title - 7;
                title = line.substr(offset_title + 7, end).replace(/(^\s+|\s+$)/g, '');
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
