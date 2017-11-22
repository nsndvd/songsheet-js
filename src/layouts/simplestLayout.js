
class SimplestLayout extends Layout{
    constructor(settings){
        super(settings);
    }

    gen(song){
        let that = this;
        this.song = song;
        this.pdf.set_font(this.font);
        this.pdf.set_footer(function (currPage, pageCount){
            let text = fPDF.get_text('erstellt mit Songsheet '+currPage+ ' von '+pageCount, 8, undefined, [100, 100, 100]);
            text.width = 130;
            text.font = that.pdf.font;
            text.margin = [2, 1];
            return {
              columns: [
                  {text: '', width:'*'},
                  text,
                  {image: logo, width: 10},
                  {text: '', width: 25}
              ]
            };
        });

        // write header
        this.write_header(song.title, song.artist, song.bpm, song.books);

        // iterate over blocks for writing
        this.go_through_blocks_and_print(song);

        // print last block
        return this.pdf.get_body_as_string();
    }

    print_block(block, count){
        //padding top
        this.add_margin();

        // set cell widths
        this.set_widths();

        // write block header
        this.write_block_header(block, count);

        // write block
        for(let i = 0; i < block.lines.length; i++){
            let line = block.lines[i];
            if(/\w/.test(line.lyrics[0]) && i < block.lines.length - 1)
                this.print_line(line);
            else if(/\w/.test(line.lyrics[0]))
                this.print_line(line, 'B')
        }
    }

    print_line(line, border){
        border = border || '';
        let border_ann_1 = this.table ? border+'L' : 0;
        let border_ann = this.table ? 'L' : 0;
        this.pdf.cell(this.parse_markdown_line(line.lyrics[0]), 0);
        if(this.song.ann_cells > 0)
            this.pdf.cell('', border_ann);
        this.pdf.new_line();
        this.pdf.cell(this.parse_markdown_line(line.lyrics[1]), border);

        for(let i = 0; i < this.song.ann_cells; i++){
            let text = ' ';
            if(line.annotations.length >= i + 1){
                if(Array.isArray(line.annotations[i]))
                    text = line.annotations[i][line.parent.get_printed_counter()];
                else
                    text = line.annotations[i];
            }
            this.pdf.cell(this.parse_markdown_line(text), border_ann_1);
        }

        this.pdf.new_line();
    }

    go_through_blocks_and_print(song){
        let prev_block = new Block('', []);
        let counter = 1;
        for(let block of song.get_order()){
            // look forward and count amount of blocks
            // if next is equal increase counter
            // if next is not equal print prev block and
            // set prev_block to curr_block
            let next_block = song.blocks[block];
            if(prev_block === undefined)
                prev_block = next_block;
            else if(prev_block.title === '')
                prev_block = next_block;
            else if(next_block !== undefined && prev_block.title === next_block.title && next_block.all_diff_printed())
                counter ++;
            else{
                this.print_block(prev_block, counter);
                // set prev_block to next_block
                prev_block = next_block;
                counter = 1;
            }
        }

        if(prev_block !== undefined)
            this.write_last_block(prev_block, counter);
    }

    write_block_header(block, count){
        let block_header = block.title;
        if(count !== 1)
            block_header += ' ' + count + 'x';

        // check if table lines should be printed
        let border = this.table ? 'B' : 0;
        this.pdf.cell(this.parse_markdown_line(block_header), border);
        this.pdf.new_line();
    }

    write_last_block(block, counter){
        this.print_block(block, counter);
        this.pdf.cell(' ', 0);
        this.pdf.new_table();
    }
}
