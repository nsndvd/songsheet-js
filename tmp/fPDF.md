<a name="fPDF"></a>

## fPDF
fPDF wrapper for pdfMake

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| widths | <code>Array.&lt;string&gt;</code> | widths of current table |
| line_buffer | <code>Array.&lt;Object&gt;</code> | line buffer containing cells of current line |
| table_buffer | <code>Array.&lt;Object&gt;</code> | table buffer containing lines of current table |
| body | <code>Array.&lt;Object&gt;</code> | contaning tables of whole document |
| footer | <code>Object</code> | function or object for the footer (see pdfMake) |
| last_border | <code>Array.&lt;string&gt;</code> | the last border applied to a cell |
| line_height | <code>number</code> | line height of this document |


* [fPDF](#fPDF)
    * _instance_
        * [.cell(content, border, margin)](#fPDF+cell)
        * [.new_line()](#fPDF+new_line)
        * [.set_widths(widths)](#fPDF+set_widths)
        * [.new_table()](#fPDF+new_table)
        * [.get_body_as_string()](#fPDF+get_body_as_string)
        * [.set_font(font)](#fPDF+set_font)
        * [.set_footer(content)](#fPDF+set_footer)
    * _static_
        * [.get_border(border)](#fPDF.get_border) ⇒ <code>Array.&lt;boolean&gt;</code>
        * [.get_text(string, font_size, weight, color)](#fPDF.get_text) ⇒ <code>pdfMake</code>
        * [.get_image(base64, width)](#fPDF.get_image) ⇒ <code>pdfMake</code>
        * [.rgb(color)](#fPDF.rgb) ⇒ <code>string</code>
        * [.check_border_val(char, border)](#fPDF.check_border_val) ⇒ <code>boolean</code>

<a name="fPDF+cell"></a>

### fPDF.cell(content, border, margin)
adds a cell to the current table

**Kind**: instance method of [<code>fPDF</code>](#fPDF)  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> | string or object from get_text or get_image |
| border | <code>string</code> | border for this cell. string contains letter T,B,R,L for top, bottom, right, left |
| margin | <code>Array.&lt;number&gt;</code> \| <code>number</code> | margin property of pdfMake |

<a name="fPDF+new_line"></a>

### fPDF.new_line()
adds empty cells to complete a line and reset buffer.

**Kind**: instance method of [<code>fPDF</code>](#fPDF)  
<a name="fPDF+set_widths"></a>

### fPDF.set_widths(widths)
set widths of table and multiply each width by 2.5 to convert cm to points

**Kind**: instance method of [<code>fPDF</code>](#fPDF)  

| Param | Type | Description |
| --- | --- | --- |
| widths | <code>Array.&lt;number&gt;</code> | widths of each table cell. if cell should fill the rest of the line use '*'. |

<a name="fPDF+new_table"></a>

### fPDF.new_table()
clear buffer and start a new table.

**Kind**: instance method of [<code>fPDF</code>](#fPDF)  
<a name="fPDF+get_body_as_string"></a>

### fPDF.get_body_as_string()
returns the body property with the footer

**Kind**: instance method of [<code>fPDF</code>](#fPDF)  
<a name="fPDF+set_font"></a>

### fPDF.set_font(font)
set font for this pdf

**Kind**: instance method of [<code>fPDF</code>](#fPDF)  

| Param | Type | Description |
| --- | --- | --- |
| font | <code>string</code> | string id for font |

<a name="fPDF+set_footer"></a>

### fPDF.set_footer(content)
set the footer to content

**Kind**: instance method of [<code>fPDF</code>](#fPDF)  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>Object</code> | pdfMake object for the footer |

<a name="fPDF.get_border"></a>

### fPDF.get_border(border) ⇒ <code>Array.&lt;boolean&gt;</code>
**Kind**: static method of [<code>fPDF</code>](#fPDF)  
**Returns**: <code>Array.&lt;boolean&gt;</code> - - borders as boolean in order l,t,r,b  

| Param | Type | Description |
| --- | --- | --- |
| border | <code>string</code> \| <code>number</code> | border for this cell. string contains letter T,B,R,L for top, bottom, right, left or 1 for all borders or 0 for no borders |

<a name="fPDF.get_text"></a>

### fPDF.get_text(string, font_size, weight, color) ⇒ <code>pdfMake</code>
**Kind**: static method of [<code>fPDF</code>](#fPDF)  
**Returns**: <code>pdfMake</code> - pdfMake object with all wished properties  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | string for the content |
| font_size | <code>number</code> | font size |
| weight | <code>string</code> | weight of the text (bold or italics) |
| color | <code>Array.&lt;number&gt;</code> | color of the text as an array of rgb as values from 0 to 255 |

<a name="fPDF.get_image"></a>

### fPDF.get_image(base64, width) ⇒ <code>pdfMake</code>
**Kind**: static method of [<code>fPDF</code>](#fPDF)  
**Returns**: <code>pdfMake</code> - pdfMake object for the image  

| Param | Type | Description |
| --- | --- | --- |
| base64 | <code>string</code> | base64 of image |
| width | <code>number</code> | width of the image |

<a name="fPDF.rgb"></a>

### fPDF.rgb(color) ⇒ <code>string</code>
**Kind**: static method of [<code>fPDF</code>](#fPDF)  
**Returns**: <code>string</code> - hex color  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>Array.&lt;number&gt;</code> | rgb array with values of 0 to 255 |

<a name="fPDF.check_border_val"></a>

### fPDF.check_border_val(char, border) ⇒ <code>boolean</code>
**Kind**: static method of [<code>fPDF</code>](#fPDF)  
**Returns**: <code>boolean</code> - whether char is in border (0 = false, 1 = true)  

| Param | Type | Description |
| --- | --- | --- |
| char | <code>char</code> | char to check for |
| border | <code>string</code> \| <code>number</code> | border string or number 0,1 to check in |

