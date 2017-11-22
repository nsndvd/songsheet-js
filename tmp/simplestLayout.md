<a name="SimplestLayout"></a>

## SimplestLayout ⇐ <code>Layout</code>
The first and simplest layout covering all important features.

**Kind**: global class  
**Extends**: <code>Layout</code>  
**See**: Layout  

* [SimplestLayout](#SimplestLayout) ⇐ <code>Layout</code>
    * [new SimplestLayout(settings)](#new_SimplestLayout_new)
    * [.gen(song)](#SimplestLayout+gen) ⇒ <code>pdfMake</code>
    * [.print_block(block, count)](#SimplestLayout+print_block)
    * [.print_line(line, border)](#SimplestLayout+print_line)
    * [.go_through_blocks_and_print(song)](#SimplestLayout+go_through_blocks_and_print)
    * [.write_block_header(block, count)](#SimplestLayout+write_block_header)
    * [.write_last_block(block, counter)](#SimplestLayout+write_last_block)

<a name="new_SimplestLayout_new"></a>

### new SimplestLayout(settings)

| Param | Type | Description |
| --- | --- | --- |
| settings | <code>Object</code> | settings which can be applied to this layout (optional). |
| settings.font | <code>string</code> | Available fonts are 'ubuntu', 'anonymous', 'roboto'. default is 'ubuntu' |
| settings.table | <code>boolean</code> | Display tablelines. default is true |
| settings.annotations | <code>boolean</code> | Display annotations. default is true |

<a name="SimplestLayout+gen"></a>

### simplestLayout.gen(song) ⇒ <code>pdfMake</code>
generates a pdfMake object for a given Song object.

**Kind**: instance method of [<code>SimplestLayout</code>](#SimplestLayout)  
**Returns**: <code>pdfMake</code> - json - pdfMake json object  

| Param | Type | Description |
| --- | --- | --- |
| song | <code>Song</code> | Song object to generate a pdfMake object for. |

<a name="SimplestLayout+print_block"></a>

### simplestLayout.print_block(block, count)
generates a pdfMake object for a block with a given amount of repetitions

**Kind**: instance method of [<code>SimplestLayout</code>](#SimplestLayout)  

| Param | Type | Description |
| --- | --- | --- |
| block | <code>Block</code> | Block to print |
| count | <code>number</code> | amount of repetitions |

<a name="SimplestLayout+print_line"></a>

### simplestLayout.print_line(line, border)
generates a pdfMake object for a line with a border

**Kind**: instance method of [<code>SimplestLayout</code>](#SimplestLayout)  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>Line</code> | Line object to print |
| border | <code>string</code> | string where borders should be displayed: 'B' -> bottom, 'L' -> left, 'T' -> top, 'R' -> right |

<a name="SimplestLayout+go_through_blocks_and_print"></a>

### simplestLayout.go_through_blocks_and_print(song)
interates through all blocks of a song and generates the pdfMake object

**Kind**: instance method of [<code>SimplestLayout</code>](#SimplestLayout)  

| Param | Type | Description |
| --- | --- | --- |
| song | <code>Song</code> | Song to print |

<a name="SimplestLayout+write_block_header"></a>

### simplestLayout.write_block_header(block, count)
creates the header for a block

**Kind**: instance method of [<code>SimplestLayout</code>](#SimplestLayout)  

| Param | Type | Description |
| --- | --- | --- |
| block | <code>Block</code> | Block to parse |
| count | <code>number</code> | repetition amount of this block |

<a name="SimplestLayout+write_last_block"></a>

### simplestLayout.write_last_block(block, counter)
creates the header for a block

**Kind**: instance method of [<code>SimplestLayout</code>](#SimplestLayout)  

| Param | Type | Description |
| --- | --- | --- |
| block | <code>Block</code> | Block to parse |
| counter | <code>number</code> | repetition amount of this block |

