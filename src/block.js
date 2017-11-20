
class Block{
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
    }

    get_printed_counter(){
        this.printed++;
        return this.printed - 1;
    }

    all_diff_printed(){
        return this.printed === this.max_diff_annotations;
    }
}
