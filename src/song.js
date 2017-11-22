
class Song{
    constructor(string, layout, layout_settings){
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

        if(this.layout === REDUCED_LAYOUT)
            this.layout = new ReducedLayout(layout_settings);
        else
            this.layout = new SimplestLayout(layout_settings);
    }

    set_blocks(blocks){
        let width = -1;
        for(let block of blocks){
            this.blocks[block.title] = block;
            width = max(width, block.lyrics_width);
            this.ann_cells = max(this.ann_cells, block.annotation_cells);
        }
        this.lyrics_width = width;
    }

    set_font(font){
        this.layout.set_font(font);
    }

    set_line_height(height){
        this.layout.set_line_height(height);
    }

    gen(){
        return this.layout.gen(this);
    }

    get_order(){
        return this.order;
    }
}
