// ///////////////////////////////////////
//
// Variables
//
// ///////////////////////////////////////

var player = {
    name: "Rachel",
    boyfriend: "Alex",
    friend: "Snape",
    elem: $("#rachel"),
    controlsEnabled: true,
    inDialogue: false,
    isMoving: false,
    position: {
        tx: 2, // tile X
        ty: 3, // tile Y
        ox: 0, // offset virtual pixels X
        oy: 0, // offset virtual pixels Y
        direction: "down",
    },
    inventory: {
        hasRRBPotion: false,
        hasSnail: false,
        hasHair: false,
        hasDogTail: false,
        hasStunningSpell: false,
        hasHorcrux: false,
        hasRose: false,
        hasAvadaKedavra: false,
        atticKey: false,
    },
    progress: {
        timesPlayedWNP: 0,
        roseDestroyed: false,
        canGoDownstairs: false,
        sawIntro: false,
        startedRRB: false
    },
    roomStates: []
};
var playerNew = player;


var zoom = 1;
var viewportW = $(window).width();
var viewportH = $(window).height();
var lastTimestamp = 0;
var lastStepTimestamp = 0;
var lastPlayerTimestamp = 0;

var FPS = 61;
var stepFPS = 3;
var walkFPS = 144;

var heldDirection = "none";
var heldSecondDirection = "none";

var loadRoomToThe = "none";

var startRoom = findRoom(-1,-1); 
//startRoom = findRoom(3,2);
//startRoom = findRoom(1,0);
var currentRoom = startRoom;
var lastRoom = startRoom;
var currentGrid = null;

var currentMusic = "none";

var currentDialogue = {text:""};

var isActionDown = false;



// ///////////////////////////////////////
//
// Controls
//
// ///////////////////////////////////////


function evalDirection(direction) {
    
    if(player.inDialogue) {
        if(currentDialogue.lastKey == direction)
            return false;
        else if(direction != "none" || direction == "up" || direction == "down") {
            currentDialogue.lastKey = direction;
            if(direction == "up")
                hightlightDialogeOption(currentDialogue.selected - 1);
            else if(direction == "down")
                hightlightDialogeOption(currentDialogue.selected + 1);
            return false;
        }
    }
    
    if(player.controlsEnabled == false)
        return false;
    
    if(direction != "none") {
        player.elem.attr("data-direction",direction);
        player.position.direction = direction;
    }
        
    
    if(direction == "right") {
        if(!(isObjectAt(player.position.tx + 1, player.position.ty) && player.position.ox >= 0))
            if(player.position.oy > 0) {
                if(!isObjectAt(player.position.tx + 1, player.position.ty + 1))
                    movePlayer(direction);
            }
            else
                movePlayer(direction);
    } else if(direction == "left") {
        if(!(isObjectAt(player.position.tx - 1, player.position.ty) && player.position.ox <= 0))
            if(player.position.oy > 0) {
                if(!(isObjectAt(player.position.tx - 1, player.position.ty + 1) && player.position.ox <= 0))
                    movePlayer(direction);
            }
            else
                movePlayer(direction);
    } else if(direction == "down") {
        if(!(isObjectAt(player.position.tx, player.position.ty + 1) && player.position.oy >= 0))
            if(player.position.ox > 0) {
                if(!isObjectAt(player.position.tx + 1, player.position.ty + 1))
                    movePlayer(direction);
            }
            else
                movePlayer(direction);
    } else if(direction == "up") {
        if(!(isObjectAt(player.position.tx, player.position.ty - 1) && player.position.oy <= 0))
            if(player.position.ox > 0) {
                if(!(isObjectAt(player.position.tx + 1, player.position.ty - 1) && player.position.oy <= 0))
                    movePlayer(direction);
            }
            else
                movePlayer(direction);
    }
    
    
    
    
    
    
}



