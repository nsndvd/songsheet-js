<?php
    shell_exec('bash ./js/installer.sh');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Test</title>
</head>
<body>
    <script src="js/songsheet.js"></script>
    <script>
            let gen = new SongsheetGen();
            let txt = <?php echo '`'.file_get_contents('./test/How_Great_is_our_God.st').'`' ?>;
            gen.add_song(txt, {"table": true});
            let res = gen.gen(true);
    </script>
</body>
</html>