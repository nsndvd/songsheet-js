
# JS library for Songsheet v.1.0.0

#### Features
- simplestLayout
- markdown
- multiple annotations

#### Usage

```html
  <script src="songsheet.js">
    let songsheetGen = new SongsheetGen();
    <!-- add Songs -->
    songsheetGen.add_song(string, {table: true, annotations: true});
    <!-- generate all Songs -->
    songsheetGen.gen();
  </script>
```

If only pdfMake var is wanted, call 
```javascript
  let txt = songsheetGen.gen(false)
```

For a complete tutorial on the songsheetsyntax click [here](https://github.com/jannessm/songsheet-py).

This package uses the [pdfMake](https://github.com/bpampuch/pdfmake) library.
