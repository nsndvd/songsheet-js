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
    <script src="songsheet.js"></script>
    <script>
            let gen = new SongsheetGen();
            let txt = `[TITLE:How great is our god]

[ORDER:Intro, Str 1]

[block: Intro]
[G] [Em7] [C] [D] [G]

[Block : Verse 2]
[Em7] Back beat, the [G]word is on the street
That the fire in your heart is out,

[BLOCK: Ref]
How [G]great is our God, sing with me       | test1     ;   test2; test3; test4; test5 | always
How [Em7]great is our God, and all will see
How [Cmaj7]great, how [D]great is our [G]God

[BLOCK: Str 2]
[G]Age to age He stands, and [Em7]time is in His hands
Beginning and the [C]end, Beginning and the [D]end
The [G]Godhead Three in One, [Em7]Father Spirit Son
The [C]Lion and the Lamb, The [D]Lion and the Lamb

[bLoCk: Bridge]
[G]Name above all names, [Em7]Worthy of our praise
My [Cmaj7]heart will sing, How [D]great is our [G]God`;
            gen.add_song(txt, {"table": true});
            let res = gen.gen(true);
            document.body.innerHTML = '<img src="images/logo.jpg"><br>var dd = ' + JSON.stringify(res[0], null, 2) + ';';
    </script>
</body>
</html>