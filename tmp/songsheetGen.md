<a name="SongsheetGen"></a>

## SongsheetGen
**Kind**: global class  

* [SongsheetGen](#SongsheetGen)
    * [.gen(download)](#SongsheetGen+gen) ⇒ <code>pdfMake</code>
    * [.add_song(string, settings)](#SongsheetGen+add_song)
    * [.remove_song(song_title)](#SongsheetGen+remove_song)
    * [.get_song(song_title)](#SongsheetGen+get_song) ⇒ <code>Song</code>
    * [.get_available_fonts()](#SongsheetGen+get_available_fonts) ⇒ <code>Object</code>
    * [.get_font_for_song(song_title)](#SongsheetGen+get_font_for_song) ⇒ <code>string</code>
    * [.get_songs()](#SongsheetGen+get_songs) ⇒ <code>Array.&lt;Song&gt;</code>

<a name="SongsheetGen+gen"></a>

### songsheetGen.gen(download) ⇒ <code>pdfMake</code>
generates pdfMake objects for all Songs

**Kind**: instance method of [<code>SongsheetGen</code>](#SongsheetGen)  
**Returns**: <code>pdfMake</code> - pdfmake object  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| download | <code>boolean</code> | <code>true</code> | whether to offer this pdf as download or not. if download is set to false, the pdfMake object can be used to parse it for a preview |

<a name="SongsheetGen+add_song"></a>

### songsheetGen.add_song(string, settings)
add a song to the generation queue. can also be used to update a song if the title wasnt changed.

**Kind**: instance method of [<code>SongsheetGen</code>](#SongsheetGen)  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | .st file as string |
| settings | <code>Object</code> | layout settings (see Layout) |

<a name="SongsheetGen+remove_song"></a>

### songsheetGen.remove_song(song_title)
remove a song from the queue

**Kind**: instance method of [<code>SongsheetGen</code>](#SongsheetGen)  

| Param | Type | Description |
| --- | --- | --- |
| song_title | <code>string</code> | song title which identifies the song |

<a name="SongsheetGen+get_song"></a>

### songsheetGen.get_song(song_title) ⇒ <code>Song</code>
get a Song object for song title

**Kind**: instance method of [<code>SongsheetGen</code>](#SongsheetGen)  
**Returns**: <code>Song</code> - song object  

| Param | Type | Description |
| --- | --- | --- |
| song_title | <code>string</code> | song title which identifies the song |

<a name="SongsheetGen+get_available_fonts"></a>

### songsheetGen.get_available_fonts() ⇒ <code>Object</code>
get all available fonts

**Kind**: instance method of [<code>SongsheetGen</code>](#SongsheetGen)  
**Returns**: <code>Object</code> - all fonts as a dictionary with { font_id: { bold: ".tff", ... } }  
<a name="SongsheetGen+get_font_for_song"></a>

### songsheetGen.get_font_for_song(song_title) ⇒ <code>string</code>
get current font for a song by song title

**Kind**: instance method of [<code>SongsheetGen</code>](#SongsheetGen)  
**Returns**: <code>string</code> - font id  

| Param | Type | Description |
| --- | --- | --- |
| song_title | <code>string</code> | song title which identifies the song |

<a name="SongsheetGen+get_songs"></a>

### songsheetGen.get_songs() ⇒ <code>Array.&lt;Song&gt;</code>
get all loaded songs

**Kind**: instance method of [<code>SongsheetGen</code>](#SongsheetGen)  
**Returns**: <code>Array.&lt;Song&gt;</code> - get all songs in the queue  
