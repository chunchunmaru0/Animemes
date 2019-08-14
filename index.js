const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const fetch = require("node-fetch");
const fs = require("fs");



client.once('ready', () => {
  console.log('Ready!');
  bot.user.setActivity("$help", {type: "PLAYING"});
  
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();



client.on('message', async message => {


  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);


  if (cmd === `${prefix}help`){
    
     message.channel.send('This is Help!')

  }

  if (cmd === `${prefix}meme`){
    

    var rng = Math.floor(Math.random() * 3) + 0;
    var url = new Array;
    console.log("url rng is: " + rng)
    url = ["https://www.reddit.com/r/Animemes/top/.json", "https://www.reddit.com/r/Animemes/.json", "https://reddit.com/r/Animemes/top/.json?t=week", "https://reddit.com/r/Animemes/top/.json?t=month"]
    
    fetch(url[rng])
      .then(function(response) {
         return response.json();
       })
      .then(function(jsonObj) {

        var data = jsonObj.data;
        var children = data.children;
        var imgUrl = new Array;
        

       
    
        
        for (var i = 1; i < children.length; i++) {
         var childData = children[i].data;
        imgUrl[i]= childData.url;
        };    
        var rng = Math.floor(Math.random() * children.length - 3 + 1) + 3;
        console.log("children number = " + children.length)
        console.log("Meme rng is" + rng)
        var imgFile = imgUrl[rng];
        console.log(imgFile);

        console.log("")
        message.channel.send("",{  
        
          file: imgFile
      
        });
    
      });
      
      
      // console.log(image);
   
    }

    if (cmd ===`${prefix}temp`){
      var enteredContent = message.content
      var cityname = enteredContent.replace('$temp', '')
      console.log(cityname);

      fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=Your_Key")
        .then(function(response){
          return response.json();
        })
        .then(function(weatherObj){
          var mainWeather = weatherObj.main;
					var temp = mainWeather.temp
          var tempDegC = Math.round((temp - 273) * 100) / 100 + "°C";
          
          message.channel.send("The weather in "+cityname+" is: "+ tempDegC)
        })

    }

  
  });




  
client.login(token);