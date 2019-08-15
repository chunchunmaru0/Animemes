const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const fetch = require("node-fetch");
const fs = require("fs");



client.once('ready', () => {
  console.log('Ready!');
  client.user.setActivity("$help", {type: "PLAYING"});
  
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();



const load = dirs => {
  const commands = fs.readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'));
  for (let file of commands) {
      let pull = require(`./commands/${dirs}/${file}`);
      client.commands.set(pull.config.name, pull);
      if (pull.config.aliases) pull.config.aliases.forEach(a => client.aliases.set(a, pull.config.name));
    };
  };
  ["general", "info"].forEach(x => load(x));




client.on('message', async message => {


  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();

  

 let commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
 if(commandfile) commandfile.run(client,message,args)

  
});




  
client.login(token);