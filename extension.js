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
        bot.commands.baconCommand = {
          command: 'bacon',  // The command to be called. With the standard command literal this would be: !bacon
          rank: 'user', // Minimum user permission to use the command
          type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Bacon!!!");
            }
          }
        };
        
        bot.commands.mwarCommand = {
          command: 'mwar',
          rank: 'user',
          type: 'exact',
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
              API.sendChat("/me Blacklisted songs: https://rawgit.com/smashbro12/arkhamBot/master/blacklists/bl.json");
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
              API.sendChat("/me Tip: All music genres are allowed here! Feel free to ask a staff if you are unsure whether your song is allowed.");
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
              var staff = API.getStaff();
              API.sendChat("/me Current staffs online: " + staff);
            }
          }
        };
        
        // Load the chat package again to account for any changes
        bot.loadChat();

      }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
      botName: "ArkhamBot",
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
      autodisable: true,
      commandCooldown: 10,
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
      afkRankCheck: "manager",
      motdEnabled: true,
      motdInterval: 10,
      motd: "Come join us on our Mincraft server! ArkhamNetwork IP: mc.arkhamnetwork.org / play.arkhamnetwork.org. Or, visit us on our forums page at arkhamnetwork.org.",
      filterChat: false,
      etaRestriction: false,
      welcome: false,
      opLink: null,
      rulesLink: "https://docs.google.com/document/d/1ppQL00dE91zUEwQUzZyvuocWYtNDCl-GxfbXekwawmM/edit?ts=577ea4ee#",
      themeLink: null,
      fbLink: null,
      youtubeLink: null,
      website: "arkhamnetwork.org",
      intervalMessages: ["Tip: Use !eta to check your waiting time.", "Tip: All parody songs are considered trolls and will be skipped.", "Tip: Need help? You can alert the staff with @staff <message>.", "Tip: You will be skipped if you play any song that has recently been played."],
      messageInterval: 5,
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
