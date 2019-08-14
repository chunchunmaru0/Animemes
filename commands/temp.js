const Discord = require("discord.js")
const { prefix, token } = require('../config.json');
const fetch = require("node-fetch");


module.exports.run = async (client, message, args) => {
    var enteredContent = message.content
      var cityname = args;
      console.log(cityname);

      fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=YOUR_KEY")
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

module.exports.config = {
    name: "temp",
    aliases: ["t", "temperature"]
}