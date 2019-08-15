const fetch = require("node-fetch")
const { prefix } = require('../../config.json');

module.exports = {
    config: {
        name: "meme",
        aliases: ["m", "memes"],
        usage: "meme",
        category: "general",
        description: "displays the random animemes",
        accessableby: "members"
	},
	run: async (client, message, args) => {
    let msg = await message.channel.send("Generating...")

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
    // if(imgFile.startsWith("https://v.")){
    //   imgFile = imgUrl[rng]
    // }
    console.log(imgFile);

    console.log("")
    message.channel.send("",{  
    
      file: imgFile
  
    });
    msg.delete(2000);

  });

	}
}