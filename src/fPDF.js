class fPDF{
	constructor(){
		this.widths = [];
		this.line_buffer = [];
		this.table_buffer = [];
		this.body = [];
		this.last_border = null;
		this.line_height = 1;
	}

	cell(content, border) {
		let id = this.line_buffer.length;
		this.last_border = fPDF.get_border(border);

		this.line_buffer[id] = {
		  text: content,
		  font: this.font,
		  border: this.last_border,
		  preserveLeadingSpaces: true,
		  lineHeight: this.line_height
		};

		// if get text was used unpack it
		if (Array.isArray(content) && content.length === 1)
			content = content[0];

		// if text is json
		if (typeof content === 'object' && !Array.isArray(content) && !content.image){
		    this.line_buffer[id].text = content.text || '';
			this.line_buffer[id].fontSize = content.fontSize;
			this.line_buffer[id].bold = content.bold;
            this.line_buffer[id].italics = content.italics;
			this.line_buffer[id].color = content.color;
		}

		// if content is array
        if (typeof content === 'object' && Array.isArray(content)){
			content[0].border = this.last_border;
			this.line_buffer[id] = content;
        }
	}

	new_line(){
		//add empty cells
		if(this.line_buffer.length < this.widths.length)
			for(let i = 0; i <= this.widths.length - this.line_buffer.length; i++)
				this.line_buffer[this.line_buffer.length] = {
					text: ' ',
					border: this.last_border,
					preserveLeadingSpaces: true,
					lineHeight: this.line_height
				};

		this.table_buffer[this.table_buffer.length] = this.line_buffer;
		this.line_buffer = [];
		this.last_border = [false, false, false, false];
	}

	set_widths(widths){
		for(let i = 0; i<widths.length; i++)
			if(typeof widths[i] === 'number')
        		widths[i] = widths[i] * 2.5;
		this.widths = widths;
	}

	new_table(){
		let id = this.body.length;
		this.new_line();

        if(this.table_buffer.length > 0)
            this.body[id] = {
                table: {
                    body: this.table_buffer,
                    dontBreakRows: true
                }
            };

		if(this.widths.length > 0)
			this.body[id].table.widths = this.widths;

		this.table_buffer = [];
		this.widths = [];
	}

	get_body_as_string(){
		return {
			content : this.body
		}
	}

	set_font(font){
		this.font = font;
	}

	static get_border(border){
        let border_l = fPDF.check_border_val('L', border);
        let border_t = fPDF.check_border_val('T', border);
        let border_r = fPDF.check_border_val('R', border);
        let border_b = fPDF.check_border_val('B', border);
        return [border_l, border_t, border_r, border_b];
	}

	static get_text(string, font_size, weight, color){
		let bold = typeof weight !== 'undefined' && weight.toLowerCase().indexOf('b') > -1;
		let italics = typeof weight !== 'undefined' && weight.toLowerCase().indexOf('i') > -1;
		color = color ? fPDF.rgb(color) : 'black';

		return {
			text: string,
			fontSize: font_size,
			bold: bold,
			italics: italics,
			color: color,
      		preserveLeadingSpaces: true,
            lineHeight: this.line_height
		}
	}

	get_image(path, width){
		return {
			image: path,
			width: width
		}
	}

	static rgb(color){
		let r = color[0].toString(16);
		if(r.length === 1)
			r = 0+r;
		let g = color[1].toString(16);
		if(g.length === 1)
			g = 0+g;
		let b = color[2].toString(16);
		if(b.length === 1)
			b = 0+b;

		return '#' + r + g + b;
	}

	static check_border_val(char, border){
		if(border !== null)
			if(typeof border === 'number') {
        if (border === 1)
          return true;
      }else{
				if(border.indexOf(char) > -1)
					return true;
			}
		return false;
	}
}