function movePlayer(direction) {
    
    
    if(player.inDialogue) {
        return false;
    }
    
    
    player.isMoving = true;
    player.elem.attr("data-moving","true");
    player.elem.attr("data-direction",direction);
    
    
    
    
    if(direction == "right") {
        if(player.position.ox < 15) {
            player.position.ox += 1;
        } else {
            player.position.ox = 0;
            player.position.tx += 1;
        }
        if(player.position.tx >= 9 && player.position.ox >= 2 )
            moveScreen(direction);
    } else if(direction == "left") {
        if(player.position.ox > 0) {
            player.position.ox -= 1;
        } else {
            player.position.ox = 15;
            player.position.tx -= 1;
        }
        if(player.position.tx < 0 && player.position.ox <= 13 )
            moveScreen(direction);
    } else if(direction == "down") {
        if(player.position.oy < 15) {
            player.position.oy += 1;
        } else {
            player.position.oy = 0;
            player.position.ty += 1;
        }
        if(player.position.ty >= 8 && player.position.oy >= 2 )
            moveScreen(direction);
    } else if(direction == "up") {
        if(player.position.oy > 0) {
            player.position.oy -= 1;
        } else {
            player.position.oy = 15;
            player.position.ty -= 1;
        }
        if(player.position.ty < 0 && player.position.oy <= 13 )
            moveScreen(direction);
    }
    var tmpGoTo = isGoToAt(player.position.tx, player.position.ty);
    if(tmpGoTo !== false)
        tmpGoTo();
}



function keyCodeString(keycode,e) {
    if(keycode == 39 || keycode == 68) {
        return "right";
    } else if(keycode == 37 || keycode == 65) {
        return "left";
    } else if(keycode == 38 || keycode == 87) {
        return "up";
    } else if(keycode == 40 || keycode == 83) {
        return "down";
    } else if(keycode == 69 || keycode == 32) {
        if(e.type == "keyup")
            return "action";
        doActivateButton();
        return "none";
    } else {
        return false;
    }
        
}


function keydownEvent(e) {
    var tmpKey = keyCodeString(e.keyCode,e);
    if(tmpKey !== false) {
        if(heldDirection == "none" || heldDirection == tmpKey)
            heldDirection = tmpKey;
        else
            heldSecondDirection = tmpKey;
        if(heldSecondDirection == heldDirection)
            heldSecondDirection = "none";
    }
    
        
}

function keyupEvent(e) {
    var tmpKey = keyCodeString(e.keyCode,e);
    if(player.inDialogue)
        currentDialogue.lastKey = "none";
    if(tmpKey == "action") {
        isActionDown = false;
        return false;
    }
    if(heldDirection != "none" && heldDirection == tmpKey) {
        heldDirection = "none";
        player.isMoving = false;
        player.elem.attr("data-moving","false");
    }
    if(heldSecondDirection != "none" && heldSecondDirection == tmpKey) {
        heldSecondDirection = "none";
        player.isMoving = false;
        player.elem.attr("data-moving","false");
    }
        
}


function doActivateButton() {
    var tmpAc1 = null;
    var tmpAc2 = null;
    if(isActionDown)
        return false;
    isActionDown = true;
    
    if(player.inDialogue) {
        progressDialogue();
        return false;
    }
    
    if(player.position.direction == "right") {
        tmpAc1 = isActivatorAt(player.position.tx + 1, player.position.ty);
        tmpAc2 = isActivatorAt(player.position.tx + 1, player.position.ty + 1);
        if(tmpAc1 !== false) {
            tmpAc1();
        } else if( player.position.oy > 6 && tmpAc2 !== false) {
            tmpAc2();
        }
    } else if(player.position.direction == "left") {
        tmpAc1 = isActivatorAt(player.position.tx - 1, player.position.ty);
        tmpAc2 = isActivatorAt(player.position.tx - 1, player.position.ty + 1);
        if(tmpAc1 !== false) {
            tmpAc1();
        } else if( player.position.oy > 6 && tmpAc2 !== false) {
            tmpAc2();
        }
    } else if(player.position.direction == "down") {
        tmpAc1 = isActivatorAt(player.position.tx, player.position.ty + 1);
        tmpAc2 = isActivatorAt(player.position.tx + 1, player.position.ty + 1);
        if(tmpAc1 !== false) {
            tmpAc1();
        } else if( player.position.ox > 6 && tmpAc2 !== false) {
            tmpAc2();
        }
    } else if(player.position.direction == "up") {
        tmpAc1 = isActivatorAt(player.position.tx, player.position.ty - 1);
        tmpAc2 = isActivatorAt(player.position.tx + 1, player.position.ty - 1);
        if(tmpAc1 !== false) {
            tmpAc1();
        } else if( player.position.ox > 6 && tmpAc2 !== false) {
            tmpAc2();
        }
    } 
}





