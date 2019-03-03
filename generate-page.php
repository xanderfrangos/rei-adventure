<!doctype html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Rei's Adventure!</title>
        <link rel="shortcut icon" href="favicon.ico">
        <link rel="icon" sizes="300x300" href="icon-300x300.png">
        <link rel="stylesheet" href="css/main.css">
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700|VT323' rel='stylesheet' type='text/css'>
        <script src="js/libs.js"></script>
        <script src="js/dialogue.js"></script>
        <script src="js/objects.js"></script>
        <script src="js/rooms.js"></script>
        <script src="js/npcs.js"></script>
    </head>
    <body>
        <div id="preload"><?php
function preloadHTML($dir){
    $files = glob($dir.'/*.{png}', GLOB_BRACE);
    $html = "";
    foreach($files as $file) {
        $html .= '<img src="'.$file.'" />';
    }
    return $html;
}
echo preloadHTML("images");
echo preloadHTML("images/objects");
echo preloadHTML("images/floor");
echo preloadHTML("images/walls");
echo preloadHTML("images/player");
echo preloadHTML("images/npcs");
            ?></div>
        <main>
            <div id="gameboy" class="off">
                <audio src="music/indoors.mp3" preload="auto" loop class="music" id="indoors"></audio>
                <audio src="music/outdoors.mp3" preload="auto" loop class="music" id="outdoors"></audio>
                <audio src="music/classrooms.mp3" preload="auto" loop class="music" id="classrooms"></audio>
                <audio class="music" id="none"></audio>
                <div id="screen">
                    <div id="on-screen">
                        <div id="debug" style="display:none;"><div class="room"><span class="x">-1</span>,<span class="y">-1</span></div></div>
                        <div id="dialogue-box">

                        </div>
                        <div id="grid-container"></div>
                    </div>
                </div>
            </div>
            <div id="blurb">
                <img src="images/logo.png" />
                <p>Use the <span>W</span><span>A</span><span>S</span><span>D</span> keys or the <span>arrow keys</span> to move. Hit <span>E</span> or <span>Space</span> to interact with people and objects. </p>
                <a class="button">Play</a>
            </div>
        </main>
        <script src="js/main.js"></script>
    </body>
</html>