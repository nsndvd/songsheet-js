/**
 * Block class
 * @property {string} title - Title of block
 * @property {Object} lines - Array of Line objects
 * @property {number} annotation_cells - how many annotation cells are needed
 * @property {number} lyrics_width - maximum width of lyrics
 * @property {number} max_diff_annotations - maximum different annotations per repetition
 * @property {number} printed - how often a block is printed
 * */
class Block{
    /**
     * @constructor
     * @param {string} title - Title of this Block
     * @param {Line[]} lines - Array of Line objects
     * */
    constructor(title, lines){
        this.title = title;
        this.lines = lines;
        this.annotation_cells = 0;
        this.lyrics_width = -1;
        this.max_diff_annotations = 0;
        this.printed = 0;

        for(let line of lines){
            line.parent = this;
            this.lyrics_width = max(this.lyrics_width, line.width);
            this.annotation_cells = max(this.annotation_cells, line.ann_cells);
            this.max_diff_annotations = max(this.max_diff_annotations, line.diff_annotations);
        }

        if(title==='str 1'){
            console.log(this);
        }
    }

    /**
     * returns current counter.
     * @returns {number} current counter
     * */
    get_printed_counter(){
        return this.printed;
    }

    /**
     * increase current counter
     */
    increase_printed_counter(){
        this.printed++;
    }

    /**
     * returns true if all different annotations are printed
     * @return {boolean} this.printed === this.max_diff_annotations
     * */
    all_diff_printed(){
        return this.printed === this.max_diff_annotations;
    }
}