// ///////////////////////////////////////
//
// Dialogue
//
// ///////////////////////////////////////



function showDialogue(id) {
    //player.controlsEnabled = false;
    player.inDialogue = true;
    currentDialogue = findDialogueObject(id);
    currentDialogue.selected = 0;
    currentDialogue.lastKey = "none";
    if(currentDialogue.choices === undefined)
        $("#dialogue-box").html('<span>'+currentDialogue.text+'</span>');
    else {
        var i = 0;
        for(i = 0; i < currentDialogue.choices.length; i++) {
            $("#dialogue-box").append('<div>' + currentDialogue.choices[i].text + '</div>');
        }
        hightlightDialogeOption(0);
    }
    $("#dialogue-box").addClass("show");
}

function findDialogueObject(id) {
    var i = 0;
    for(i = 0; i < dialogue.length; i++) {
        if(dialogue[i].id == id)
            return dialogue[i];
    }
    return false;
}

function progressDialogue() {
    if(currentDialogue.choices !== undefined) {
        var selectedOption = currentDialogue.choices[currentDialogue.selected];
        if(selectedOption.activate !== undefined) {
            selectedOption.activate();
            
        } else if(selectedOption.next !== undefined) {
            exitDialogue();
            showDialogue(selectedOption.next);
            return false;
        }
    } 
    if(currentDialogue.activate !== undefined) 
        currentDialogue.activate();
    if(currentDialogue.next === undefined) {
        exitDialogue();
        return false;
    }
        
    showDialogue(currentDialogue.next);
    
}

function exitDialogue() {
    player.inDialogue = false;
    $("#dialogue-box").html("");
    $("#dialogue-box").removeClass("show");
}

function hightlightDialogeOption(option) {
    if(currentDialogue.choices === undefined)
        return false;
    var actualOption = option;
    if(option < 0)
        actualOption = currentDialogue.choices.length - 1;
    else if(option >= currentDialogue.choices.length)
        actualOption = 0;
    currentDialogue.selected = actualOption;
    $("#dialogue-box div").removeClass("highlighted")
    $("#dialogue-box div").eq(actualOption).addClass("highlighted")
}

function wnpText() {
   return "You've played What's New Pussycat " + player.progress.timesPlayedWNP + "times!"
}


// ///////////////////////////////////////
//
// Rooms
//
// ///////////////////////////////////////


function moveScreen(direction) {
    loadRoomToThe = direction;
    var nextRoom = getNextRoom(currentRoom, direction);
    console.log(nextRoom);
    var newTX = 0;
    var newTY = 0;
    if(direction == "right") {
        newTX = 0;
        newTY = player.position.ty;
    } else if(direction == "left") {
        newTX = 9;
        newTY = player.position.ty;
    } else if(direction == "down") {
        newTY = 0;
        newTX = player.position.tx;
    } else if(direction == "up") {
        newTY = 8;
        newTX = player.position.tx;
    }
    loadRoom(nextRoom, newTX, newTY);
}


function getNextRoom(curRoom, dir) {
    if(dir == "right") {
        return findRoom(curRoom.x + 1, curRoom.y);
    }
        
    if(dir == "left") {
        return findRoom(curRoom.x - 1, curRoom.y);
    }
        
    if(dir == "up") {
        return findRoom(curRoom.x, curRoom.y - 1);
    }
        
    if(dir == "down") {
        return findRoom(curRoom.x, curRoom.y + 1)
    }
       
}

function findRoom(roomX, roomY) {
    
    var foundRoom = currentRoom;
    var i = 0;
    for(i = 0; i < rooms.length; i++) {
        if(rooms[i].x == roomX && rooms[i].y == roomY) {
            foundRoom = rooms[i];
            //console.log("found room");
        }
    }
    return foundRoom;
}


