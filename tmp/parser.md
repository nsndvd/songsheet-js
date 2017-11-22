<a name="SongsheetParser"></a>

## SongsheetParser
main parser for the .st document

**Kind**: global class  

* [SongsheetParser](#SongsheetParser)
    * [.parse(string)](#SongsheetParser.parse) ⇒ <code>Array.&lt;string&gt;</code>
    * [.escape_block(string)](#SongsheetParser.escape_block) ⇒ <code>string</code>
    * [.get_stripped_substring(line, offset, match, key_length, separator)](#SongsheetParser.get_stripped_substring) ⇒ <code>string</code>

<a name="SongsheetParser.parse"></a>

### SongsheetParser.parse(string) ⇒ <code>Array.&lt;string&gt;</code>
**Kind**: static method of [<code>SongsheetParser</code>](#SongsheetParser)  
**Returns**: <code>Array.&lt;string&gt;</code> - [title, artist, bpm, books, order, blocks]  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | string of the file to parse |

<a name="SongsheetParser.escape_block"></a>

### SongsheetParser.escape_block(string) ⇒ <code>string</code>
**Kind**: static method of [<code>SongsheetParser</code>](#SongsheetParser)  
**Returns**: <code>string</code> - escaped string  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | string to escape |

<a name="SongsheetParser.get_stripped_substring"></a>

### SongsheetParser.get_stripped_substring(line, offset, match, key_length, separator) ⇒ <code>string</code>
get substring of line with offset, match, key_length, separator indecies

**Kind**: static method of [<code>SongsheetParser</code>](#SongsheetParser)  
**Returns**: <code>string</code> - value of block  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>string</code> | line to get substring from |
| offset | <code>number</code> | total offset |
| match | <code>number</code> | match of the key |
| key_length | <code>number</code> | key length |
| separator | <code>number</code> | end of value |

