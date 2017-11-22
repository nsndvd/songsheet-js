## Classes

<dl>
<dt><a href="#Layout">Layout</a></dt>
<dd><p>abstract Layout class. Basic constructor settings and helper classes.</p>
</dd>
<dt><a href="#State">State</a></dt>
<dd><p>State class which saves the current state of text formats while parsing a markdown string</p>
</dd>
</dl>

<a name="Layout"></a>

## Layout
abstract Layout class. Basic constructor settings and helper classes.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| pdf | <code>Object</code> | fPDF object |
| font | <code>string</code> | font to use for this layout |
| font_size | <code>number</code> | default font-size |
| table | <code>boolean</code> | whether to print table lines. default is true |
| annotations | <code>boolean</code> | whether to print annotations. default is true |
| song | <code>Object</code> | song which has this layout |


* [Layout](#Layout)
    * [new Layout(settings)](#new_Layout_new)
    * *[.gen(song)](#Layout+gen)*
    * *[.print_block(block, counter)](#Layout+print_block)*
    * *[.print_line(line)](#Layout+print_line)*
    * [.set_font(font)](#Layout+set_font)
    * [.parse_markdown_line(string)](#Layout+parse_markdown_line) ⇒ <code>Array.&lt;Line&gt;</code>
    * [.write_header(title, artist, bpm, books)](#Layout+write_header)
    * [.set_widths()](#Layout+set_widths)

<a name="new_Layout_new"></a>

### new Layout(settings)

| Param | Type | Description |
| --- | --- | --- |
| settings | <code>Object</code> | settings which can be applied to this layout (optional). |
| settings.font | <code>string</code> | Available fonts are 'ubuntu', 'anonymous', 'roboto'. default is 'ubuntu' |
| settings.table | <code>boolean</code> | Display tablelines. default is true |
| settings.annotations | <code>boolean</code> | Display annotations. default is true |

<a name="Layout+gen"></a>

### *layout.gen(song)*
generates a pdfMake object for a given Song object.

**Kind**: instance abstract method of [<code>Layout</code>](#Layout)  

| Param | Type | Description |
| --- | --- | --- |
| song | <code>Object</code> | Song object to generate a pdfMake object for. |

<a name="Layout+print_block"></a>

### *layout.print_block(block, counter)*
generates a pdfMake object for a block with a given amount of repetitions

**Kind**: instance abstract method of [<code>Layout</code>](#Layout)  

| Param | Type | Description |
| --- | --- | --- |
| block | <code>Object</code> | Block to print |
| counter | <code>number</code> | amount of repetitions |

<a name="Layout+print_line"></a>

### *layout.print_line(line)*
generates a pdfMake object for a line with a border

**Kind**: instance abstract method of [<code>Layout</code>](#Layout)  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>Object</code> | Line object to print |

<a name="Layout+set_font"></a>

### layout.set_font(font)
set font for this layout.

**Kind**: instance method of [<code>Layout</code>](#Layout)  

| Param | Type | Description |
| --- | --- | --- |
| font | <code>string</code> | Font to set |

<a name="Layout+parse_markdown_line"></a>

### layout.parse_markdown_line(string) ⇒ <code>Array.&lt;Line&gt;</code>
Parse markdown string to pdfMake json.
Options are:
* - italic
** - bold
<r> - red
<g> - green
<b> - blue

**Kind**: instance method of [<code>Layout</code>](#Layout)  
**Returns**: <code>Array.&lt;Line&gt;</code> - line - returns the string as an array of text elements in pdfMake format  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | string to parse |

<a name="Layout+write_header"></a>

### layout.write_header(title, artist, bpm, books)
parse title, artist, bpm and books to a pdfMake json.

**Kind**: instance method of [<code>Layout</code>](#Layout)  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | title of the song as a string |
| artist | <code>string</code> | artist as a string |
| bpm | <code>string</code> | bpm as a string |
| books | <code>Array.&lt;string&gt;</code> | array of books where the song is from |

<a name="Layout+set_widths"></a>

### layout.set_widths()
set widths of the tables with respect to amount of annotation cells

**Kind**: instance method of [<code>Layout</code>](#Layout)  
<a name="State"></a>

## State
State class which saves the current state of text formats while parsing a markdown string

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| is_bold | <code>boolean</code> | current text is bold |
| is_italic | <code>boolean</code> | current text is italic |
| color | <code>Array.&lt;number&gt;</code> | current color of the text as an array with values 0 to 255 |

<a name="State+update"></a>

### state.update(match)
updates the current state by the matched string

**Kind**: instance method of [<code>State</code>](#State)  

| Param | Type | Description |
| --- | --- | --- |
| match | <code>string</code> | update the current state by the matched string |

