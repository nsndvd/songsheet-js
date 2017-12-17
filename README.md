
# JS library for Songsheet v1.3.4

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

This package uses the [pdfMake](https://github.com/bpampuch/pdfmake) library.
