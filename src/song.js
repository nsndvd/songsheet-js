/**
 * Song object describing a whole song
 * @property {string} title - title of this song
 * @property {string} artist - artist of this song
 * @property {string} bpm - bpm of this song
 * @property {string[]} books - books where this song can be found
 * @property {string[]} order - array of titles in the order how they should be printed
 * @property {number} layout - layout id (SimplestLayout = 0)
 * @property {Block[]} blocks - array of blocks identified by there titles
 * @property {number} ann_cells - max annotation cells in whole song
 * @property {number} lyrics_width - max width of lyrics
 * */
class Song{
    /**
     * @constructor
     * @param {string} string - whole song to parse to a Song
     * @param {number} layout - layout id (SimplestLayout = 0)
     * @param {Object} layout_settings - see Layout constructor
     * */
    constructor(string, layout=null, layout_settings){
        this.lyrics_width = -1;
        this.ann_cells = 0;
        this.blocks = {};
        this.layout = layout || SIMPLEST_LAYOUT;

        let res = SongsheetParser.parse(string);
        this.title = res[0];
        this.artist = res[1];
        this.bpm = res[2];
        this.books = res[3];
        this.set_blocks(res[5]);
        this.order = res[4];

        this.layout = new SimplestLayout(layout_settings);
    }

    /**
     * set blocks, ann_cells and lyrics_width
     * @param {Block[]} blocks - array of blocks
     * */
    set_blocks(blocks){
        let width = -1;
        for(let block of blocks){
            this.blocks[block.title] = block;
            width = max(width, block.lyrics_width);
            this.ann_cells = max(this.ann_cells, block.annotation_cells);
        }
        this.lyrics_width = width;
    }

    /**
     * set font
     * @param {string} font - string which identifies a font
     * */
    set_font(font){
        this.layout.set_font(font);
    }

    /**
     * set line height
     * @param {number} height - set line height
     * */
    set_line_height(height){
        this.layout.set_line_height(height);
    }

    /**
     * generate Song
     * @returns {pdfMake} pdfMake object of this song
     * */
    gen(){
        return this.layout.gen(this);
    }

    /**
     * gets order of blocks for this song
     * @return {string[]} return all blocks identified by their title
     * */
    get_order(){
        return this.order;
    }
}
