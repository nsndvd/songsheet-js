<?php
    shell_exec('bash ./zip.sh');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="content-type" content="application/json;">
    <title>Test</title>
</head>
<body>
    <script src="songsheet.min.js"></script>
    <script>
            let gen = new SongsheetGen();
            let txt = `
            [Title: Wonderwall; bPM: 100; artist: Oasis;books:fj 4-43,fj3 5555]

[Order: Intro, Verse 1, Verse 2, Verse 1]

[Block : Verse 1]
[Em7] Today is [G]gonna be the day
That they're [Dsus4]gonna throw it back to [A7sus4]you

[Block : Verse 2]
[Em7] Back beat, the [G]word is on the street
That the [Dsus4]fire in your heart is [A7sus4]out,

[Block : Intro]
[Em7] [G] [Dsus4] [A7sus4]`;
            gen.add_song(txt, {"table": true});
            let res = gen.gen(false);
            document.body.innerHTML = '<img src="images/logo.jpg"><br>var dd = ' + JSON.stringify(res[0], null, 2) + ';';
    </script>
</body>
</html>