const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');


client.once('ready', () => {
  console.log('Ready!');
  
});


client.on('message', message => {


  if (message.content.startsWith(`${prefix}help`)){
    
     message.channel.send('This is Help!')

  }

  
  });




  
client.login(token);