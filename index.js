const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const fetch = require("node-fetch");


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
           var imgUrl;
           for (var i = 0; i < children.length; i++) {
             var childData = children[i].data;
             var imgPreview = childData.preview;
             var imgArray = imgPreview.images;
             var source = imgArray[0].source;
             imgUrl = source.url;


             console.log(imgUrl)

           };
           var rng = Math.floor(Math.random() * children.length) + 3;
           var imgFile = imgUrl[rng];
           console.log(rng);
           console.log(imgFile);
            console.log(children.length)
            
          });

    message.channel.send("MEMEs")
  }

  
  });




  
client.login(token);