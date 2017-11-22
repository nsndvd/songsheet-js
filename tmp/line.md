<a name="Line"></a>

## Line
Line object

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| lyrics | <code>Array.&lt;string&gt;</code> | [top_line, bottom_line] with lyrics and chords |
| annotations | <code>Array.&lt;string&gt;</code> | array of all annotaions |
| width | <code>number</code> | maximum width of lyrics |
| diff_annotations | <code>number</code> | different annotations per repetition |
| ann_cells | <code>number</code> | how many annotation cells are defined |
| has_annotations | <code>boolean</code> | whether this line has annotations |
| parent | <code>Block</code> | block where this line is in |


* [Line](#Line)
    * [new Line(line)](#new_Line_new)
    * [.parse_line(line)](#Line.parse_line) ⇒ <code>Array</code>
    * [.parse_annotations(line)](#Line.parse_annotations) ⇒ <code>Array</code>
    * [.parse_array(a)](#Line.parse_array) ⇒ <code>Array.&lt;string&gt;</code>
    * [.strip_each_entry(a)](#Line.strip_each_entry) ⇒ <code>Array.&lt;string&gt;</code>

<a name="new_Line_new"></a>

### new Line(line)

| Param | Type | Description |
| --- | --- | --- |
| line | <code>string</code> | string to parse as a line |

<a name="Line.parse_line"></a>

### Line.parse_line(line) ⇒ <code>Array</code>
**Kind**: static method of [<code>Line</code>](#Line)  
**Returns**: <code>Array</code> - - [[top_line, bottom_line], annotations, max_length, diff_annotations]  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>string</code> | string to parse |

<a name="Line.parse_annotations"></a>

### Line.parse_annotations(line) ⇒ <code>Array</code>
**Kind**: static method of [<code>Line</code>](#Line)  
**Returns**: <code>Array</code> - - [annotations, diff_annotations]  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>string</code> | string to parse |

<a name="Line.parse_array"></a>

### Line.parse_array(a) ⇒ <code>Array.&lt;string&gt;</code>
**Kind**: static method of [<code>Line</code>](#Line)  
**Returns**: <code>Array.&lt;string&gt;</code> - - array of strings  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>string</code> | split array by ';' |

<a name="Line.strip_each_entry"></a>

### Line.strip_each_entry(a) ⇒ <code>Array.&lt;string&gt;</code>
**Kind**: static method of [<code>Line</code>](#Line)  
**Returns**: <code>Array.&lt;string&gt;</code> - stripped strings  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Array.&lt;string&gt;</code> | array to strip |

