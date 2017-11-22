<a name="Block"></a>

## Block
Block class

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Title of block |
| lines | <code>Object</code> | Array of Line objects |
| annotation_cells | <code>number</code> | how many annotation cells are needed |
| lyrics_width | <code>number</code> | maximum width of lyrics |
| max_diff_annotations | <code>number</code> | maximum different annotations per repetition |
| printed | <code>number</code> | how often a block is printed |


* [Block](#Block)
    * [new Block(title, lines)](#new_Block_new)
    * [.get_printed_counter()](#Block+get_printed_counter) ⇒ <code>number</code>
    * [.all_diff_printed()](#Block+all_diff_printed) ⇒ <code>boolean</code>

<a name="new_Block_new"></a>

### new Block(title, lines)

| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Title of this Block |
| lines | <code>Object</code> | Array of Line objects |

<a name="Block+get_printed_counter"></a>

### block.get_printed_counter() ⇒ <code>number</code>
returns current counter and increase it.

**Kind**: instance method of [<code>Block</code>](#Block)  
**Returns**: <code>number</code> - current counter  
<a name="Block+all_diff_printed"></a>

### block.all_diff_printed() ⇒ <code>boolean</code>
returns true if all different annotations are printed

**Kind**: instance method of [<code>Block</code>](#Block)  
**Returns**: <code>boolean</code> - this.printed === this.max_diff_annotations  
