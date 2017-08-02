
class Line{
    constructor(line){
        let res = Line.parse_line(line);
        this.lyrics = res[0];
        this.annotations = res[1];
        this.width = res[2];
        this.diff_annotations = res[3];
        this.ann_cells = this.annotations.length;
        this.has_annotations = this.ann_cells !== 0;
        this.parent = null;
    }

    static parse_line(line){
        let top_line = '';
        let bottom_line_markup = line.split('|')[0].replace(/(^\s+|\s+$)/g, '');
        let bottom_line = bottom_line_markup.replace(MARKUP_REP_REG, '');
        bottom_line_markup = bottom_line_markup.replace(/\[.*?\]/g, '');
        let res = Line.parse_annotations(line);
        let annotations = res[0];
        let diff_annotations = res[1];

        let old_offset = 0;
        let offset = bottom_line.indexOf('[');
        let end = bottom_line.indexOf(']');
        let len = end - offset;

        //TODO: solution for not forcing to have a chord
        let i = 0;
        while(offset !== -1 && end !== -1){
            //add spaces
            if(offset - old_offset > 0)
                top_line += new Array(offset - old_offset + 1).join(' ');

            top_line += bottom_line.substr(offset + 1, len - 1).replace(/(^\s+|\s+$)/g, '') + ' ';
            bottom_line = bottom_line.substr(0, offset) + bottom_line.substr(end + 1);

            old_offset = top_line.length;
            offset = bottom_line.indexOf('[');
            end = bottom_line.indexOf(']');
            len = end - offset;
        }
        return [[top_line, bottom_line_markup], annotations, max(top_line.length, bottom_line.length), diff_annotations];
    }

    static parse_annotations(line){
        let splitted = line.split('|');
        let annotations = [];
        let i = 0;
        let diff_annotations = 0;   // max different block annotations
        for (let a of splitted){
            // lyrics are not wanted
            if (i !== 0){
                //if annotation is array convert entries to string
                if(/;/.test(a)){
                    a = Line.parse_array(a);
                    a = Line.strip_each_entry(a);
                    annotations[annotations.length] = a;
                    diff_annotations = max(a.length, diff_annotations);
                }else
                    annotations[annotations.length] = a.replace(/(^\s+|\s+$)/g, '');
            }
            i++;
        }
        return [annotations, diff_annotations];
    }

    static parse_array(a){
        a = '[\'' + a.replace(/;/g, '\',\'') + '\']';
        return eval(a);
    }

    static strip_each_entry(a){
        for(let i = 0; i < a.length; i++)
            a[i] = a[i].replace(/(^\s+|\s+$)/g, '');
        return a;
    }
}
