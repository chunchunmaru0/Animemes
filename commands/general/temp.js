const { tempAPI } = require('../../config.json');
const fetch = require("node-fetch");

module.exports = {
    config: {
        name: "temp",
        aliases: ["t","temperature"],
        usage: "city_name",
        category: "general",
        description: "shows the temperature of entered city",
        accessableby: "members"
	},
	run: async (client, message, args) => {
    if(!args[0]){
      message.channel.send("Please Enter a Valid City Name");
    } else {
	  
      var cityname = args;
      console.log(cityname);

      fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid="+ tempAPI)
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

	}
}