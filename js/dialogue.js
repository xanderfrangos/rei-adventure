var dialogue = [
    {
        id: "test1",
        text: '"My mother was a potato and so was her mother, and so on and so forth..."',
        next: "test2"

    },
    {
        id: "test2",
        text: '"...you get what I\'m saying?"',
        next:"test3"

    },
    {
        id: "test3",
        choices:[
            {
                text:"Close"   
            },
            {
                text:"Close and beep the console",
                activate:function(){console.log("beep!");}
            },
            {
                text:"show these choices again",
                next:"test3"
            },
        ],


    },
    {
        id: "campusEdge",
        text: 'Leaving the castle grounds would be a bad idea...',
        next: "campusEdgeChoice"

    },
    {
        id: "campusEdgeChoice",
        choices: [
            {
                text:"[Turn back]"
            },
            {
                text:"[Venture into the Woods]",
                next:"campusEdgeEnd1"
            }
        ]
    },
    {
        id: "campusEdgeEnd1",
        text: "You run into a crew of bearded fairies that beat you up.",
        next:"gameOver"
    },
    {
        id: "gameOver",
        text: "Game over",
        activate:function(){loadRoom(findRoom(-1,-1), 1,1);showDialogue("titlebuffer");}
    },
    {
        id: "titleScreen",
        choices: [
            {
                text:"Continue",
                activate:function(){loadGame();if(player.progress.sawIntro) loadRoom(findRoom(0,2),1,1); else loadRoom(findRoom(-2,-1),1,1);}
            },
            {
                text:"New Game",
                activate:function(){player = playerNew; loadRoom(findRoom(-2,-1),1,1);}
            }
            ,
            {
                text:"Credits",

                activate:function(){reloadRoomWithState(1);showDialogue("credits");showDialogue("creditsbuffer");}
            }
        ]
    },
    {
        id: "storyIntro1",
        text: "Before falling asleep one evening, Rachel wished to be taken to another world... ",
        next:"storyIntro2",
        activate:function(){player.elem.attr("data-direction","sleep")}
    },
    {
        id: "storyIntro2",
        text: "A world of magic, castles, and fantastical creatures...",
        next:"storyIntro3"
    },
    {
        id: "storyIntro3",
        text: "Little did she know, but the Goblin King and his magificent bulge had been listening for her wishes.",
        next:"storyIntro4",
        activate:function(){reloadRoomWithState(1);player.elem.attr("data-direction","sleep");}
    },
    {
        id: "storyIntro4",
        text: "And so he appeared... to take Rachel to another land. The land of her dreams!",
        activate:function(){loadRoom(findRoom(0,2), 1,1);player.elem.attr("data-direction","awake");player.progress.sawIntro = true;}
    },
    {
        id: "creditsbuffer",
        text: "",
        next:"credits"
    },
    {
        id: "titlebuffer",
        text: "",
        next:"titleScreen"
    },
    {
        id: "newbuffer",
        text: "",
        next:"storyIntro1"
    },
    {
        id: "credits",
        text: "Programming & Bad Jokes<br>Alexander Frangos<br><br>Music<br>Daniel Sweet<br><br>Star / Birthday Girl<br>Rachel Fieler<br><br>Professional Lapdog<br>Cosmo",
        next:"credits2",
        activate:function(){exitDialogue();}
    },
    {
        id: "credits2",
        text: "All Sprites are taken from The Legend Of Zelda: Oracle of Season & The Legend Of Zelda: Oracle of Ages, property of Nintendo & Capcom<br><br>Awesome Gameboy mockup by BLUEamnesiac @ deviantart<br><br>I love you, Rachel! <3",
        next:"titleScreen",
        activate:function(){exitDialogue();reloadRoomWithState(0);setTimeout(function(){showDialogue("titleScreen")},16)}
    },

    {
        id: "pot",
        text: "A pot... Looks like there's nothing inside."
    },
    {
        id: "bed",
        text: "This is no time to go back to sleep!"
    },
    {
        id: "dresser",
        text: "It wouldn't be very nice to rummage through someone's dresser...",
        next:"dresserChoice"
    },
    {
        id: "dresserChoice",
        choices: [
            {
                text:"Leave it alone"
            },
            {
                text:"Do it anyway",
                next:"dresserChoice2"
            }
        ]
    },
    {
        id: "dresserChoice2",
        text: "Unsurprisingly, the dresser is full of clothes."
    },



    // ///////////////////////////////////////
    //
    // Best Friend
    //
    // ///////////////////////////////////////


    {
        id: "bfIntro",
        text: "\"Hey there! I don't remember meeting you before.\"",
        next: "bfChoices1"
    },{
        id: "bfChoices1",
        choices:[
            {
                text:"What is this place?",
                next:"bfWhat1",
            },
            {
                text:"[Walk away]",
            },
        ]
    },
    {
        id: "bfWhat1",
        text: "\"You don't know? You're at the Bogwarts School for Exceptional Pigeons.\"",
        next: "bfChoices2"
    },{
        id: "bfChoices2",
        choices:[
            {
                text:"Like Hogwarts? Is Harry Potter here?",
                next:"bfWhatHP1",
            },
            {
                text:"Hold on, pigeons?",
                next:"bfWhatP1",
            },
            {
                text:"[Walk away]",
            },
        ]
    },
    {
        id: "bfWhatHP1",
        text: "\"Why do all of the new students ask that?\"",
        next: "bfWhatHP2"
    },
    {
        id: "bfWhatHP2",
        text: "\"No. There isn't a Harry Potter here.\"",
        next: "bfChoices2"
    },
    {
        id: "bfWhatP1",
        text: "\"Yep! 90% of the student population are birds.\"",
        next: "bfWhatP2"
    },
    {
        id: "bfWhatP2",
        text: "\"Us 10% have to be air-dropped onto campus, as the woods surrounding the school are too dangerous.\"",
        next: "bfChoices3"
    },
    {
        id: "bfChoices3",
        choices:[
            {
                text:"I don't see any birds...",
                next:"bfWhatP3",
            },
            {
                text:"[Walk away]",
            },
        ]
    },
    {
        id: "bfWhatP3",
        text: "\"Well, it's the weekend. All of the birds fly home. Duh.\"",
        next: "bfChoices2"
    },

    // ///////////////////////////////////////
    //
    // Belle's House
    //
    // ///////////////////////////////////////





    // Loki

    {
        id: "lokiIntro",
        text: "*horse noises*",
        next: "lokiChoices"
    },{
        id: "lokiChoices",
        choices:[
            {
                text:"[Walk away]",
            },
            {
                text:"Neigh!",
                next:"lokiTalk1",
            },
        ]
    },
    {
        id: "lokiTalk1",
        text: '"How dare you mock me! Do you think my condition amusing?"',
        next: "lokiChoices2"
    },
    {
        id: "lokiChoices2",
        choices:[
            {
                text:"A talking horse?!",
                next:"lokiTalk2",
            },
            {
                text:"Shut up, horse.",
                next:"lokiMad",
            },
            {
                text:"[Walk away]",
            },

        ]
    },
    {
        id: "lokiMad",
        text: '"Fine! I haven\'t the time for your petty games."',
    },
    {
        id: "lokiTalk2",
        text: '"Do you not recognize my regal aura? I am Loki, the trickster god!"',
        next: "lokiChoices3"
    },
    {
        id: "lokiChoices3",
        choices:[
            {
                text:"Sure, horse.",
                next:"lokiMad",
            },
            {
                text:"A horse god?",
                next:"lokiTalk3",
            },

            {
                text:"[Walk away]",
            },

        ]
    },
    {
        id: "lokiTalk3",
        text: '"Horse? No, I am a Norse god!"',
        next: "lokiTalk4"
    },
    {
        id: "lokiTalk4",
        text: '"I\'ve simply... made a few poor choices. I was tricked into this form and trapped within it."',
        next: "lokiTalk5"
    },
    {
        id: "lokiTalk5",
        text: '"It was that damn woman and the Goblin King. They stole my magic and, dyed my coat, and branded me with a \'cutie mark\'!"',
        next: "lokiTalk6"
    },
    {
        id: "lokiTalk6",
        text: '"I cannot believe I\'m asking this, but would you help me?"',
        next: "lokiChoice4"
    },
    {
        id: "lokiChoice4",
        choices:[
            {
                text:"Yes",
                next:"lokiTalk7",
            },
            {
                text:"No",
                next:"lokiMad",
            },

            {
                text:"Shut up, horse.",
                next:"lokiMad",
            },

        ]
    },
    {
        id: "lokiTalk7",
        text: '"Thank you, mortal peasant! Go up to the attic and speak to the cursed man."',
        next: "lokiTalk8"
    },
    {
        id: "lokiTalk8",
        text: '"Here is the key to the attic. The woman \'misplaced\' it earlier."',
        next: "lokiTalk9"
    },
    {
        id: "lokiTalk9",
        text: '[Attic key acqured!]',
        next: "lokiChoice5",
        activate:function(){player.inventory.atticKey = true;}
    },
    {
        id: "lokiChoice5",
        choices:[
            {
                text:"I'm on it!",
                next:"lokiThanks",
            },
            {
                text:"Why not go up there yourself?",
                next:"lokiExplain",
            },

            {
                text:"Shut up, horse.",
                next:"lokiMad",
            },

        ]
    },
    {
        id: "lokiThanks",
        text: '"Thank you, mortal peasant!"',
    },
    {
        id: "lokiExplain",
        text: '"I am... too wide to fit through the door. The door is 16 pixels wide and I am 32 pixels."',
        next: "lokiChoice5"
    },
    {
        id: "lokiHappy",
        text: "*Happy horse noises*"
    },




    // Belle



    {
        id: "belleIntro",
        text: '"I\'m sorry, but I only allow students here when class is in session. You should leave."',
        next: "belleChoice"
    },
    {
        id: "belleChoice",
        choices:[
            {
                text:"Who are you?",
                next:"belleExplain1",
            },
            {
                text:"Okay. Bye.",
            },

        ]
    },
    {
        id: "belleExplain1",
        text: '"My name is Belle. I teach \'Magical Creatures, Years 1 & 2\'. This is my home and classroom."',
        next: "belleExplain2",
    },
    {
        id: "belleExplain2",
        text: '"Now, please leave before I have to call the headmaster. I don\'t appreciate students snooping around on the weekends."',
        next:"belleChoice"
    },



    // Beast

    {
        id: "beastIntro",
        text: '"Help me!"',
        next: "beastChoice1"
    },
    {
        id: "beastIntro2",
        text: '"Please, help me!"',
        next: "beastChoice1"
    },
    {
        id: "beastIntroV2",
        text: '"Please hurry! I don\'t want to be a monster any more!"',
        next: "beastChoice1alt"
    },
    {
        id: "beastChoice1",
        choices:[
            {
                text:"Who are you?",
                next:"beastExplain1",
            },
            {
                text:"That's a strange way of saying \"Hello\".",
                next:"beastIntro2"
            },
            {
                text:"I'll help you.",
                next:"beastHelp1",
            },
            {
                text:"[Walk away]",
                next:"beastNo"
            },

        ]
    },
    {
        id: "beastChoice1alt",
        choices:[
            {
                text:"Who are you?",
                next:"beastExplain1",
            },
            {
                text:"[Walk away]",
            },

        ]
    },
    {
        id: "beastNo",
        text: '"Please, no!"',
    },
    {
        id: "beastHelp1",
        text: '"Oh thank you! Thank you!"',
        next: "beastHelp2"
    },
    {
        id: "beastHelp2",
        text: '"To break this curse, you\'ll need to destroy the rose that Belle keeps in the basement."',
        next: "beastHelp3"
    },
    {
        id: "beastHelp3",
        text: '"The stairs are covered by some planks on the floor. Just move them aside. Please hurry!"',
        activate:function(){player.progress.canGoDownstairs = true}
    },
    {
        id: "beastExplain1",
        text: '"I was once the headmaster of this wonderful school. And now..."',
        next:"beastExplainChoice"
    },
    {
        id: "beastExplainChoice",
        choices:[
            {
                text:"...you're hideous.",
                next:"beastExplain1a",
            },
            {
                text:"...you're a monster.",
                next:"beastExplain1a",
            },
            {
                text:"...you're cursed.",
                next:"beastExplain1b",
            },
            {
                text:"...I'm bored. Bye!",
                next:"beastNo",
            },

        ]
    },
    {
        id: "beastExplain1a",
        text: '"A little sympathy would be appreciated, asshole."',
        choice:"beastExplain2"
    },
    {
        id: "beastExplain1b",
        text: '"Yes, unfortunately. Trapped like an animal... as an animal. She does this to everyone!"',
        next:"beastExplain2"
    },
    {
        id: "beastExplain2",
        text: '"Belle..."',
        next:"beastExplain3"
    },
    {
        id: "beastExplain3",
        text: '"She promised it wasn\'t permenant! Why did I think I could trust her?"',
        next:"beastExplain4"
    },
    {
        id: "beastExplain4",
        text: '"I did ask for this... it\'s just not what I\'d expcted."',
        next:"beastExplain5"
    },
    {
        id: "beastExplain5",
        text: '"The only time I see the outside world is through the downstairs windows, as I\'m brought to the basement."',
        next:"beastExplain6"
    },
    {
        id: "beastExplain6",
        text: '"..."',
        activate:function(){exitDialogue();if(player.progress.canGoDownstairs) showDialogue("beastChoice1alt"); else showDialogue("beastChoice1");}
    },
    
    {
        id: "beastHappy",
        text: '"You found it! Quick give me that rose!"',
        next: "beastHappy2"
    },
    {
        id: "beastHappy2",
        text: '[He swipes the rose from your hands and shreds it with his claws.]',
        activate:function(){reloadRoomWithState(1); player.progress.roseDestroyed; setRoomState(findRoom(1,0), 1);}
    },
    {
        id: "beastNormal",
        text: '"I\'m back to normal! Thank you so much."',
        next: "beastNormal2"
    },
    {
        id: "beastNormal2",
        text: '"I bet that the Goblin King\'s transformation is broken now, too."',
    },



    // ///////////////////////////////////////
    //
    // Lunch room
    //
    // ///////////////////////////////////////

    {
        id: "lunch1",
        text: '"Watch it! I\'m trying to eat lunch here."'
    },
    {
        id: "lunch2",
        text: '"You want me to move? Sorry, I\'m saving the seats next to me."'
    },
    {
        id: "lunch3",
        text: '"I need to get through to the classrooms, but these jerks are blocking it."'
    },
    {
        id: "jukebox1",
        text: '"Want to hear a rockin\' tune? I take requests."',
        next:"jukeboxChoice"
    },
    {
        id: "jukeboxChoice",
        choices: [
            {
                text:"Let It Go",
                next:"jukeboxLIG"
            },
            {
                text:"What's New Pussycat?",
                next:"jukeboxWNP"
            },
            {
                text:"[Walk away]"  
            },
        ],
    },
    {
        id: "jukeboxLIG",
        text: '"Not a chance! I\'ll play just about anything, but not that trash."',
    },
    {
        id: "jukeboxWNP",
        text: '"...what\'s new, Pussycat? Whoa, whoa!"',
        next:"jukeboxWNP2"
    },
    {
        id: "jukeboxWNP2",
        text: '"What\'s new, Pussycat? Whoa, whoa!"',
        next:"jukeboxWNP3"
    },
    {
        id: "jukeboxWNP3",
        text: '"Pussycat, Pussycat, I\'ve got flowers<br>And lots of hours"',
        next:"jukeboxWNP4"
    },
    {
        id: "jukeboxWNP4",
        text: '"To spend with you.<br>So go and powder your cute little pussycat nose!"',
        next:"jukeboxWNP5"
    },
    {
        id: "jukeboxWNP5",
        text: '"Pussycat, Pussycat, I love you<br>Yes, I do!<br>You and your pussycat nose!"',
        next:"jukeboxWNP6"
    },
    {
        id: "jukeboxWNP6",
        text: '"...what\'s new, Pussycat? Whoa, whoa!"',
        next:"jukeboxWNP7"
    },
    {
        id: "jukeboxWNP7",
        text: '"What\'s new, Pussycat? Whoa, whoa!"',
        next:"jukeboxWNP8"
    },
    {
        id: "jukeboxWNP8",
        text: '"Pussycat, Pussycat, you\'re so thrilling<br>And I\'m so willing"',
        next:"jukeboxWNP9"
    },
    {
        id: "jukeboxWNP9",
        text: '"To care for you.<br>So go and make up your cute little pussycat eyes!"',
        next:"jukeboxWNP10"
    },
    {
        id: "jukeboxWNP10",
        text: '"Pussycat, Pussycat, I love you<br>Yes, I do!<br>You and your pussycat eyes!"',
        next:"jukeboxWNP11"
    },
    {
        id: "jukeboxWNP11",
        text: '"...what\'s new, Pussycat? Whoa, whoa!"',
        next:"jukeboxWNP12"
    },
    {
        id: "jukeboxWNP12",
        text: '"What\'s new, Pussycat? Whoa, whoa!"',
        next:"jukeboxWNP13"
    },
    {
        id: "jukeboxWNP13",
        text: '"Pussycat, Pussycat, you\'re delicious<br>And if my wishes"',
        next:"jukeboxWNP14"
    },
    {
        id: "jukeboxWNP14",
        text: '"Can all come true<br>I\'ll soon be kissing your sweet little pussycat lips!"',
        next:"jukeboxWNP15"
    },
    {
        id: "jukeboxWNP15",
        text: '"Pussycat, Pussycat, I love you<br>Yes, I do!"',
        next:"jukeboxWNP16"
    },
    {
        id: "jukeboxWNP16",
        text: '"You and your pussycat lips!<br>You and your pussycat eyes!<br>You and your pussycat nose!"',
        next:"jukeboxWNP17"
    },
    {
        id: "jukeboxWNP17",
        text: '...',
        next:"jukeboxDrivenAway"
    },
    {
        id: "jukeboxWNPStop",
        text: 'Okay okay. Want to pick another song?',
        next:"jukeboxChoice"
    },
    {
        id: "jukeboxDrivenAway",
        text: "It seems that your choice in music drove people away.",
        activate:function(){if(player.progress.timesPlayedWNP == 0) {reloadRoomWithState(1);showDialogue("jukeboxDrivenAway");} player.progress.timesPlayedWNP += 1; }
    },





    // ///////////////////////////////////////
    //
    // Vlad
    //
    // ///////////////////////////////////////

    {
        id: "vladIntro",
        text: '"Huh? Oh, this? I was just eati- GREETING a student."',
        next: "vladIntro2",
    },
    {
        id: "vladIntro2",
        text: '"Nevermind him. How can I assist you?"',
        next: "vladChoice",
    },
    {
        id: "vladChoice",
        choices: [
            {
                text:"Who are you?",
                next:"vladWho"
            },
            {
                text:"Teach me a spell or I'll tell everyone what you've done.",
                next:"vladSpell"
            },
            
            {
                text:"[Walk away]"  
            },
        ],
    },
    {
        id: "vladWho",
        text: '"I am the senior professor of the Dark Arts -- Vlad -- and I am not a vampire."',
        next: "vladChoice",
    },
    {
        id: "vladSpell",
        text: '"How dare you threaten me!"',
        next: "vladSpell2",
    },
    {
        id: "vladSpell2",
        text: '[Learned Avada Kedavra!]',
        activate: function(){player.inventory.hasAvadaKedavra = true}
    },
    {
        id: "vladDead",
        text: 'You\'re not sure if he\'s dead or out cold...',
    },
    {
        id: "vladDone",
        text: '"What more could you want? Leave me be!"',
    },



    // ///////////////////////////////////////
    //
    // Excalibur
    //
    // ///////////////////////////////////////

    {
        id: "excaliburIntro",
        text: '"Who are you exactly?"',
        next: "excaliburChoice",
    },
    {
        id: "excaliburFool",
        text: '"Fool!"',
    },
    {
        id: "excaliburChoice",
        choices: [
            {
                text:"Rachel",
                next:"excaliburWho"
            },
            {
                text:"Rei",
                next:"excaliburWho"
            },
            {
                text:"Newt",
                next:"excaliburWho"
            },
            {
                text:"[Walk away]",  
                next:"excaliburFool"
            },
        ],
    },
    {
        id: "excaliburWho",
        text: '"My legend dates back to the 12th century, thank you very much."',
        next: "excaliburChoice2",
    },
    {
        id: "excaliburChoice2",
        choices: [
            {
                text:"Really? Tell me more.",
                next:"excaliburWho2"
            },
            {
                text:"Wait, I didn't ask about you...",
                next:"excaliburWho2"
            },
            {
                text:"I'm just gonna go...",
                next:"excaliburFool"
            },
            {
                text:"[Walk away]",  
                next:"excaliburFool"
            },
        ],
    },
    {
        id: "excaliburWho2",
        text: '"Young one! Do you want to hear the story of me?"',
        next: "excaliburChoice3",
    },

    {
        id: "excaliburChoice3",
        choices: [
            {
                text:"Yes",
                next:"excaliburWho3"
            },
            {
                text:"No",
                next:"excaliburWho3"
            },
            {
                text:"[Walk away]",  
                next:"excaliburFool"
            },
        ],
    },
    {
        id: "excaliburWho3",
        text: '"My mornings begin with a cup of tea with cream at the cafe."',
        next: "excaliburWho4",
    },
    {
        id: "excaliburWho4",
        text: '"My afternoons begin with a cup of tea with two lumps of sugar."',
        next: "excaliburChoice3a",
    },
    {
        id: "excaliburChoice3a",
        choices: [
            {
                text:"Wait, wait. Hold on a second.",
                next:"excaliburWho6"
            },
            {
                text:"Can we talk about something else?",
                next:"excaliburWho6"
            },
            {
                text:"[Walk away]",  
                next:"excaliburFool"
            },
        ],
    },
    {
        id: "excaliburWho5",
        text: '"My afternoons begin with a cup of tea with two lumps of sugar."',
        next: "excaliburWho5",
    },
    {
        id: "excaliburWho5",
        text: '"My afternoons begin with a cup of tea with two lumps of sugar."',
        next: "excaliburWho6",
    },
    {
        id: "excaliburWho6",
        text: '"What is your favorite number between 1 and 12?"',
        next: "excaliburChoice4",
    },
    {
        id: "excaliburChoice4",
        choices: [
            {
                text:"1",
                next:"excaliburWho7"
            },
            {
                text:"8",
                next:"excaliburWho7"
            },
            {
                text:"9",
                next:"excaliburWho7"
            },
            {
                text:"0xA",
                next:"excaliburWho7"
            },
            {
                text:"Stop! This is nonsense!",
                next:"excaliburWho7"
            },
            {
                text:"[Walk away]",  
                next:"excaliburFool"
            },
        ],
    },
    {
        id: "excaliburWho7",
        text: '"Fool! In the evening, I change into my pajamas."',
        next: "excaliburChoice5",
    },
    {
        id: "excaliburChoice5",
        choices: [
            {
                text:"Please... stop.",
                next:"excaliburWho8"
            },
            {
                text:"Go on.",
                next:"excaliburWho8"
            },
            {
                text:"Shut up already!",
                next:"excaliburWho8"
            },
            {
                text:"[Walk away]",  
                next:"excaliburFool"
            },
        ],
    },
    {
        id: "excaliburWho8",
        text: '"Fool! Do you know what this hat is?"',
        next: "excaliburChoice6",
    },
    {
        id: "excaliburChoice6",
        choices: [
            {
                text:"How am I supposed to know that?",
                next:"excaliburWho8a"
            },
            {
                text:"A magical hat?",
                next:"excaliburWho8a"
            },
            {
                text:"Some kind of parasite?",
                next:"excaliburWho8a"
            },
            {
                text:"[Walk away]",  
                next:"excaliburFool"
            },
        ],
    },
    {
        id: "excaliburWho8a",
        text: '"Fool! If you don\'t know, I guess I\'ll have to tell you."',
        next: "excaliburWho9",
    },
    {
        id: "excaliburWho9",
        text: '"The taller the chef\'s hat, the greater the chef."',
        next: "excaliburChoice7",
    },
    {
        id: "excaliburChoice7",
        choices: [
            {
                text:"So what you're trying to say is...",
                next:"excaliburWho10"
            },
            {
                text:"SHUT. UP.",
                next:"excaliburWho10"
            },
            {
                text:"asdgasdg",
                next:"excaliburWho10"
            },
            {
                text:"[Walk away]",  
                next:"excaliburFool"
            },
        ],
    },
    
    {
        id: "excaliburWho10",
        text: '"Fool! Who said that I was a chef?"',
        next: "excaliburChoice8",
    },
    {
        id: "excaliburChoice8",
        choices: [
            {
                text:"...",
                next:"excaliburWho11"
            },
            {
                text:"...",
                next:"excaliburWho11"
            },
            {
                text:"...",
                next:"excaliburWho11"
            },
            {
                text:"[Walk away]",  
                next:"excaliburFool"
            },
        ],
    },
    {
        id: "excaliburWho11",
        text: '"You\'ve done well, student. I believe you can learn a thing or two from a legend such as myself."',
        next: "excaliburSpell",
    },
    {
        id: "excaliburSpell",
        text: '[You\'ve learned the Stunning Spell!]',
        activate: function(){player.inventory.hasStunningSpell = true},
    },
    {
        id: "excaliburDone",
        text: 'Leave me, student!',
    },

    
    
    
    
    
    
    // ///////////////////////////////////////
    //
    // Janitor's Closet
    //
    // ///////////////////////////////////////
    
    
    {
        id: "janitorDresser",
        text: 'Not much in here... just some hair and a snail. Eww.',
        next: "janitorDresser2"
    },
    {
        id: "janitorDresser2",
        text: '[Strange hair acquired!]<br>[Snail acquired!]',
        activate:function() {player.inventory.hasHair = true; player.inventory.hasSnail = true;}
    },
    {
        id: "janitorEmpty",
        text: 'There\'s nothing left in there.',
    },
    {
        id: "janitorPot",
        text: 'Mostly trash. What\'s this? A dog\'s tail? Okay...',
        next: "janitorPot2"
    },
    {
        id: "janitorPot2",
        text: '[Dog tail acquired!]',
        activate:function() {player.inventory.hasDogTail = true;}
    },
    
    
    
    
    // ///////////////////////////////////////
    //
    // Headmaster's Lobby
    //
    // ///////////////////////////////////////
    
    {
        id: "secretaryIntro",
        text: "\"I'm very sorry, but the headmaster is too busy to talk to anyone right now.\"",
        activate:function(){if(player.inventory.hasStunningSpell) setTimeout(function(){showDialogue("secretaryChoice")},16);}
    },
    {
        id: "secretaryChoice",
        choices: [
            {
                text:"[Use Stunning Spell]",
                next:"secretaryStun"
            },
            {
                text:"[Walk away]",
            },
        ],
    },
    {
        id: "secretaryStun",
        text: "The secretary is launched back and drops to the floor.",
        activate:function(){reloadRoomWithState(1)}
    },
    
    
    // ///////////////////////////////////////
    //
    // Headmaster's Office
    //
    // ///////////////////////////////////////
    
    {
        id: "headmasterIntro",
        text: "\"Hello there little lady. How can I help you?\"",
        activate: function(){if(player.inventory.hasAvadaKedavra) setTimeout(function(){showDialogue("headmasterChoiceAv"),16}); else setTimeout(function(){showDialogue("headmasterChoice"),16});}
    },
    {
        id: "headmasterChoice",
        choices: [
            {
                text:"[Use Stunning Spell]",
                next:"headmasterStun"
            },
            {
                text:"[Walk away]",
            },
        ],
    },
    {
        id: "headmasterChoiceAv",
        choices: [
            {
                text:"[Use Stunning Spell]",
                next:"headmasterStun"
            },
            {
                text:"[Use Avada Kedavra]",
                next:"headmasterAv"
            },
            {
                text:"[Walk away]",
            },
        ],
    },
    {
        id: "headmasterStun",
        text: "The Headmaster deflects your spell and immediately expells you. You now have no chance to ever return home.",
        next:"gameOver"
    },
    {
        id: "headmasterAv",
        text: "You cast Avada Kedavra at the Headmaster, killing him where he stands.",
        next:"headmasterAv2"
    },
    {
        id: "headmasterAv2",
        text: "Shortly after, you're discovered and sent to Azkaban for your crimes.",
        next:"gameOver"
    },

    
    
    
    // Goblin King
    
    {
    id: "bossIntro",
        text: "\"This was your doing! Don't think I'll let you get away with this!\"",
        activate: function(){if(player.inventory.hasAvadaKedavra) setTimeout(function(){showDialogue("bossChoiceSpell"),16}); else setTimeout(function(){showDialogue("bossChoiceNoSpell"),16});}
    },
    {
        id: "bossChoiceSpell",
        choices: [
            {
                text:"[Use Avada Kedavra]",
                next:"bossSpell"
            },
            {
                text:"[Attempt to defend yourself]",
                next:"bossDefend"
            },
            {
                text:"[Run away]",
                next:"bossRun"
            },
        ],
    },
    {
        id: "bossChoiceNoSpell",
        choices: [
            {
                text:"[Attempt to defend yourself]",
                next:"bossDefend"
            },
            {
                text:"[Run away]",
                next:"bossRun"
            },
        ],
    },
    {
        id: "bossDefend",
        text: "You do your best to fend off the assault of the Goblin King's meaty fists. It doesn't work. You die.",
        next:"gameOver"
    },
    {
        id: "bossRun",
        text: "You immediately bolt for the exit, but the Goblin King is far faster that you. You die.",
        next:"gameOver"
    },
    {
        id: "bossSpell",
        text: "You quickly cast Avada Kedavra, killing the Goblin King on contact.",
        next:"bossSpell2"
    },
    {
        id: "bossSpell2",
        text: "As the life slips away from his body, the world around you begins to fade.",
        next:"bossSpell3"
    },
    {
        id: "bossSpell3",
        text: "The warmth of your bed greets you as you wake. Was it all a dream?",
        activate:function(){loadRoom(findRoom(-1,-1), 400,400);reloadRoomWithState(1);showDialogue("credits");showDialogue("creditsbuffer");}
    },
    
    
    
    // ///////////////////////////////////////
    //
    // Professor U
    //
    // ///////////////////////////////////////
    
    
    {
        id: "profUIntro",
        text: "\"Wonderful, a student! Would you like to help me with a project?\"",
        next:"profUIntroChoice"
    },
    {
        id: "profUIntroChoice",
        choices: [
            {
                text:"Yes",
                next:"profUIntroYes"
            },
            {
                text:"No",
                next:"profUIntroNo"
            },
            {
                text:"[Walk away]",
            },
        ],
    },
    {
        id: "profUIntroNo",
        text: "Oh. That\'s too bad. Maybe later?",
    },
    {
        id: "profUIntroYes",
        text: "\"Fantastic!\"",
        next: "profUIntroYes1"
    },
    {
        id: "profUIntroYes",
        text: "\"You see, I recently had some success with my new Chemical X potion. With the right ingredients, you can make super powered children!\"",
        next: "profUIntroYes1"
    },
    {
        id: "profUIntroYes1",
        text: "\"However, my first batch produced girls.\"",
        next: "profUIntroYes2"
    },
    {
        id: "profUIntroYes2",
        text: "\"I can\'t stand little girls. I want boys instead.\"",
        next: "profUIntroYes3"
    },
    {
        id: "profUIntroYes3",
        text: "\"Bring me three items that I can use to create the rowdiest, rougest boys.\"",
        activate:function(){player.progress.startedRRB = true}
    },
    {
        id: "profUIntroStarted",
        text: "\"What do you mean, you have no idea where to look for those items? Check the janitor\'s closet.\"",
    },
    {
        id: "profUAllItems",
        text: "\"You found all of the ingredients! Here, let me just add some Chemical X and....\"",
        next: "profUAllItems2"
    },
    {
        id: "profUAllItems2",
        text: "[Acquired Rowdyruff Boys Potion!]",
        activate:function(){player.inventory.hasRRBPotion = true}
    },
    {
        id: "profUIntroPotion",
        text: "\"Go ahead and try out the potion somewhere where they'll be of use.\"",
    },
    
    
    
    // ///////////////////////////////////////
    //
    // Bully
    //
    // ///////////////////////////////////////

    
    {
        id: "bullyIntro",
        text: "\"Tunnel snakes rule!\"",
        next:"bullyIntro2"
    },
    {
        id: "bullyIntro2",
        text: "\"We're the rougest, toughest gang in all of Bogwarts! And we don't move for no one.\"",
        activate: function(){if(player.inventory.hasRRBPotion) setTimeout(function(){showDialogue("bullyChoice"),16}); else setTimeout(function(){showDialogue("bullyNoOptions"),16});}
    },
    {
        id: "bullyChoice",
        choices: [
            {
                text:"[Use Rowdyruff Boys Potion]",
                next:"bullyUseRRB"
            },
            {
                text:"[Walk away]",
            },
        ],
    },
    {
        id: "bullyUseRRB",
        text: "You throw the potion at the ground, producing 3 small children.",
        next:"bullyUseRRB2"
    },
    {
        id: "bullyUseRRB2",
        text: "They proceed to beat the bullies senseless, then fly off.",
        activate:function(){reloadRoomWithState(1);}
    },
    {
        id: "bullyNoOptions",
        text: "It appears you can't get them to move right now.",
    },
    
    
    
    // ///////////////////////////////////////
    //
    // Misc
    //
    // ///////////////////////////////////////
    
    {
        id: "ronHer1",
        text: "\"Wingardium Leviosaaa.\"",
        next: "ronHer2"
    },
    {
        id: "ronHer2",
        text: "\"Stop it Ron, stop.\"",
    },
    
    
    {
        id: "excaliburStudent",
        text: "\"Professor Excalibur has the incredible ability to be in two places at once. I wish I was awesome as him!\"",
    },
    
    {
        id: "treeIntro",
        text: "\"After the Yule Ball, this Vegeta tree will have become 9001 years old, to the dismay of obsessive compulsives everywhere.\"",
    },
    
    {
        id: "doorLocked",
        text: "It's locked.",
    },
    {
        id: "unlockDoor",
        text: "You unlock the door with the attic key.",
        activate: function(){reloadRoomWithState(1)}
    },
    
    {
        id: "dogWoof",
        text: "*bark*",
        next: "dogChoice"
    },
    {
        id: "dogWhimper",
        text: "*whine*",
    },
    {
      id: "dogChoice",
        choices: [
            {
                text: "Woof!",
                next: "dogWoof"
            },
            {
                text: "Stupid dog!",
                next: "dogWhimper"
            },
            {
                text:"[Walk away]",
            },
        ]
    },
    
    
    {
        id: "planksIntro",
        text: "Just a bunch of wooden planks.",
    },
    {
        id: "planksMove",
        text: "You move the planks to the side, revealing stairs.",
        activate:function(){reloadRoomWithState(1)}
    },
    
    {
        id: "belleDressers",
        text: "The dresser is filled with rope and strange outfits. No rose.",
    },
    {
        id: "bellePot",
        text: "It looks like there's something inside...",
        next: "bellePot2"
    },
    {
        id: "bellePot2",
        text: "[Acquired Rose!]",
        activate:function(){player.inventory.hasRose = true;}
    },
    
    
    {
        id: "bird",
        text: "\"Great. Everyone is home for the weekend, while I'm stuck here waiting for the headmaster.\"",
        next: "bird2"
    },
    {
        id: "bird2",
        text: "\"You shit on one guy's car and all the humans get mad at you.\"",
    },
    
    
];