const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", function() {
    var clientonmessage = `
------------------------------------------------------
> Logging in...
------------------------------------------------------
Logged in as ${client.user.tag}
Working on ${client.guilds.size} servers!
${client.channels.size} channels and ${client.users.size} users cached!
I am logged in and ready to roll!
LET'S GO!
------------------------------------------------------
----------Bot created by Tea Cup#3433-----------
------------------------------------------------------
-----------------Bot's commands logs------------------`

    console.log(clientonmessage);
    client.user.setGame(
        ` Test Bot For Hunters Youtube! `,
        "https://www.twitch.tv/xxwilsongamingxx"
      );
});

client.on('message', msg => {
  if (msg.content === 't.ping') {
    msg.reply('Pong!');
  }
      if (msg.content === 't.help') {
    msg.reply('Hi There! \n It Seems You Need Help With Something! \n If you need help with Commands Do `t.commands`!\if You need help with this bot contact Tea Cup#3343! \n For Suggestions Join Our Discord!! >https://discord.gg/6mvvfSm');
});

//Now we will be doing a welcome command! Today!
client.on('guildMemberAdd' , member => {               //You can Change The Name
  const channel = member.guild.channels.find('name', 'welcome log');
  if (!channel) return;
 channel.send(`Welcome to the server, ${member}`);
});
    
    //Today i will be showing how to get your bot to send a msg everytime it joins a discord server!
client.on("guildCreate", guild => {
  console.log(`The Bot Has Joined ${guild.name} , Owned By ${guild.owner.user.tag}`);
    
  var guildMSG = guild.channels.find('name', 'general');
  
  guildMSG.send(`
  Hello There THanks for adding me to your discord!`);
});

client.login('SUPER_SECRETE_BOTLOGIN!'); //Thats it for todays lession! 3/25/18
