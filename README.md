
# JS library for Songsheet v.1.3.0

### Features
- markdown
- multiple annotations
- bpm, artist, book references
- footer with page numbers

### Usage

```html
  <script src="songsheet.js">
    let songsheetGen = new SongsheetGen();
    <!-- add Songs -->
    songsheetGen.add_song(string, {table: true, annotations: true, font: 'ubuntu'});
    <!-- generate all Songs -->
    songsheetGen.gen();
  </script>
```

If only the pdfMake dict is wanted, call 
```javascript
  let txt = songsheetGen.gen(false)
```

For a complete tutorial on the songsheetsyntax click [here](https://github.com/jannessm/songsheet-py).

### API
#### SongsheetGen()
**returns** a SongsheetGen object.

#### SongsheetGen.add_song(string, settings)
Add a song in the queue for the generation.

string **string** - string of song script

object **settings** - settings for the layout. Possible values are shown in the following
````javascript
{
    table: boolean,       // show tablelines
    annotations: boolean, // show annotations
    font: string          // possible fonts are 'ubuntu', 'roboto' and 'anonymous'
}
````

#### SongsheetGen.gen(download=true)
Generate all pdfs in the queue.

boolean **download** - if the pdfs should be offered as a download. If true: download starts automatically, false: just the pdfmake object is returned.

**return** pdfmake object

#### SongsheetGen.get_song(song_title)
returns the Song object for the song title set in the string.

**return** Song object

#### SongsheetGen.get_songs()
returns an array of all songs added to the queue.

**return** Array of Song objects

#### SongsheetGen.get_available_fonts()
returns all available fonts as a dictionary.

**return** dictionary of all files

#### SongsheetGen.get_font_for_song(song_title)
get the font set for the song identified by song_title.

**return** string which identifies the font

#### SongsheetGen.remove_song(song_title)
removes a song from the generation queue.


This package uses the [pdfMake](https://github.com/bpampuch/pdfmake) library.