function findObject(objectName) {

    var foundObject = null;
    var i = 0;
    for(i = 0; i < objects.length; i++) {
        if(objects[i].name == objectName) {
            foundObject = objects[i];
            //console.log("found object");
        }
    }
    return foundObject;
}

function loadRoom(room, playerTX, playerTY, playerOX, playerOY) {
    lastRoom = currentRoom;
    currentRoom = room;
    player.position.tx = playerTX;
    player.position.ty = playerTY;
    
    $("#dialogue-box").removeClass("title");
    $("#dialogue-box").removeClass("story");
    
    player.position.ox = (playerOX != null ? playerOX : 0);
    player.position.oy = (playerOY != null ? playerOY : 0);
    $("#grid-container .grid").remove();
    $("#grid-container").append('<div class="grid"><div class="floor"></div><div class="objects"></div><div class="walls"></div><div id="rachel"></div><div class="location"></div></div>');
    currentGrid = {
        floor: $("#grid-container .grid .floor"),
        objects: $("#grid-container .grid .objects"),
        walls: $("#grid-container .grid .walls"),
        elem: $("#grid-container .grid"),
        name: $("#grid-container .grid .location"),
    };
    player.elem = $("#grid-container .grid #rachel");
    
    // Set environment
    currentGrid.elem.attr("data-environment", room.environment);
    
    // Set location, if available
    if(currentRoom.name != undefined) {
        currentGrid.name.text(currentRoom.name);
    } else {
        currentGrid.name.remove();
    }
    
    var i = 0;
    
    // Check room state
    currentRoom.state = 0;
    for(i = 0; i < player.roomStates.length; i++) {
        if(player.roomStates[i].x == room.x && player.roomStates[i].y == room.y)
            currentRoom.state = player.roomStates[i].state;
    }
    
    console.log("roomState: "+ currentRoom.state);
    
    // Add walls
    
    // Add objects
    for(i = 0; i < room.objects.length; i++) {
        if(room.objects[i].state !== undefined) {
            if(currentRoom.state == room.objects[i].state)
                addObject(room.objects[i], room.objects[i].x, room.objects[i].y);
        } else  
            addObject(room.objects[i], room.objects[i].x, room.objects[i].y);
    }
    
    $("#debug .room .x").text(currentRoom.x);
    $("#debug .room .y").text(currentRoom.y);
    
    
    // Update music
    if(currentRoom.music != lastRoom.music || currentRoom.music != currentMusic) {
        currentMusic = currentRoom.music;
        //$("audio.music").each(function(){$(this).get(0).stop;});
        //$("audio.music").trigger("stop");
        var j = 0;
        var music = $("audio.music");
        for(j = 0; j < music.length; j++) {
            console.log($("audio.music")[j].pause());
        }
        $("audio#"+currentMusic)[0].load();
        $("audio#"+currentMusic)[0].play();
    }
    
    
    // Per-room overrides
    if(room.x == -1 && room.y == -1) {
        // Do title screen stuff
        $("#dialogue-box").addClass("title");

        if(currentRoom.state != 1) {
            exitDialogue();
            showDialogue("titleScreen");
        }

        player.position.tx = 900;
        player.position.ty = 900;
    } else if(room.x == -2 && room.y == -1) {
        // Do story screen stuff
        $("#dialogue-box").addClass("story");

        if(currentRoom.state != 1) {
            exitDialogue();
            showDialogue("newbuffer");
        }
        player.elem.attr("data-direction","awake");
        player.position.tx = 3;
        player.position.ty = 5;
        player.position.oy = 4;
    }
    

}


function addObject(object, tx, ty) {
    var html = '<div class="'+object.name;
    if(object.npc == true)
        html += " npc";
    html += '" data-tw="'+object.width+'" data-th="'+object.height+'" style="left:'+getObjectSize(tx)+';top:'+getObjectSize(ty)+';width:'+getObjectSize(object.width)+';height:'+getObjectSize(object.height)+';"></div>';
    currentGrid.objects.append(html);
    
}


