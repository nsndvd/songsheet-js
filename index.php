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
    <button onclick="run()">Auf gut Glück!</button>
    <textarea id="input">
        [title: Blessed Be Your Name (Intro - XX); bpm: 80]
    </textarea>
    <script src="songsheet.js"></script>
    <script>

        function run() {
            let gen = new SongsheetGen();
            let txt = document.getElementById('input').value;
            gen.add_song(txt, {"table": true});
            let res = gen.gen(false);
            document.body.innerHTML = 'var dd = ' + JSON.stringify(res[0], null, 2) + ';';
        }
    </script>
</body>
</html>