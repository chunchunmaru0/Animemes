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
fs.readdir("./commands/", (err, files) =>{

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0) {
    console.log("[Logs] Couldn't Find Commands");
  }

  jsfile.forEach((f, i) => {
    let pull = require(`./commands/${f}`);
    client.commands.set(pull.config.name, pull);
    pull.config.aliases.forEach(alias => {
      client.aliases.set(alias, pull.config.name)
    })
  })  
})



client.on('message', async message => {


  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let cmd = command.toLowerCase();
  let args = messageArray.slice(1);


 let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
 if(commandfile) commandfile.run(client,message,args)

  
});




  
client.login(token);