function setRoomState(room, state) {
    var i = 0;
    var foundIndex = -1;
    for(i = 0; i < player.roomStates.length; i++) {
        if(player.roomStates[i].x == room.x && player.roomStates[i].y == room.y)
            foundIndex = i;
    }
    if(foundIndex > -1)
        player.roomStates[foundIndex].state = state;
    else
        player.roomStates.push({x:room.x,y:room.y,state:state});
}

function reloadRoomWithState(state) {
    setRoomState(currentRoom, state);
    loadRoom(currentRoom, player.position.tx, player.position.ty, player.position.ox, player.position.oy);
}


// ///////////////////////////////////////
//
// Positioning / Collisions
//
// ///////////////////////////////////////


function isObjectAt(tx, ty) {
    
    var i;
    var scannedObj = null;

    for(i = 0; i < currentRoom.objects.length; i++) {
        scannedObj = currentRoom.objects[i];
        scannedObjXS = scannedObj.x;
        scannedObjXE = scannedObj.x + scannedObj.width - 1;
        scannedObjYS = scannedObj.y;
        scannedObjYE = scannedObj.y + scannedObj.height - 1;
        if(scannedObj.state == undefined || scannedObj.state == currentRoom.state)
            if( (tx >= scannedObjXS && tx <= scannedObjXE) && (ty >= scannedObjYS && ty <= scannedObjYE) && scannedObj.solid && (scannedObj.state == undefined || scannedObj.state == currentRoom.state) ) {
                return true;
            }
        
    }
        
    return false;
}

function isGoToAt(tx, ty) {

    var i;
    var scannedObj = null;

    for(i = 0; i < currentRoom.objects.length; i++) {
        scannedObj = currentRoom.objects[i];
        scannedObjXS = scannedObj.x;
        scannedObjXE = scannedObj.x + scannedObj.width - 1;
        scannedObjYS = scannedObj.y;
        scannedObjYE = scannedObj.y + scannedObj.height - 1;

        if( (tx >= scannedObjXS && tx <= scannedObjXE) && (ty >= scannedObjYS && ty <= scannedObjYE) && scannedObj.goto != undefined && (scannedObj.state == undefined || scannedObj.state == currentRoom.state) ) {
            return scannedObj.goto;
        }

    }

    return false;
}

function isActivatorAt(tx, ty) {

    var i;
    var scannedObj = null;

    for(i = 0; i < currentRoom.objects.length; i++) {
        scannedObj = currentRoom.objects[i];
        scannedObjXS = scannedObj.x;
        scannedObjXE = scannedObj.x + scannedObj.width - 1;
        scannedObjYS = scannedObj.y;
        scannedObjYE = scannedObj.y + scannedObj.height - 1;

        if( (tx >= scannedObjXS && tx <= scannedObjXE) && (ty >= scannedObjYS && ty <= scannedObjYE) && scannedObj.activate != undefined && (scannedObj.state == undefined || scannedObj.state == currentRoom.state) ) {
            return scannedObj.activate;
        }

    }

    return false;
}


// ///////////////////////////////////////
//
// Render Loop
//
// ///////////////////////////////////////


function renderFrame(timestamp) {
    updateMovement(timestamp);
    if(timestamp - lastTimestamp >= (1000 / FPS)) {
        renderPlayer();
        //console.log(timestamp);
        
        updateSteps(timestamp);
        lastTimestamp = timestamp;
    }    
    
    window.requestAnimationFrame(renderFrame);
}

function renderPlayer() {
    player.elem.css("left", ((player.position.tx * 16 * zoom) + (player.position.ox * zoom)) + "px");
    player.elem.css("top", ((player.position.ty * 16 * zoom) + (player.position.oy * zoom)) + "px");
    //player.elem.css("transform", "translate3d("+((player.position.tx * 16 * zoom) + (player.position.ox * zoom)) + "px,"+((player.position.ty * 16 * zoom) + (player.position.oy * zoom)) + "px,0)");
    //player.elem.css("top", ((player.position.ty * 16 * zoom) + (player.position.oy * zoom)) + "px");
}


function getObjectSize(width) {
    return (width * 16 * zoom) + "px";
}


