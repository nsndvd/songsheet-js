<a name="Song"></a>

## Song
Song object describing a whole song

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | title of this song |
| artist | <code>string</code> | artist of this song |
| bpm | <code>string</code> | bpm of this song |
| books | <code>Array.&lt;string&gt;</code> | books where this song can be found |
| order | <code>Array.&lt;string&gt;</code> | array of titles in the order how they should be printed |
| layout | <code>number</code> | layout id (SimplestLayout = 0) |
| blocks | <code>Array.&lt;Block&gt;</code> | array of blocks identified by there titles |
| ann_cells | <code>number</code> | max annotation cells in whole song |
| lyrics_width | <code>number</code> | max width of lyrics |


* [Song](#Song)
    * [new Song(string, layout, layout_settings)](#new_Song_new)
    * [.set_blocks(blocks)](#Song+set_blocks)
    * [.set_font(font)](#Song+set_font)
    * [.set_line_height(height)](#Song+set_line_height)
    * [.gen()](#Song+gen) ⇒ <code>pdfMake</code>
    * [.get_order()](#Song+get_order) ⇒ <code>Array.&lt;string&gt;</code>

<a name="new_Song_new"></a>

### new Song(string, layout, layout_settings)

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | whole song to parse to a Song |
| layout | <code>number</code> | layout id (SimplestLayout = 0) |
| layout_settings | <code>Object</code> | see Layout constructor |

<a name="Song+set_blocks"></a>

### song.set_blocks(blocks)
set blocks, ann_cells and lyrics_width

**Kind**: instance method of [<code>Song</code>](#Song)  

| Param | Type | Description |
| --- | --- | --- |
| blocks | <code>Array.&lt;Block&gt;</code> | array of blocks |

<a name="Song+set_font"></a>

### song.set_font(font)
set font

**Kind**: instance method of [<code>Song</code>](#Song)  

| Param | Type | Description |
| --- | --- | --- |
| font | <code>string</code> | string which identifies a font |

<a name="Song+set_line_height"></a>

### song.set_line_height(height)
set line height

**Kind**: instance method of [<code>Song</code>](#Song)  

| Param | Type | Description |
| --- | --- | --- |
| height | <code>number</code> | set line height |

<a name="Song+gen"></a>

### song.gen() ⇒ <code>pdfMake</code>
generate Song

**Kind**: instance method of [<code>Song</code>](#Song)  
**Returns**: <code>pdfMake</code> - pdfMake object of this song  
<a name="Song+get_order"></a>

### song.get_order() ⇒ <code>Array.&lt;string&gt;</code>
gets order of blocks for this song

**Kind**: instance method of [<code>Song</code>](#Song)  
**Returns**: <code>Array.&lt;string&gt;</code> - return all blocks identified by their title  
