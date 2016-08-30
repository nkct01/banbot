(function () {

    // Change this to your GitHub username so you don't have to modify so many things.
    var fork = "smashbro12";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        //Extend the bot here, either by calling another function or here directly.

        // You can add more spam words to the bot.
        var spamWords = ['spam1', 'spam2', 'spam3', 'spam4'];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }

             // Example code for a bot command:
        bot.commands.mwarCommand = {
          command: 'mwar',  // The command to be called. With the standard command literal this would be: !bacon
          rank: 'user', // Minimum user permission to use the command
          type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Mwar. http://cdn.bulbagarden.net/upload/thumb/f/fe/Gary_Arcanine.png/250px-Gary_Arcanine.png");
            }
          }
        };
        
        bot.commands.dyldoCommand = {
          command: 'dyldo',
          rank: 'user',
          type: 'exact',
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me http://arkhamnetwork.org/community/data/avatars/l/36/36281.jpg");
            }
          }
        };
        
        bot.commands.bllistCommand = {
          command: 'bllist',
          rank: 'user',
          type: 'exact',
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Blacklisted songs: https://github.com/smashbro12/arkhamBot/blob/master/doc/blacklist.md");
            }
          }
        };
        
        bot.commands.genreCommand = {
          command: 'genre',
          rank: 'user',
          type: 'exact',
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Tip: We allow all kinds of music except parodies!");
            }
          }
        };
        
        bot.commands.ghostCommand = {
          command: 'ghost',
          rank: 'bouncer',
          type: 'exact',
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Ooooooooooooooo, Spooky. http://arkhamnetwork.org/community/data/avatars/l/0/427.jpg");
            }
          }
        };
        
        bot.commands.smashCommand = {
          command: 'smash',
          rank: 'bouncer',
          type: 'exact',
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me I'd Smash. http://arkhamnetwork.org/community/data/avatars/l/3/3728.jpg");
            }
          }
        };
        
        bot.commands.pepeCommand = {
          command: 'pepe',
          rank: 'bouncer',
          type: 'exact',
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me https://66.media.tumblr.com/f2dd023bc84c5bfb06475dc14c67836c/tumblr_nut4qvjm3l1ucxsygo1_500.gif");
            }
          }
        };
        
        bot.commands.languageCommand = {
          command: 'language',
          rank: 'bouncer',
          type: 'exact',
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me http://i.imgur.com/gyIbw3n.jpg");
            }
          }
        };
        
        bot.commands.staffCommand = {
          command: 'staff',
          rank: 'user',
          type: 'exact',
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Click here for more info on becoming staff in Arkham Network's Plug.dj community: http://arkhamnetwork.org/community/threads/applying-for-plugdj-staff.61770/.");
            }
          }
        };
        
        bot.commands.squidCommand = {
          command: 'squid',
          rank: 'user',
          type: 'exact',
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Click here for more info on joining our Minecraft server! http://goo.gl/xkKYSQ");
            }
          }
        };
        
        bot.commands.serverCommand = {
          command: 'server',
          rank: 'user',
          type: 'exact',
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Click here for more info on joining our Minecraft server! http://goo.gl/xkKYSQ");
            }
          }
        },
        // Load the chat package again to account for any changes
        bot.loadChat();

      }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
      botName: "BanBot",
      language: "english",
      chatLink: "https://rawgit.com/smashbro12/arkhamBot/master/lang/en.json",
      scriptLink: "https://rawgit.com/basicBot/source/master/basicBot.js",
      roomLock: false, // Requires an extension to re-load the script
      startupCap: 200, // 1-200
      startupVolume: 20, // 0-100
      startupEmoji: true, // true or false
      autowoot: true,
      autoskip: true,
      smartSkip: true,
      cmdDeletion: true,
      maximumAfk: 120,
      afkRemoval: false,
      maximumDc: 120,
      bouncerPlus: true,
      blacklistEnabled: true,
      lockdownEnabled: false,
      lockGuard: false,
      maximumLocktime: 10,
      cycleGuard: false,
      maximumCycletime: 10,
      voteSkip: true,
      voteSkipLimit: 10,
      historySkip: true,
      timeGuard: true,
      maximumSongLength: 6,
      autodisable: false,
      commandCooldown: 0,
      usercommandsEnabled: true,
      skipPosition: 3,
      skipReasons: [
      ["theme", "This song does not fit the room theme. "],
      ["op", "This song is on the OP list. "],
      ["history", "This song is in the history. Please play songs that have not been played recently. "],
      ["mix", "You played a mix, which is against the rules. "],
      ["sound", "The song you played had bad sound quality or no sound. "],
      ["nsfw", "The song you contained was NSFW (image or sound). "],
      ["unavailable", "The song you played was not available for some users. Please find a different version of your song. "],
      ["bl", "This song is blacklisted. "],
      ],
      afkpositionCheck: 10,
      afkRankCheck: "residentdj",
      motdEnabled: false,
      motdInterval: 10,
      motd: "Come join us on our Mincraft server! ArkhamNetwork IP: mc.arkhamnetwork.org. Use the info here to learn more about joining our server:http://goo.gl/xkKYSQ. Think you're fit for staff here in Arkham's plug.dj community? Apply here:http://goo.gl/sJOUqL.",
      filterChat: false,
      etaRestriction: false,
      welcome: false,
      opLink: null,
      rulesLink: "https://goo.gl/LsT5zA",
      themeLink: null,
      fbLink: null,
      youtubeLink: null,
      website: "www.arkhamnetwork.org/community",
      intervalMessages: null,
      messageInterval: false,
      songstats: false,
      commandLiteral: "!",
      blacklists: {
        op: "https://rawgit.com/smashbro12/arkhamBot/master/blacklists/op.json",
        bl: "https://rawgit.com/smashbro12/arkhamBot/master/blacklists/bl.json"
      }
    }));

    // Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/basicBot/source/master/basicBot.js", extend);

}).call(this);