function windowResized(){
    viewportW = $(window).width();
    viewportH = $(window).height();

    if(viewportW >= 1200) {
        zoom = 4;
    } else if(viewportW >= 600) {
        zoom = 2;
    } else {
        zoom = 1;
    }
    zoom = 4;
    loadRoom(currentRoom, player.position.tx, player.position.ty, player.position.ox, player.position.oy);
}


function updateSteps(timestamp) {
    if(timestamp - lastStepTimestamp >= (1000 / stepFPS)) {
        lastStepTimestamp = timestamp;
        // Player Update
        if(player.isMoving) {
            if(player.elem.attr("data-step") == "2") {
                player.elem.attr("data-step", "1");
            } else {
                player.elem.attr("data-step","2");
            }
        }        
        // NPC Update
        if($(".npc").attr("data-step") == "2") {
            $(".npc").attr("data-step", "1");
        } else {
            $(".npc").attr("data-step","2");
        }
    }
}

function updateMovement(timestamp) {
    if(timestamp - lastPlayerTimestamp >= (1000 / walkFPS)) {
        var doTwice = false;
        
        if(timestamp - lastPlayerTimestamp >= (2000 / walkFPS))
            doTwice = true;
        
        lastPlayerTimestamp = timestamp;
        tryMoveUpdate();
        
        if(doTwice)
            tryMoveUpdate(); 
    }
}
    
    function tryMoveUpdate() {
        if(player.controlsEnabled) {
            evalDirection(heldDirection);
            if(heldDirection == heldSecondDirection)
                heldSecondDirection == "none";
            evalDirection(heldSecondDirection);
        }
    }


// ///////////////////////////////////////
//
// Utils
//
// ///////////////////////////////////////

(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
            window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                                       timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

function updateRoomsWithObjectSizes() {
    var i;
    var j;
    for(i = 0; i < npcs.length; i++) {
        npcs[i].npc = true;
        npcs[i].solid = true;
        objects.push(npcs[i]);
    }
    for(i = 0; i < rooms.length; i++) {
        for(j = 0; j < rooms[i].objects.length; j++) {
            var foundObject = findObject(rooms[i].objects[j].name);
            if(rooms[i].objects[j].width == undefined)
                rooms[i].objects[j].width = foundObject.width;
            if(rooms[i].objects[j].height == undefined)
                rooms[i].objects[j].height = foundObject.height;
            if(rooms[i].objects[j].solid == undefined)
                rooms[i].objects[j].solid = foundObject.solid;
            if(rooms[i].objects[j].activate == undefined)
                rooms[i].objects[j].activate = foundObject.activate;
            if(rooms[i].objects[j].state == undefined)
                rooms[i].objects[j].state = foundObject.state;
            if(rooms[i].objects[j].npc == undefined)
                rooms[i].objects[j].npc = foundObject.npc;
        }
    }
}


function saveGame() {
    if(currentRoom.x < 0 || currentRoom.y < 0)
        return false;
    player.elem = null;
    localStorage.saveData = JSON.stringify(player);
    player.elem = $("#rachel");
}

function loadGame() {
    if(localStorage.saveData === undefined)
        return false;
        
    player = JSON.parse(localStorage.saveData);
    player.elem = $("#rachel");
}

function IsEdge() {
    var is_edge = navigator.userAgent.toLowerCase().indexOf('edge/') > -1;
    if(is_edge)
        return true;
    else
        return false;
}


// ///////////////////////////////////////
//
// Init / Binds
//
// ///////////////////////////////////////


window.requestAnimationFrame(renderFrame);
$(window).resize(windowResized);
windowResized();
$(window).keydown(keydownEvent);
$(window).keyup(keyupEvent);
updateRoomsWithObjectSizes();
loadRoom(currentRoom, 1, 1);
$("audio.music").each(function(){this.volume=0.4});
//$("audio.music").each(function(){this.volume=0});
$("a.button").click(function(){$("#gameboy").removeClass("off"); $("#wrapper").addClass("shift");});
setInterval(saveGame, 8000);
if(IsEdge())
    $("body").addClass("is-edge");