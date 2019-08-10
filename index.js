const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const fetch = require("node-fetch");
var meme ="";



client.once('ready', () => {
  console.log('Ready!');
  
});



client.on('message', message => {


  if (message.content.startsWith(`${prefix}help`)){
    
     message.channel.send('This is Help!')

  }

  if (message.content.startsWith(`${prefix}meme`)){
    

    
    fetch("https://www.reddit.com/r/Animemes/.json")
      .then(function(response) {
         return response.json();
       })
      .then(function(jsonObj) {

        var data = jsonObj.data;
        var children = data.children;
        var imgUrl = new Array;

        for (var i = 0; i < children.length; i++) {
         var childData = children[i].data;
        imgUrl[i]= childData.url;
        };    
        var rng = Math.floor(Math.random() * children.length) + 3;
        var imgFile = imgUrl[rng];
        console.log(imgFile);

        console[imgFile];
        message.channel.send("",{  
        
          file: imgFile
      
        });
    
      });

   
    }

  
  });




  
client.login(token);