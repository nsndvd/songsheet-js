
class Layout{
    constructor(settings){
        if(new.target === Layout)
            throw new TypeError('this Class is an abstract class.');

        this.pdf = new fPDF();
        this.font = DEFAULT_FONT;
        this.font_size = 10;
        this.table = false;
        this.annotations = false;
        this.song = null;

        if(settings && 'table' in settings)
            this.table = settings['table'];
        if(settings && 'annotations' in settings)
            this.annotations = settings['annotations'];

        pdfMake.fonts = FONTS;
    }

    gen(song){
        if(new.target === Layout)
            throw new TypeError('this Class is an abstract class.');
    }

    print_block(block, counter){
        if(new.target === Layout)
            throw new TypeError('this Class is an abstract class.');
    }

    print_line(line){
        if(new.target === Layout)
            throw new TypeError('this Class is an abstract class.');
    }

    set_font(font){
        font = font || DEFAULT_FONT;
        for(let f in FONTS)
            if(font === f)
                this.font = font;
    }

    /**
     * * - italic
     * ** - bold
     * <r> - red
     * <g> - green
     * <b> - blue
     */
    parse_markdown_line(string){
        let line = [];

        let first = true;
        string += ' ';     // catch * at the end

        let s = new State();
        let match = string.match(MARKUP_REG);
        if(match === null){
            line[0] = fPDF.get_text(string, this.font_size);
            string = '';
        }
        while(match){
            let skip = match[0].length;
            let weight = s.is_bold ? 'B' : '';
            weight += s.is_italic ? 'I' : '';

            let text = string.substr(0, string.search(new RegExp(escapeRegExp(match[0]))));
            line[line.length] = fPDF.get_text(text, this.font_size, weight, s.color);

            if(/\*[^*]/.test(match[0]))
                skip -= 1;
            string = string.substr(text.length + skip);

            s.update(match[0]);

            match = string.match(MARKUP_REG);
            first = false;
        }
        let weight = s.is_bold ? 'B' : '';
        weight += s.is_italic ? 'I' : '';

        if(string.length > 0)
            line[line.length] = fPDF.get_text(string, this.font_size, weight, s.color);
        return line;
    }

    write_title(title, artist){
        this.pdf.set_widths(['*']);
        this.pdf.cell(fPDF.get_text(title, this.font_size + 2), 0);
        this.pdf.new_table();
    }

    write_header(bpm, books){
        let bpm_content = [this.pdf.get_image(bpm_image, 16), fPDF.get_text('', this.font_size - 2)];
        let books_content = [this.pdf.get_image(books_image, 16), fPDF.get_text(books[0], this.font_size - 2)];
        this.pdf.set_widths(['*', 10, 10, 10]);
        this.pdf.cell('', 0);
        this.pdf.cell(bpm_content, 0);
        this.pdf.cell(fPDF.get_text(bpm, this.font_size - 2), 0);
        this.pdf.cell(books_content, 0);
        this.pdf.new_table();
    }

    add_margin(){
        this.pdf.cell(' ', 0);
        this.pdf.new_table();
    }

    set_widths(){
        let width_lyr = 2 * this.song.lyrics_width;
        let width_ann = this.song.ann_cells > 0 ? (190 - width_lyr) / this.song.ann_cells : 0;

        if(width_ann === 0)
            width_lyr = '*';

        let widths = [width_lyr];
        for(let i = 1; i <= this.song.ann_cells; i++)
            widths[i] = width_ann;

        this.pdf.set_widths(widths);
    }
}

class State{
    constructor(){
        this.is_bold = false;
        this.is_italic = false;
        this.color = [0, 0, 0];
    }

    update(match){
        if(/\*[^*]/.test(match))
            this.is_italic = !this.is_italic;
        else if(/\*\*/.test(match))
            this.is_bold = !this.is_bold;
        else if(/<r>/.test(match))
            this.color = [255, 0, 0];
        else if(/<g>/.test(match))
            this.color = [0, 255, 0];
        else if(/<b>/.test(match))
            this.color = [0, 0, 255];
    }
}
