var rooms = [
    {

        // Title Screen
        music: "none",
        x:-1,
        y:-1,
        environment: "title",
        objects: [
            {
                name: "titlebg",
                x:0,
                y:0,
                width:10,
                height:9,
            }
        ],

    },
    {

        // Story Screen 1
        music: "indoors",
        x:-2,
        y:-1,
        environment: "title",
        objects: [
            {
                name: "bed",
                x:3,
                y:5,
            },
            {
                name: "king",
                x:4,
                y:5,
                state:1
            }
        ],

    },{


        // Start room

        name: "Dorms",
        music: "indoors",
        x:0,
        y:2,
        environment: "castle",
        objects: [
            {
                x:1,
                y:1,
                name: "bed",
                state:0
            },
            {
                x:3,
                y:1,
                name: "bed",
            },
            {
                x:5,
                y:1,
                name: "bed",
            },
            {
                x:7,
                y:1,
                name: "bed",
            },
            {
                x:2,
                y:6,
                name: "bed",
            },
            {
                x:4,
                y:6,
                name: "bed",
            },
            {
                x:6,
                y:6,
                name: "bed",
            },
            {
                x:8,
                y:6,
                name: "bed",
            },
            {
                name: "castlewalltop",
                x:0,
                y:0,
                width:10,
                height:1,
            },
            {
                name: "castlewallbottom",
                x:0,
                y:8,
                width:10,
                height:1,
            },
            {
                name: "castlewallleft",
                x:0,
                y:0,
                width:1,
                height:10,
            },
            {
                name: "castlewallright",
                x:9,
                y:0,
                width:1,
                height:3,
            },
            {
                name: "castlewallright",
                x:9,
                y:6,
                width:1,
                height:3,
            },
            {
                name: "castlewalltopleft",
                x:0,
                y:0,
            },
            {
                name: "castlewalltopright",
                x:9,
                y:0,
            },
            {
                name: "castlewallbottomleft",
                x:0,
                y:8,
            },
            {
                name: "castlewallbottomright",
                x:9,
                y:8,
            },
            {
                name: "dresser",
                x: 4,
                y:0,
                activate: function(){showDialogue("dresser");},
            },
            {
                name: "dresser",
                x: 8,
                y:0,
                activate: function(){showDialogue("dresser");},
            },
            {
                name: "nightstand",
                x: 6,
                y:1,
            },
            {
                name: "nightstand",
                x: 1,
                y:7,
            },
            {
                name: "smalltable",
                x: 3,
                y:7,
            },
            {
                name: "nightstand",
                x: 5,
                y:7,
            },
            {
                name: "kidb",
                x: 6,
                y: 5,
                activate:function(){showDialogue("bfIntro")}
            },


        ],

    },{

        // Bullies
        name: "Hallway",
        music: "indoors",
        x:2,
        y:1,
        environment: "castle",
        objects: [
            {
                name: "castlewallright",
                x:9,
                y:0,
                width:1,
                height:9,
            },
            {
                name: "castlewallright",
                x:9,
                y:6,
                width:1,
                height:9,
            },
            {
                name: "castlewallleft",
                x:0,
                y:0,
                width:1,
                height:9,
            },
            {
                name: "castlewallleft",
                x:3,
                y:0,
                width:1,
                height:4,
            },
            {
                name: "castlewallright",
                x:6,
                y:0,
                width:1,
                height:4,
            },
            {
                name: "castlewallbottomleft",
                x:3,
                y:4,
                width:1,
                height:1,
            },
            {
                name: "castlewallbottomright",
                x:6,
                y:4,
                width:1,
                height:1,
            },
            {
                name: "pot",
                x:1,
                y:0,
            },
            {
                name: "smalltable",
                x:2,
                y:0,
            },
            {
                name: "table",
                x:7,
                y:0,
            },
            {
                name: "chair",
                x:2,
                y:1,
            },
            {
                name: "chair",
                x:7,
                y:1,
                width:2
            },
            {
                name: "stairs-down",
                x:4,
                y:4,
                width:2
            },
            {
                name: "bully",
                x:4,
                y:3,
                state:0,
                activate:function(){showDialogue("bullyIntro")}

            },
            {
                name: "kido",
                x:5,
                y:2,
                state:0,
                activate:function(){showDialogue("bullyIntro")}
            },
            {
                name: "kidr",
                x:4,
                y:2,
                state:0,
                activate:function(){showDialogue("bullyIntro")}
            },

        ],

    },{
        // Secretary
        name: "Headmaster's Lobby",
        music: "indoors",
        x:2,
        y:0,
        environment: "castle",
        objects: [
            {
                name: "castlewallright",
                x:9,
                y:0,
                width:1,
                height:9,
            },
            {
                name: "castlewalltop",
                x:0,
                y:0,
                width:10,
                height:1,
            },

            {
                name: "castlewallleft",
                x:0,
                y:0,
                width:1,
                height:2,
            },
            {
                name: "castlewallleft",
                x:0,
                y:5,
                width:1,
                height:9,
            },
            {
                name: "castlewalltopleft",
                x:0,
                y:0,
            },
            {
                name: "castlewalltopright",
                x:9,
                y:0,
            },
            {
                name: "chair",
                x:8,
                y:3,
                height:2
            },
            {
                name: "chair",
                x:8,
                y:6,
                height:2
            },
            {
                name: "table-top",
                x:6,
                y:6,
            },
            {
                name: "table-bottom",
                x:6,
                y:7,
            },
            {
                name: "table",
                x:3,
                y:1,
            },
            {
                name: "table",
                x:1,
                y:5,
            },
            {
                name: "table-bottom",
                x:3,
                y:5,
            },
            {
                name: "table-middle",
                x:3,
                y:4,
            },
            {
                name: "table-top",
                x:3,
                y:3,
            },
            {
                name: "dresser",
                x:1,
                y:0,
                width:2
            },
            {
                name: "chair",
                x:2,
                y:4,
            },
            {
                name: "pot",
                x:8,
                y:1,
            },
            {
                name: "castlewallbottomright",
                x:9,
                y:8,
                width:1,
                height:1,
            },
            {
                name: "castlewallbottomleft",
                x:0,
                y:8,
                width:1,
                height:1,
            },
            {
                name: "castlewallbottom",
                x:1,
                y:8,
                width:3,
                height:1,
            },
            {
                name: "castlewallbottom",
                x:6,
                y:8,
                width:3,
                height:1,
            },
            {
                name: "pot",
                x:1,
                y:7,
            },
            {
                name: "bird",
                x:6,
                y:6,
                activate:function(){showDialogue("bird")}
            },
            {
                name: "secretary",
                x:3,
                y:2,
                state:0,
                activate:function(){showDialogue("secretaryIntro");}
            },
            {
                name: "secretary-down",
                x:1,
                y:2,
                state:1,
                solid:false
            },
        ],

    },{

        // Goblin King
        name: "Headmaster's Office",
        music: "indoors",
        x:1,
        y:0,
        environment: "castle",
        objects: [
            {
                name: "castlewallleft",
                x:0,
                y:0,
                width:1,
                height:10,
            },
            {
                name: "castlewallright",
                x:9,
                y:0,
                width:1,
                height:2,
            },
            {
                name: "castlewallright",
                x:9,
                y:5,
                width:1,
                height:9,
            },
            {
                name: "castlewalltop",
                x:0,
                y:0,
                width:10,
                height:1,
            },
            {
                name: "castlewallbottom",
                x:0,
                y:8,
                width:10,
                height:1,
            },
            {
                name: "castlewalltopleft",
                x:0,
                y:0,
            },
            {
                name: "castlewalltopright",
                x:9,
                y:0,
            },
            {
                name: "castlewallbottomleft",
                x:0,
                y:8,
            },
            {
                name: "castlewallbottomright",
                x:9,
                y:8,
            },
            {
                name: "headmaster-table",
                x:3,
                y:2,
                activate:function(){if(player.progress.roseDestroyed) showDialogue("bossIntro"); else showDialogue("headmasterIntro");},
                state:0
            },

            {
                name: "headmaster-creepy",
                x:6,
                y:2,
            },
            {
                name: "headmaster-statue",
                x:8,
                y:1,
            },
            {
                name: "headmaster-statue",
                x:1,
                y:1,
            },
            {
                name: "headmaster-statue",
                x:8,
                y:7,
            },
            {
                name: "headmaster-statue",
                x:1,
                y:7,
            },
            {
                name: "pot",
                x:1,
                y:4,
                height:2
            },
            {
                name: "bookshelf",
                x:2,
                y:0,
            },
            {
                name: "bookshelf",
                x:7,
                y:0,
            },
            {
                name: "chair",
                x:4,
                y:4,
            },
            {
                name: "smalltable",
                x:7,
                y:7,
            },
            {
                name: "chair",
                x:6,
                y:7,
            },
            {
                name: "headmaster",
                x:4,
                y:1,
                state:0
            },
            {
                name: "king",
                x:3,
                y:2,
                state:1,
                activate:function(){showDialogue("bossIntro");}
            },

        ],

    },{

        // Dorm Intro
        name: "Common Area",
        music: "indoors",
        x:1,
        y:2,
        environment: "castle",
        objects: [
            {
                name: "castlewallright",
                x:9,
                y:0,
                width:1,
                height:3,
            },
            {
                name: "castlewallright",
                x:9,
                y:6,
                width:1,
                height:3,
            },
            {
                name: "castlewallleft",
                x:0,
                y:0,
                width:1,
                height:3,
            },
            {
                name: "castlewallleft",
                x:0,
                y:6,
                width:1,
                height:3,
            },
            {
                name: "castlewalltop",
                x:0,
                y:0,
                width:10,
                height:1,
            },
            {
                name: "castlewallbottom",
                x:0,
                y:8,
                width:10,
                height:1,
            },
            {
                name: "castlewalltopleft",
                x:0,
                y:0,
            },
            {
                name: "castlewalltopright",
                x:9,
                y:0,
            },
            {
                name: "castlewallbottomleft",
                x:0,
                y:8,
            },
            {
                name: "castlewallbottomright",
                x:9,
                y:8,
            },
            {
                name: "bookshelf",
                x: 3,
                y:0,
            },
            {
                name: "bookshelf",
                x: 2,
                y:0,
            },
            {
                name: "bookshelf",
                x: 6,
                y:0,
            },
            {
                name: "bookshelf",
                x: 7,
                y:0,
            },
            {
                name: "headmaster-statue",
                x: 1,
                y:1,
            },
            {
                name: "headmaster-statue",
                x: 8,
                y:1,
            },
            {
                name: "headmaster-statue",
                x: 1,
                y:7,
            },
            {
                name: "headmaster-statue",
                x: 8,
                y:7,
            },
            {
                name: "table-top",
                x:4,
                y:5
            },
            {
                name: "table-bottom",
                x:4,
                y:6
            },
            {
                name: "chair",
                x:3,
                y:5
            },
            {
                name: "chair",
                x:6,
                y:6
            },
            {
                name: "girl",
                x: 3,
                y: 6,
                activate:function(){showDialogue("girlIntro")}
            },

        ],

    },{

        // Fork
        name: "Castle Entrance",
        music: "indoors",
        x:2,
        y:2,
        environment: "castle",
        objects: [
            {
                name: "castlewallright",
                x:9,
                y:0,
                width:1,
                height:3,
            },
            {
                name: "castlewallright",
                x:9,
                y:6,
                width:1,
                height:3,
            },
            {
                name: "castlewallleft",
                x:0,
                y:0,
                width:1,
                height:3,
            },
            {
                name: "castlewallleft",
                x:0,
                y:6,
                width:1,
                height:3,
            },
            {
                name: "headmaster-statue",
                x: 1,
                y:2,
            },
            {
                name: "headmaster-statue",
                x: 8,
                y:2,
            },
            {
                name: "headmaster-statue",
                x: 1,
                y:6,
            },
            {
                name: "headmaster-statue",
                x: 8,
                y:6,
            },
            {
                name: "pot",
                x:1,
                y:0,
                height:2
            },
            {
                name: "pot",
                x:8,
                y:1,
            },
            {
                name: "pot",
                x:8,
                y:7,
            },
        ],


    },{

        // Outside
        name: "Castle Grounds",
        music: "outdoors",
        x:3,
        y:2,
        environment: "outside",
        objects: [
            {
                name: "lessgrass",
                x:0,
                y:2,
                width:2,
                height:5,
            },
            {
                name: "grass",
                x:2,
                y:2,
                width:6,
                height:5,
            },
            {
                name: "road",
                x:0,
                y:3,
                width:3,
                height:3,
            },



            {
                name: "road",
                x:2,
                y:6,
                width:6,
                height:1,
            },


            {
                name: "fence",
                x:0,
                y:0,
                width:10,
                height:1,
            },
            {
                name: "fence",
                x:0,
                y:8,
                width:10,
                height:1,
            },

            {
                name: "castlewallleft",
                x:0,
                y:0,
                width:1,
                height:3,
            },
            {
                name: "castlewallleft",
                x:0,
                y:6,
                width:1,
                height:3,
            },

            {
                name: "tree",
                x:4,
                y:3,
            },
            {
                name: "flowers",
                x:2,
                y:4,
                width:1,
                height:1,
            },
            {
                name: "flowers",
                x:6,
                y:3,
                width:1,
                height:1,
            },
            {
                name: "road",
                x:2,
                y:2,
                width:6,
                height:1,
            },
            {
                name: "road",
                x:7,
                y:3,
                width:2,
                height:1,
            },
            {
                name: "road",
                x:8,
                y:4,
                width:2,
                height:1,
            },
            {
                name: "road",
                x:7,
                y:5,
                width:2,
                height:1,
            },
            {
                name: "kidb",
                x:6,
                y:5,
                activate:function(){showDialogue("treeIntro");}
            },

        ],

    },{

        // House Outside
        name: "Castle Grounds",
        music: "outdoors",
        x:4,
        y:2,
        environment: "outside",
        objects: [
            {
                name: "grass",
                x:0,
                y:0,
                width:10,
                height:3,
            },
            {
                name: "grass",
                x:0,
                y:6,
                width:10,
                height:3,
            },
            {
                name: "lessgrass",
                x:6,
                y:0,
                width:1,
                height:9,
            },
            {
                name: "lessgrass",
                x:1,
                y:2,
                width:8,
                height:1,
            },
            {
                name: "lessgrass",
                x:0,
                y:5,
                width:10,
                height:1,
            },
            {
                name: "lessgrass",
                x:2,
                y:1,
                width:1,
                height:1,
            },
            {
                name: "grass",
                x:7,
                y:5,
                width:1,
                height:1,
            },
            {
                name: "grass",
                x:0,
                y:5,
                width:1,
                height:1,
            },
            {
                name: "grass",
                x:9,
                y:3,
                width:1,
                height:1,
            },
            {
                name: "flowers",
                x:6,
                y:6,
                width:1,
                height:1,
            },
            {
                name: "flowers",
                x:3,
                y:2,
                width:1,
                height:1,

            },
            {
                name: "lessgrass",
                x:2,
                y:6,
                width:1,
                height:1,
            },
            {
                name: "fence",
                x:0,
                y:0,
                width:10,
                height:1,
            },
            {
                name: "fence",
                x:0,
                y:8,
                width:10,
                height:1,
            },
            {
                name: "road",
                x:0,
                y:4,
                width:10,
                height:1,
            },
            {
                name: "house-roof",
                x:4,
                y:0,

            },
            {
                name: "house-window",
                x:4,
                y:2,
            },
            {
                name: "house-door",
                x:5,
                y:2,
                goto:function(){loadRoom(getNextRoom(currentRoom,"up"), 3, 8);}
            },
            {
                name: "house-window",
                x:6,
                y:2,
                width:4
            },
            {
                name: "road",
                x:5,
                y:3,
            },

            {
                name: "none",
                x:8,
                y:0,
                height:10,
                goto:function(){player.position.ox = 14;player.position.tx -= 1;showDialogue("campusEdge");}
            }



        ],

    },{

        // Belle's House
        name: "Belle's House",
        music: "outdoors",
        x:4,
        y:1,
        environment: "house",
        objects: [
            {
                name: "housewallleft",
                x:0,
                y:0,
                width:1,
                height:10,
            },
            {
                name: "housewallleft",
                x:0,
                y:6,
                width:1,
                height:3,
            },
            {
                name: "housewalltop",
                x:0,
                y:0,
                width:7,
                height:1,
            },
            {
                name: "housewalltop",
                x:8,
                y:0,
                width:10,
                height:1,
            },
            {
                name: "housewallbottom",
                x:0,
                y:8,
                width:3,
                height:1,
            },
            {
                name: "housewallbottom",
                x:4,
                y:8,
                width:8,
                height:1,
            },
            {
                name: "houseentrancedownleft",
                x:2,
                y:8,
                width:1,
                height:1,
            },
            {
                name: "houseentrancedownright",
                x:4,
                y:8,
                width:1,
                height:1,
            },
            {
                name: "houseentrancedown",
                x:3,
                y:8,
                goto:function(){loadRoom(getNextRoom(currentRoom,"down"), 5, 3);}
            },
            {
                name: "housewalltopleft",
                x:0,
                y:0,
            },

            {
                name: "housewallbottomleft",
                x:0,
                y:8,
            },
            {
                name: "belle",
                x:4,
                y:3,
                activate:function(){showDialogue("belleIntro");}
            },
            {
                name: "table",
                x:1,
                y:2,
            },
            {
                name: "smalltable",
                x:1,
                y:4,
            },
            {
                name: "smalltable",
                x:2,
                y:4,
            },
            {
                name: "chair",
                x:1,
                y:5,
            },
            {
                name: "chair",
                x:2,
                y:5,
            },
            {
                name: "smalltable",
                x:1,
                y:6,
            },
            {
                name: "smalltable",
                x:2,
                y:6,
            },
            {
                name: "chair",
                x:1,
                y:7,
            },
            {
                name: "chair",
                x:2,
                y:7,
            },
            {
                name: "bookshelf",
                x:4,
                y:0,
                width:2
            },
            {
                name: "pot",
                x:7,
                y:7,
            },
            {
                name: "door",
                x:7,
                y:0,
                state:0,
                activate:function(){if(player.inventory.atticKey) showDialogue("unlockDoor"); else showDialogue("doorLocked");}
            },

        ],

    },{

        // Belle's House 2
        name: "Belle's House",
        music: "outdoors",
        x:5,
        y:1,
        environment: "house",
        objects: [
            {
                name: "housewallright",
                x:9,
                y:0,
                width:1,
                height:10,
            },
            {
                name: "housewalltop",
                x:0,
                y:0,
                width:10,
                height:1,
            },
            {
                name: "housewallbottom",
                x:0,
                y:8,
                width:10,
                height:1,
            },
            {
                name: "housewalltopright",
                x:9,
                y:0,
            },

            {
                name: "housewallbottomright",
                x:9,
                y:8,
            },
            {
                name: "fence-inside",
                x:5,
                y:4,
                width:4
            },
            {
                name: "fence-inside",
                x:5,
                y:6,
                height:2
            },
            {
                name: "fence-inside",
                x:5,
                y:1,
                height:2
            },
            {
                name: "loki",
                x:7,
                y:5,
                activate:function(){if(player.inventory.atticKey) showDialogue("lokiHappy"); else showDialogue("lokiIntro");}
            },
            {
                name: "dog",
                x:7,
                y:2,
                activate:function(){showDialogue("dogWoof");}
            },
            {
                name: "planks",
                x:2,
                y:6,
                state:0,
                activate:function(){if(player.progress.canGoDownstairs) showDialogue("planksMove"); else showDialogue("planksIntro");}
            },
            {
                name: "planks",
                x:3,
                y:6,
                state:1,
                activate:function(){ showDialogue("planksIntro");}
            },
            {
                name: "basement-stairs",
                x:2,
                y:6,
                state:1,
                goto:function(){loadRoom(getNextRoom(currentRoom,"down"), 2, 2)},
                activate:function(){loadRoom(getNextRoom(currentRoom,"down"), 2, 2)}
            },
            

        ],

    },{

        // Belle's House 3
        name: "Belle's House",
        music: "outdoors",
        x:6,
        y:1,
        environment: "house",
        objects: [
            {
                name: "housewallleft",
                x:0,
                y:0,
                width:1,
                height:10,
            },
            {
                name: "housewallleft",
                x:0,
                y:6,
                width:1,
                height:3,
            },
            {
                name: "housewalltop",
                x:0,
                y:0,
                width:10,
                height:1,
            },
            {
                name: "housewallbottom",
                x:0,
                y:8,
                width:2,
                height:1,
            },
            {
                name: "housewalltopleft",
                x:0,
                y:0,
            },

            {
                name: "housewallbottomleft",
                x:0,
                y:8,
            },

        ],

    },{

        // Belle's Attic
        name: "Belle's Attic",
        music: "outdoors",
        x:4,
        y:0,
        environment: "house",
        objects: [
            {
                name: "castlewallright",
                x:8,
                y:0,
                width:1,
                height:9,
            },

            {
                name: "castlewallleft",
                x:2,
                y:0,
                width:1,
                height:6,
            },

            {
                name: "castlewalltop",
                x:1,
                y:0,
                width:6,
                height:1,
            },
            {
                name: "castlewalltop",
                x:7,
                y:0,
                width:4,
                height:1,
            },
            {
                name: "castlewallbottom",
                x:3,
                y:5,
                width:4,
                height:1,
            },
            {
                name: "castlewallbottomleft",
                x:2,
                y:5,
            },


            {
                name: "castlewallfar",
                x:0,
                y:0,
                width:2,
                height:10
            },
            {
                name: "castlewallfar",
                x:9,
                y:0,
                width:2,
                height:10
            },
            {
                name: "castlewallfar",
                x:0,
                y:6,
                width:7,
                height:3
            },
            {
                name: "castlewalltopleft",
                x:2,
                y:0,
                width:1,
                height:1,
            },
            {
                name: "castlewalltopright",
                x:8,
                y:0,
                width:1,
                height:1,
            },
            {
                name: "bed",
                x:3,
                y:2,
            },
            {
                name: "smalltable",
                x:3,
                y:4,
            },
            {
                name: "bookshelf",
                x:3,
                y:0,
                width:2
            },
            {
                name: "dresser",
                x:5,
                y:0,
            },
            {
                name: "pot",
                x:6,
                y:4,
            },
            {
                name: "beast",
                x:4,
                y:3,
                state:0,
                activate:function(){if(player.inventory.hasRose) showDialogue("beastHappy"); else if(player.progress.canGoDownstairs) showDialogue("beastIntroV2"); else showDialogue("beastIntro");}
            },
            {
                name: "headmaster",
                x:4,
                y:3,
                state:1,
                activate:function(){showDialogue("beastNormal");}
            },

        ],

    }    ,{

        // Belle's Basement
        name: "Belle's Basement",
        music: "outdoors",
        x:5,
        y:2,
        environment: "castle",
        objects: [
            {
                name: "castlewallleft",
                x:0,
                y:0,
                width:1,
                height:10,
            },
            {
                name: "castlewallright",
                x:7,
                y:0,
                width:1,
                height:10,
            },
            {
                name: "castlewalltop",
                x:0,
                y:0,
                width:10,
                height:1,
            },
            {
                name: "castlewallbottom",
                x:0,
                y:6,
                width:10,
                height:1,
            },
            {
                name: "castlewalltopleft",
                x:0,
                y:0,
            },

            {
                name: "castlewallbottomleft",
                x:0,
                y:6,
            },
            {
                name: "castlewalltopright",
                x:7,
                y:0,
            },
            {
                name: "castlewallbottomright",
                x:7,
                y:6,
            },
            {
                name: "castlewallfar",
                x:8,
                y:0,
                width:2,
                height:10
            },
            {
                name: "castlewallfar",
                x:0,
                y:7,
                width:10,
                height:2
            },
            {
                name: "basement-up",
                x:2,
                y:1,
                goto:function(){loadRoom(getNextRoom(currentRoom,"up"), 2, 6)},
                activate:function(){loadRoom(getNextRoom(currentRoom,"up"), 2, 6)}
            },
            {
                name: "bed",
                x:3,
                y:3,
                width:2
            },
            {
                name: "dresser",
                x:5,
                y:0,
                width:2,
                activate:function(){showDialogue("belleDressers")}
            },
            {
                name: "pot",
                x:4,
                y:1,
                activate:function(){if(player.inventory.hasRose) showDialogue("janitorEmpty"); else showDialogue("bellePot");}
            },
            {
                name: "headmaster-statue",
                x:1,
                y:5,
            },
            {
                name: "headmaster-statue",
                x:6,
                y:5,
            },

        ],

    },{

        // Cafeteria
        name: "Lunch Room",
        music: "indoors",
        x:2,
        y:3,
        environment: "castle",
        objects: [
            {
                name: "castlewallright",
                x:9,
                y:0,
                width:1,
                height:9,
            },
            {
                name: "castlewallright",
                x:9,
                y:6,
                width:1,
                height:9,
            },
            {
                name: "castlewallleft",
                x:0,
                y:0,
                width:1,
                height:9,
            },
            {
                name: "table-top",
                x:2,
                y:2
            },
            {
                name: "table-middle",
                x:2,
                y:3,
                height:3,
            },
            {
                name: "table-bottom",
                x:2,
                y:6
            },
            {
                name: "table-top",
                x:6,
                y:2
            },
            {
                name: "table-middle",
                x:6,
                y:3,
                height:3,
            },
            {
                name: "table-bottom",
                x:6,
                y:6
            },
            {
                name: "pot",
                x:1,
                y:3,
            },
            {
                name: "chair",
                x:1,
                y:5,
            },
            {
                name: "chair",
                x:4,
                y:2,
            },
            {
                name: "chair",
                x:5,
                y:6,
            },
            {
                name: "chair",
                x:8,
                y:3,
            },
            {
                name: "kidb",
                x:4,
                y:5,
                state:0,
                activate:function(){showDialogue("lunch2");}
            },
            {
                name: "kidr",
                x:5,
                y:4,
                activate:function(){showDialogue("lunch1");}
            },
            {
                name: "girl",
                x:8,
                y:5,
                state:0,
                activate:function(){showDialogue("lunch1");}
            },
            {
                name: "kido",
                x:3,
                y:1,
                state:0,
                activate:function(){showDialogue("lunch3");}
            },
            {
                name: "guitarman",
                x:8,
                y:1,
                activate:function(){showDialogue("jukebox1")},
            },
        ],

    },{

        // Teachers 1
        name: "Classrooms",
        music: "classrooms",
        x:2,
        y:4,
        environment: "castle",
        objects: [
            {
                name: "castlewallright",
                x:9,
                y:0,
                width:1,
                height:4,
            },
            {
                name: "castlewallright",
                x:9,
                y:7,
                width:1,
                height:4,
            },
            {
                name: "castlewallleft",
                x:0,
                y:0,
                width:1,
                height:4,
            },
            {
                name: "castlewallleft",
                x:0,
                y:7,
                width:1,
                height:3,
            },
            {
                name: "pot",
                x:8,
                y:3,
            },
        ],

    },{

        // Teachers 2
        name: "Classrooms",
        music: "classrooms",
        x:2,
        y:5,
        environment: "castle",
        objects: [
            {
                name: "castlewallright",
                x:9,
                y:0,
                width:1,
                height:2,
            },
            {
                name: "castlewallright",
                x:9,
                y:5,
                width:1,
                height:4,
            },
            {
                name: "castlewallleft",
                x:0,
                y:0,
                width:1,
                height:2,
            },
            {
                name: "castlewallleft",
                x:0,
                y:5,
                width:1,
                height:4,
            },
            {
                name: "castlewallbottom",
                x:0,
                y:8,
                width:4,
                height:1,
            },
            {
                name: "castlewallbottom",
                x:6,
                y:8,
                width:4,
                height:1,
            },
            {
                name: "castlewallbottomleft",
                x:0,
                y:8,
            },
            {
                name: "castlewallbottomright",
                x:9,
                y:8,
            },
            {
                name: "smalltable",
                x:8,
                y:5
            },
            {
                name: "chair",
                x:8,
                y:6
            },
            {
                name: "pot",
                x:1,
                y:7
            },
        ],

    },{

        // Professor Excalibur
        name: "Professor Excalibur",
        music: "classrooms",
        x:3,
        y:4,
        environment: "castle",
        objects: [
            {
                name: "castlewallright",
                x:9,
                y:0,
                width:1,
                height:10,
            },
            {
                name: "castlewallleft",
                x:0,
                y:0,
                width:1,
                height:4,
            },
            {
                name: "castlewallleft",
                x:0,
                y:7,
                width:1,
                height:2,
            },
            {
                name: "castlewallbottom",
                x:0,
                y:8,
                width:9,
                height:1,
            },

            {
                name: "castlewalltop",
                x:0,
                y:0,
                width:10,
                height:1,
            },
            {
                name: "castlewalltopleft",
                x:0,
                y:0,
            },
            {
                name: "castlewallbottomleft",
                x:0,
                y:8,
            },
            {
                name: "castlewalltopright",
                x:9,
                y:0,
            },
            {
                name: "castlewallbottomright",
                x:9,
                y:8,
            },
            {
                name: "table",
                x:4,
                y:2
            },
            {
                name: "smalltable",
                x:3,
                y:4
            },
            {
                name: "chair",
                x:3,
                y:5
            },
            {
                name: "smalltable",
                x:4,
                y:4
            },
            {
                name: "chair",
                x:4,
                y:5
            },
            {
                name: "smalltable",
                x:5,
                y:4
            },
            {
                name: "chair",
                x:5,
                y:5
            },
            {
                name: "smalltable",
                x:6,
                y:4
            },
            {
                name: "chair",
                x:6,
                y:5
            },
            {
                name: "smalltable",
                x:3,
                y:6
            },
            {
                name: "chair",
                x:3,
                y:7
            },
            {
                name: "smalltable",
                x:4,
                y:6
            },
            {
                name: "chair",
                x:4,
                y:7
            },
            {
                name: "smalltable",
                x:5,
                y:6
            },
            {
                name: "chair",
                x:5,
                y:7
            },
            {
                name: "smalltable",
                x:6,
                y:6
            },
            {
                name: "chair",
                x:6,
                y:7
            },

            {
                name: "pot",
                x:8,
                y:7
            },
            {
                name: "dresser",
                x:1,
                y:0
            },
            {
                name: "bookshelf",
                x:2,
                y:0
            },
            {
                name: "dresser",
                x:8,
                y:0
            },
            {
                name: "bookshelf",
                x:7,
                y:0
            },
            {
                name: "excalibur",
                x:4,
                y:0,
                activate:function(){if(player.inventory.hasStunningSpell) showDialogue("excaliburDone"); else showDialogue("excaliburIntro");}
            },
            {
                name: "ron",
                x:7,
                y:6,
                activate:function(){showDialogue("ronHer1")}
            },
            {
                name: "her",
                x:8,
                y:6,
                activate:function(){showDialogue("ronHer1")}
            },
        ],

    },{

        // Professor U
        name: "Professor U",
        music: "classrooms",
        x:1,
        y:4,
        environment: "castle",
        objects: [
            {
                name: "castlewallleft",
                x:0,
                y:0,
                width:1,
                height:10,
            },
            {
                name: "castlewallright",
                x:9,
                y:0,
                width:1,
                height:4,
            },
            {
                name: "castlewallright",
                x:9,
                y:7,
                width:1,
                height:2,
            },
            {
                name: "castlewallbottom",
                x:0,
                y:8,
                width:9,
                height:1,
            },

            {
                name: "castlewalltop",
                x:0,
                y:0,
                width:10,
                height:1,
            },
            {
                name: "castlewalltopleft",
                x:0,
                y:0,
            },
            {
                name: "castlewallbottomleft",
                x:0,
                y:8,
            },
            {
                name: "castlewalltopright",
                x:9,
                y:0,
            },
            {
                name: "castlewallbottomright",
                x:9,
                y:8,
            },
            {
                name: "table",
                x:4,
                y:2
            },
            {
                name: "smalltable",
                x:3,
                y:4
            },
            {
                name: "chair",
                x:3,
                y:5
            },
            {
                name: "smalltable",
                x:4,
                y:4
            },
            {
                name: "chair",
                x:4,
                y:5
            },
            {
                name: "smalltable",
                x:5,
                y:4
            },
            {
                name: "chair",
                x:5,
                y:5
            },
            {
                name: "smalltable",
                x:6,
                y:4
            },
            {
                name: "chair",
                x:6,
                y:5
            },
            {
                name: "smalltable",
                x:3,
                y:6
            },
            {
                name: "chair",
                x:3,
                y:7
            },
            {
                name: "smalltable",
                x:4,
                y:6
            },
            {
                name: "chair",
                x:4,
                y:7
            },
            {
                name: "smalltable",
                x:5,
                y:6
            },
            {
                name: "chair",
                x:5,
                y:7
            },
            {
                name: "smalltable",
                x:6,
                y:6
            },
            {
                name: "chair",
                x:6,
                y:7
            },

            {
                name: "pot",
                x:1,
                y:7
            },
            {
                name: "dresser",
                x:1,
                y:0
            },
            {
                name: "bookshelf",
                x:2,
                y:0
            },
            {
                name: "dresser",
                x:8,
                y:0
            },
            {
                name: "bookshelf",
                x:7,
                y:0
            },
            {
                name: "professoru",
                x:5,
                y:1,
                activate: function(){if(player.inventory.hasRRBPotion) setTimeout(function(){showDialogue("profUIntroPotion"),16}); else if(player.inventory.hasDogTail && player.inventory.hasSnail && player.inventory.hasHair) setTimeout(function(){showDialogue("profUAllItems"),16}); else if(player.progress.startedRRB) setTimeout(function(){showDialogue("profUIntroStarted"),16}); else setTimeout(function(){showDialogue("profUIntro"),16});}
            },
        ],

    },{

        // Professor Excalibur 2
        name: "Professor Excalibur",
        music: "classrooms",
        x:3,
        y:5,
        environment: "castle",
        objects: [
            {
                name: "castlewallright",
                x:9,
                y:0,
                width:1,
                height:10,
            },
            {
                name: "castlewallleft",
                x:0,
                y:0,
                width:1,
                height:2,
            },
            {
                name: "castlewallleft",
                x:0,
                y:5,
                width:1,
                height:4,
            },
            {
                name: "castlewallbottom",
                x:0,
                y:8,
                width:9,
                height:1,
            },

            {
                name: "castlewalltop",
                x:0,
                y:0,
                width:10,
                height:1,
            },
            {
                name: "castlewalltopleft",
                x:0,
                y:0,
            },
            {
                name: "castlewallbottomleft",
                x:0,
                y:8,
            },
            {
                name: "castlewalltopright",
                x:9,
                y:0,
            },
            {
                name: "castlewallbottomright",
                x:9,
                y:8,
            },
            {
                name: "table",
                x:4,
                y:2
            },
            {
                name: "smalltable",
                x:3,
                y:4
            },
            {
                name: "chair",
                x:3,
                y:5
            },
            {
                name: "smalltable",
                x:4,
                y:4
            },
            {
                name: "chair",
                x:4,
                y:5
            },
            {
                name: "smalltable",
                x:5,
                y:4
            },
            {
                name: "chair",
                x:5,
                y:5
            },
            {
                name: "smalltable",
                x:6,
                y:4
            },
            {
                name: "chair",
                x:6,
                y:5
            },
            {
                name: "smalltable",
                x:3,
                y:6
            },
            {
                name: "chair",
                x:3,
                y:7
            },
            {
                name: "smalltable",
                x:4,
                y:6
            },
            {
                name: "chair",
                x:4,
                y:7
            },
            {
                name: "smalltable",
                x:5,
                y:6
            },
            {
                name: "chair",
                x:5,
                y:7
            },
            {
                name: "smalltable",
                x:6,
                y:6
            },
            {
                name: "chair",
                x:6,
                y:7
            },

            {
                name: "pot",
                x:1,
                y:7
            },
            {
                name: "dresser",
                x:1,
                y:0
            },
            {
                name: "bookshelf",
                x:2,
                y:0
            },
            {
                name: "dresser",
                x:8,
                y:0
            },
            {
                name: "bookshelf",
                x:7,
                y:0
            },
            {
                name: "excalibur",
                x:5,
                y:0,
                activate:function(){if(player.inventory.hasStunningSpell) showDialogue("excaliburDone"); else showDialogue("excaliburIntro");}
            },
            {
                name: "kidb",
                x:7,
                y:5,
                activate:function(){showDialogue("excaliburStudent");}
            },
        ],

    },{

        // Professor Vlad
        name: "Professor Vlad",
        music: "classrooms",
        x:1,
        y:5,
        environment: "castle",
        objects: [
            {
                name: "castlewallleft",
                x:0,
                y:0,
                width:1,
                height:10,
            },
            {
                name: "castlewallright",
                x:9,
                y:0,
                width:1,
                height:2,
            },
            {
                name: "castlewallright",
                x:9,
                y:5,
                width:1,
                height:4,
            },
            {
                name: "castlewallbottom",
                x:0,
                y:8,
                width:9,
                height:1,
            },

            {
                name: "castlewalltop",
                x:0,
                y:0,
                width:10,
                height:1,
            },
            {
                name: "castlewalltopleft",
                x:0,
                y:0,
            },
            {
                name: "castlewallbottomleft",
                x:0,
                y:8,
            },
            {
                name: "castlewalltopright",
                x:9,
                y:0,
            },
            {
                name: "castlewallbottomright",
                x:9,
                y:8,
            },
            {
                name: "table",
                x:4,
                y:2
            },
            {
                name: "smalltable",
                x:3,
                y:4
            },
            {
                name: "chair",
                x:3,
                y:5
            },
            {
                name: "smalltable",
                x:4,
                y:4
            },
            {
                name: "chair",
                x:4,
                y:5
            },
            {
                name: "smalltable",
                x:5,
                y:4
            },
            {
                name: "chair",
                x:5,
                y:5
            },
            {
                name: "smalltable",
                x:6,
                y:4
            },
            {
                name: "chair",
                x:6,
                y:5
            },
            {
                name: "smalltable",
                x:3,
                y:6
            },
            {
                name: "chair",
                x:3,
                y:7
            },
            {
                name: "smalltable",
                x:4,
                y:6
            },
            {
                name: "chair",
                x:4,
                y:7
            },
            {
                name: "smalltable",
                x:5,
                y:6
            },
            {
                name: "chair",
                x:5,
                y:7
            },
            {
                name: "smalltable",
                x:6,
                y:6
            },
            {
                name: "chair",
                x:6,
                y:7
            },

            {
                name: "pot",
                x:1,
                y:7
            },
            {
                name: "dresser",
                x:1,
                y:0
            },
            {
                name: "bookshelf",
                x:2,
                y:0
            },
            {
                name: "dresser",
                x:8,
                y:0
            },
            {
                name: "bookshelf",
                x:7,
                y:0
            },
            {
                name: "vlad",
                x:1,
                y:4,
                activate:function(){if(player.inventory.hasAvadaKedavra) showDialogue("vladDone"); else showDialogue("vladIntro");}
            },
            {
                name: "dead",
                x:1,
                y:5,
                activate:function(){showDialogue("vladDead");}
            },
        ],

    },{

        // Teachers 3
        name: "Janitor's Closet",
        music: "classrooms",
        x:2,
        y:6,
        environment: "castle",
        objects: [
            {
                name: "castlewallright",
                x:7,
                y:0,
                width:1,
                height:6,
            },

            {
                name: "castlewallleft",
                x:2,
                y:0,
                width:1,
                height:6,
            },

            {
                name: "castlewalltop",
                x:0,
                y:0,
                width:4,
                height:1,
            },
            {
                name: "castlewalltop",
                x:6,
                y:0,
                width:4,
                height:1,
            },
            {
                name: "castlewallbottom",
                x:2,
                y:5,
                width:6,
                height:1,
            },
            {
                name: "castlewallbottomleft",
                x:2,
                y:5,
            },

            {
                name: "castlewallbottomright",
                x:7,
                y:5,
            },
            {
                name: "castlewallfar",
                x:0,
                y:0,
                width:2,
                height:10
            },
            {
                name: "castlewallfar",
                x:8,
                y:0,
                width:2,
                height:10
            },
            {
                name: "castlewallfar",
                x:0,
                y:6,
                width:20,
                height:3
            },
            {
                name: "castlewalltopleft",
                x:2,
                y:0,
                width:1,
                height:1,
            },
            {
                name: "castlewalltopright",
                x:7,
                y:0,
                width:1,
                height:1,
            },
            {
                name: "pot",
                x:3,
                y:4,
                width:4,
                activate:function(){if(player.inventory.hasDogTail) showDialogue("janitorEmpty"); else showDialogue("janitorPot");}
            },
            {
                name: "dresser",
                x:3,
                y:0,
                activate:function(){if(player.inventory.hasHair) showDialogue("janitorEmpty"); else showDialogue("janitorDresser");}
            },
            {
                name: "chair",
                x:6,
                y:2,
            },
        ],

    },
]